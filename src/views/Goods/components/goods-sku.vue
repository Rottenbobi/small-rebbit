<script setup lang="ts" name="GoodsSku">
import { GoodsInfo, SpecVal } from '@/types/goods'
import bwPowerSet from '@/utils/power-set'

const props = defineProps<{
  goods: GoodsInfo
   skuId?: String
}>()

// 切换选中状态
const changeSelected = (row: SpecVal, specVal: SpecVal[]) => {
  if (row.disabled) return
  if (row.selected) {
    row.selected = false
  } else {
    specVal.forEach((item) => {
      item.selected = false
    })
    row.selected = true
  }

  // 更新点击后的禁用状态
  // 1. 获取当前的选中状态
  updateSpecBtnDisabled()
}

// sku的禁用状态
// 1. 筛选出有效的sku
const optionalSku = () => {
  return props.goods.skus.filter((item) => item.inventory)
}
// 2. 在有效的sku中规格 必然也是 有效的
// 3. 将这些情况 放入路径字典
const pathmap: any = {}
// 根据有效sku得到路径字典
optionalSku().forEach((sku) => {
  // console.log()
  // 每一个sku的规格属性
  const powerset = bwPowerSet(sku.specs.map((item) => item.valueName))
  powerset.forEach((spec) => {
    const pathKey = spec.join('+')
    pathmap[pathKey] = true
  })
  // 处理arr的幂集算法
})
// console.log(pathmap)
// 4. 默认选中 根据每一项的值和组合的值 去路径字典中进行查查
const updateSpecBtnDisabled = () => {
  const selectedArr = getSelected() // 记录的选中状态 ['', '', '']
  // console.log(selectedArr)
  props.goods.specs.forEach((spec, index) => {
    spec.values.forEach((specBtn) => {
      const tempArr = [...selectedArr] // ['蓝色', '', '10']
      tempArr[index] = specBtn.name
      // specBtn.name 蓝色
      const pathKey = tempArr.filter((it) => it).join('+') // ['蓝色', '10']
      // 去路径字典中查找
      const isSpec = pathmap[pathKey]
      if (!isSpec) {
        specBtn.disabled = true
      } else {
        specBtn.disabled = false
      }
    })
  })
}

// 获取当前选中状态
const getSelected = () => {
  const selectedArr: string[] = []
  props.goods.specs.forEach((spec, index) => {
    selectedArr.push('')
    spec.values.forEach((specVal) => {
      if (specVal.selected) {
        selectedArr[index] = specVal.name
      }
    })
  })
  return selectedArr
}

updateSpecBtnDisabled()

// 初始化时，设置默认选中效果
const initSelectedSpec = () => {
  const sku = props.goods.skus.find((item) => item.id === props.skuId)
  // console.log(sku)
  // goods.skus sku.specs [{name: '颜色'，valuename: '蓝'}]
  // goods.specs [{name: '颜色', values: [{name: '蓝'}，{ name: '黑' } ] } ]
  if (sku) {
    // 如果根据父组件传递的skuId找到了对应的sku,设置默认选中
    props.goods.specs.forEach((item, index) => {
      // 获取到sku中选中的规格
      const value = sku.specs[index].valueName
      console.log(value)
      // 让value对应的规格选中
      const spec = item.values.find((item) => item.name === value)
      spec!.selected = true
    })
  }
}
// 先设置默认选中
initSelectedSpec()
// 初始化时，控制所有按钮的状态
updateSpecBtnDisabled()
 
//  
const emit = defineEmits<{
  (e: 'changeSku', skuId: string): void
}>()
// 全部选中后将值传递到父组件
const emitChangeSku = () => {
  // 1. 判断规格是否全部选中
  const selected = getSelected().filter(v => v)

  if (selected.length === props.goods.specs.length) {
    // 说明全部选中
    const sku = props.goods.skus.find(sku => {
      return sku.specs.every(
        (spec, i) => spec.valueName === selected[i]
      )
    })
    if (sku) {
      console.log(sku.id)
      emit('changeSku', sku.id)
    }
  }
}
</script>
<template>
  <div class="goods-sku">
    <dl v-for="spec in goods.specs">
      <dt>{{ spec.name }}</dt>
      <dd>
        <!-- selected: 代表选中 -->
        <!-- disabled: 禁用 -->
        <template v-for="val in spec.values">
          <img
            :class="{
              selected: val.selected,
              disabled: val.disabled
            }"
            @click="changeSelected(val, spec.values)"
            v-if="val.picture"
            :src="val.picture"
            alt=""
          />
          <span
            :class="{
              selected: val.selected,
              disabled: val.disabled
            }"
            @click="changeSelected(val, spec.values)"
            v-else
          >
            {{ val.name }}
          </span>
        </template>
      </dd>
    </dl>
  </div>
</template>

<style scoped lang="less">
.sku-state-mixin () {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  &.selected {
    border-color: @xtxColor;
  }
  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}
.goods-sku {
  padding-left: 10px;
  padding-top: 20px;
  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      flex: 1;
      color: #666;
      > img {
        width: 50px;
        height: 50px;
        margin-top: 5px;
        .sku-state-mixin ();
      }
      > span {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        padding: 0 20px;
        margin-top: 5px;
        .sku-state-mixin ();
      }
    }
  }
}
</style>
