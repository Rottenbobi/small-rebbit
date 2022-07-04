<script lang="ts" setup name="XtxCity">
import { ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { CityListType } from '@/types/data'
import axios from 'axios'

defineProps<{
  address: string
}>()

const emit = defineEmits(['changeAddress'])

// 控制城市选择的显示隐藏
const target = ref(null)
const active = ref(false)
onClickOutside(target, () => {
  active.value = false
})

// 获取城市数据
const cityList = ref<CityListType[]>([])
const cacheList = ref<CityListType[]>([])
const url =
  'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json'
const getCityList = async () => {
  const res = await axios.get<CityListType[]>(url)
  cityList.value = res.data
  cacheList.value = res.data
}
getCityList()

// 选择城市
const selectCity = ref({
  provinceCode: '',
  provinceName: '',
  cityCode: '',
  cityName: '',
  countyCode: '',
  countyName: ''
})
const onSelectCity = ({ level, code, name, areaList }: CityListType) => {
  if (level === 0) {
    selectCity.value.provinceCode = code
    selectCity.value.provinceName = name
  }
  if (level === 1) {
    selectCity.value.cityCode = code
    selectCity.value.cityName = name
  }
  if (level === 2) {
    selectCity.value.countyCode = code
    selectCity.value.countyName = name
    active.value = false
    emit('changeAddress', selectCity.value)
    return
  }
  cityList.value = areaList
}

watch(active, (val) => {
  if (!val) {
    cityList.value = cacheList.value
  }
})
</script>
<template>
  <div class="xtx-city" ref="target">
    <div
      :class="active ? 'active' : ''"
      class="select"
      @click="active = !active"
    >
      <span v-if="address" class="placeholder">{{ address }}</span>
      <span v-else class="placeholder">请选择配送地址</span>
      <span class="value"></span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div class="option" v-show="active">
      <span
        @click="onSelectCity(item)"
        class="ellipsis"
        v-for="item in cityList"
        :key="item.code"
      >
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="less">
.xtx-city {
  display: inline-block;
  position: relative;
  z-index: 400;
  .select {
    border: 1px solid #e4e4e4;
    height: 30px;
    padding: 0 5px;
    line-height: 28px;
    cursor: pointer;
    &.active {
      background: #fff;
    }
    .placeholder {
      color: #999;
    }
    .value {
      color: #666;
      font-size: 12px;
    }
    i {
      font-size: 12px;
      margin-left: 5px;
    }
  }
  .option {
    width: 542px;
    border: 1px solid #e4e4e4;
    position: absolute;
    left: 0;
    top: 29px;
    background: #fff;
    min-height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    > span {
      width: 130px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      padding: 0 3px;
      &:hover {
        background: #f5f5f5;
      }
    }
  }
}
</style>
