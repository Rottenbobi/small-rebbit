<script setup lang="ts" name="GoodsSku">
import { GoodsInfo, SpecValue } from '@/Dts/categroy'
import { ref } from 'vue'
import bwPowerSet from '@/utils/power.set'
const props = defineProps<{
  goods: GoodsInfo
}>()
let pathMap: any = {}
const changeSelected = (subBtn: SpecValue, specVal: SpecValue[]) => {
  updeateSku()
 if (subBtn.disabled) return
 if (subBtn.selected) {
    subBtn.selected = false
  } else {
    specVal.forEach((value) => {
      value.selected = false
    })
    subBtn.selected = true
  }
}

// 点击选中规格
// spec: 规格
// val: 规格的值
// const changeSelected = (spec: Spec, sub: SpecValue) => {
// +  if (sub.disabled) return
//   // 增加一个selected
//   if (sub.selected) {
//     sub.selected = false
//   } else {
//     // 让所有的都不选中
//     spec.values.forEach((item) => {
//       item.selected = false
//     })
//     // 让自己选中
//     sub.selected = true
//   }
// }

// 筛选出有效的 Sku
const optionalSkus = () => {
  // console.log(props.goods.skus);

  return props.goods.skus.filter((sku) => sku.inventory)
}
// 有效Sku的数据处理
optionalSkus().forEach((sku) => {
  let arr = sku.specs.map((value) => {
    return value.valueName
  })
  const powerSet = bwPowerSet(arr)
   powerSet.forEach((item) => {
    const key = item.join('+')
    if (!(key in pathMap)) {
      pathMap[key] = true
    }
  })
  // console.log(bwPowerSet(arr))
})
//
const getPathMap = () => {
  const pathMap: any = {}
  // 1. 过滤掉库存为0的sku
  const skus = props.goods.skus.filter(item => item.inventory > 0)
  // console.log(skus)
  // 2. 遍历有效的sku,获取sku的幂集
  skus.forEach(item => {
    const arr = item.specs.map(sub => sub.valueName)
    // console.log(arr)
    // 3. 调用powerSet获取幂集
    const powerSet = bwPowerSet(arr)
    // 4. 把这些powerSet合并到一个路径字典中
    powerSet.forEach(sub => {
      const key = sub.join('★')
      // 5. 判断pathMap中有没有key
      if (key in pathMap) {
        // 6. 存在
        pathMap[key].push(item.id)
      } else {
        // 7. 不存在
        pathMap[key] = [item.id]
      }
    })
  })

  return pathMap
}
getPathMap()
// 默认选中
const updeateSku = () => {
  props.goods.specs.forEach((spec) => {
    spec.values.forEach((value) => {
      const isSpec = pathMap[value.name]
      if(!isSpec) {
        value.disabled = true
      } else {
        value.disabled = false
      }
    })
  })
}
updeateSku()

// 获取当前
const gerSelecte = () =>{
  let selecte:string[] = [] 
  props.goods.specs.forEach((spec,index) => {
    selecte.push('')
    spec.values.forEach((value) => {
      if(value.selected) {
        selecte[index] = value.name
      }
    })
  })
  return selecte
}


</script>
<template>
  <div class="goods-sku">
    <dl v-for="item in goods.specs" :key="item.name">
      <dt>{{ item.name }}</dt>
      <dd>
        <template v-for="sub in item.values" :key="sub.name">
          <img
            @click="changeSelected(sub, item.values)"
            v-if="sub.picture"
            :src="sub.picture"
            alt=""
            :title="sub.name"
            :class="{ selected: sub.selected, disabled: sub.disabled }"
            
          />
          <span
            @click="changeSelected(sub, item.values)"
           :class="{ selected: sub.selected, disabled: sub.disabled }"
            v-else
            >{{ sub.name }}</span
          >
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
