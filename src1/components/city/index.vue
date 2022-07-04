<script lang="ts" setup name="XtxCity">
import { onClickOutside } from '@vueuse/core'
import { ref, watch } from 'vue'
import axios from 'axios'
import type { AreaList } from '@/Dts/categroy'
import { emit } from 'process';
let address = ref('默认地址')
const target = ref(null)
const active = ref(false)
const cityList = ref<AreaList[]>([])
const cacheList = ref<AreaList[]>([])
const getCityList = async () => {
  const res = await axios.get<AreaList[]>(
    'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json',
  )
  cityList.value = res.data
  cacheList.value = res.data
}
//  type CityResult = {
//   provinceCode: string
//   provinceName: string
//   cityCode: string
//   cityName: string
//   countyCode: string
//   countyName: string
// }

// defineEmits<{
//   (e: 'changeCity', value: any): void
// }>()
getCityList()
onClickOutside(target, () => {
  active.value = false
})

const changeResult = ref({
  provinceCode: '',
  provinceName: '',
  cityCode: '',
  cityName: '',
  countyCode: '',
  countyName: '',
})

const selectCity = (city: AreaList) => {
  if (city.level === 0) {
    // 省
    changeResult.value.provinceName = city.name
    changeResult.value.provinceCode = city.code
    cityList.value = city.areaList
  }
  if (city.level === 1) {
    // 市
    changeResult.value.cityName = city.name
    changeResult.value.cityCode = city.code
    cityList.value = city.areaList
  }
  if (city.level === 2) {
    // 县（区）
    changeResult.value.countyName = city.name
    changeResult.value.countyCode = city.code
    
    // 关闭弹窗
    active.value = false
    // emit('changeCity', changeResult.value)
  }
}
// 监听关闭弹窗的处理，恢复数据
watch(active, (value) => {
  // 当关闭active的时候，需要回复数据
  if (!value) {
    cityList.value = cacheList.value
  }
})
</script>
<template>
  <div class="xtx-city" ref="target">
    <div
      class="select"
      :class="active ? 'active' : ''"
      @click="active = !active"
    >
      <span v-if="address" class="placeholder">{{address}}</span>

      <span v-else class="placeholder">请选择配送地址</span>
      <span class="value"></span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div class="option" v-show="active">
      <span
        class="ellipsis"
        v-for="i in cityList"
        :key="i.name"
        @click="selectCity(i)"
        >{{ i.name }}</span
      >
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
