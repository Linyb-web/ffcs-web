<template>
  <div class="basicPage">
    <!-- 介绍页区域_start -->
    <htmlVue v-if="['html'].includes(menuObj.focus)" />
    <cssVue v-else-if="['css'].includes(menuObj.focus)" />
    <jsVue v-else-if="['js'].includes(menuObj.focus)" />
    <!-- 介绍页区域_ end  -->
    <!-- 悬浮球区域_start -->
    <div class="menu-area float">
      <span v-for="(menuItem, menuIndex) in menuObj.list" :key="menuIndex"
        :style="{backgroundColor: menuItem.color}"
        class="menu-area-item"
        @click="menuClick(menuIndex)"
      >
        {{ menuItem.name }}
      </span>
    </div>
    <!-- 悬浮球区域_ end  -->
    <!-- 球动画区域_start -->
    <span v-if="menuObj.show" class="point" :style="{backgroundColor: menuObj.point.color}">
      {{ menuObj.point.name }}
    </span>
    <!-- 球动画区域_ end  -->
    <!-- 流动背景区域_start -->
    
    <!-- 流动背景区域_ end  -->
  </div>
</template>

<script name='index' setup>
import { reactive } from "vue";
import htmlVue from "./model/html.vue";
import cssVue from "./model/css.vue";
import jsVue from "./model/js.vue";

let menuObj = reactive({
  name: '悬浮球菜单',
  list: [
    {name: 'CSS', key: 'css', color: '#d3a138', float: true},// 211 161 56
    {name: 'JavaScript', key: 'js', color: '#4273b4', float: true},// 66 115 180
    {name: 'Ajax', key: 'ajax', color: '#7dafd9', float: true},// 125 175 217
  ],
  show: false,
  focus: 'html',
  point: {name: 'HTML', key: 'html', color: '#c5532b', float: true} // 197 85 43
})

let menuClick = ((index) => {
  menuObj.show = false;
  let obj = {...menuObj.point};
  menuObj.point = {...menuObj.list[index]};
  if(obj?.name){
    menuObj.list.splice(index, 1, obj);
  }else{
    menuObj.list.splice(index, 1);
  }
  setTimeout(() => {
    menuObj.show = true;
  }, 200)
  setTimeout(() => {
    menuObj.focus = menuObj.point.key;
    menuObj.show = false;
  }, 1800)
})
</script>

<style lang='scss' scoped>
.basicPage {
  display: flex;
  width: 100%;
  height: 100%;
  .menu-area {
    position: fixed;
    bottom: 10%;
    right: 10%;
    display: flex;
    &-item {
      display: block;
      width: 4rem;
      height: 4rem;
      margin: 0 7px;
      font-size: 12px;
      line-height: 4rem;
      text-align: center;
      border-radius: 50%;
      color: #fff;
      font-weight: bold;
      opacity: .7;
      cursor: pointer;
      transition: all 1s;
      &:hover {
        opacity: .9;
      }
    }
  }
  .float > span:nth-child(1) {
    position: relative;
    top: 0px;
    animation: movepoint 3s ease-in-out infinite;
  }
  .float > span:nth-child(2) {
    position: relative;
    top: 0px;
    animation: movepoint 3s ease-in-out infinite;
    animation-delay: .2s;
  }
  .float > span:nth-child(3) {
    position: relative;
    top: 0px;
    animation: movepoint 3s ease-in-out infinite;
    animation-delay: .7s;
  }
  .float > span:nth-child(4) {
    position: relative;
    top: 0px;
    animation: movepoint 3s ease-in-out infinite;
    animation-delay: 1s;
  }
  @keyframes movepoint {
    0% {
      top: 0px;
    }
    50% {
      top: 30px;
    }
    100% {
      top: 0px
    }
  }
  .lightning::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // height: inherit;
    box-shadow: 0 -10px 15px white;
    animation: lightning 2s ease-in-out infinite;
  }
  @keyframes lightning {
    0% {
      // transform: scaleY(0.5);
      opacity: 1;
    }
    50% {
      // transform: scaleY(0.1);
      opacity: .5;
    }
    100% {
      // transform: scaleY(0.5);
      opacity: 1;
    }
  }
  
  .point {
    position: absolute;
    width: 4rem;
    height: 4rem;
    margin: 0 7px;
    font-size: 12px;
    border-radius: 50%;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: all 1s;
    animation: point 2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @keyframes point {
    from {
      right: 20%;
      bottom: 12%;
      opacity: .7;
      transform: scale(1);
    }
    to {
      right: 50%;
      bottom: 50%;
      opacity: 0;
      transform: scale(2.5);
    }
  }
}
</style>