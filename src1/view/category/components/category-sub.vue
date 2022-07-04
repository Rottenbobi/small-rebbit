<template>

<!-- 所有二级分类 -->
<div class="sub-list">
  <h3>全部分类</h3>
  <ul>
    <li v-for="i in categroy.topCategory.children" :key="i.id">
      <a href="javascript:;">
        <img :src="i.picture" >
        <p>{{i.name}}</p>
      </a>
    </li>
  </ul>
</div>
</template>

<script lang="ts" setup>
import useStore from '@/store';
const { categroy } = useStore()

</script>

<style lang="less" scoped>

.sub-list {
  margin-top: 20px;
  background-color: #fff;
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  ul {
    display: flex;
    padding: 0 32px;
    flex-wrap: wrap;
    li {
      width: 168px;
      height: 160px;
      a {
        text-align: center;
        display: block;
        font-size: 16px;
        img {
          width: 100px;
          height: 100px;
        }
        p {
          line-height: 40px;
        }
        &:hover {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>