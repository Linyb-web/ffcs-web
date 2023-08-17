<template>
  <div class="jsPage" style="background-color: rgba(66, 115, 180, .12);">
    <!-- 简介区域_start -->
    <div>
      <h2>{{ pageObj.title }}</h2>
      <i>{{ pageObj.desc }}</i>
      <hr/>
      <strong>{{ pageObj.content.title }}</strong>
      <ol class="list-area">
        <li v-for="(lItem, lIndex) in pageObj.content.list" :key="lIndex">{{ lItem.name }}</li>
      </ol>
    </div>
    <!-- 简介区域_ end  -->
    <!-- 事件区域_start -->
    <div>
      <strong>{{ evenObj.title }}</strong>
      <div class="even-area" v-for="(eveItem, evenIndex) in evenObj.list" :key="evenIndex">
        <i>{{ eveItem.name }}事件</i>
        <p>{{ eveItem.desc }}</p>
        <!-- 案例分享_start -->
        <div v-for="(exampleItem, exampleIndex) in eveItem.example" :key="exampleIndex">
          <h5>案例<span v-if="eveItem.example?.length>1">{{ `${exampleIndex+1}` }}</span>{{ `:${exampleItem.text}` }}</h5>
          <!-- <div class="html-area" v-html="exampleItem.html" @click="clickFun(exampleIndex, exampleItem.html)"></div> -->
          <div class="even-area-click" @click="postMessage(exampleItem)">我瞅瞅</div>
        </div>
        <!-- 案例分享_ end  -->
      </div>
      <!-- 页面嵌套 -->
      <iframe v-if="frameIs" ref="frameRef" class="frame-area" src="/static/js.html" frameborder="0"></iframe>
    </div>
    <!-- 事件区域_ end  -->
  </div>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";

const pageObj = reactive({
  title: 'JavaScript介绍',
  desc: 'JavaScript 是世界上最流行的编程语言。这门语言可用于 HTML 和 web，更可广泛用于服务器、PC、笔记本电脑、平板电脑和智能手机等设备。',
  content: {
    title: 'JavaScript 是脚本语言',
    list: [
      {name: 'JavaScript 是一种轻量级的编程语言。'},
      {name: 'JavaScript 是可插入 HTML 页面的编程代码。'},
      {name: 'JavaScript 插入 HTML 页面后，可由所有的现代浏览器执行。'},
      {name: 'JavaScript 很容易学习。'}
    ]
  }
})
let frameIs = ref(false);
let appCodeObj = ref(navigator)
const frameRef = ref(null);
const evenObj = reactive({
  title: 'DOM事件',
  list: [
    {name: 'onload和onunload', desc: '用户进入后离开页面时被触发，常用来检测访问者浏览器类型、版本以及处理cookie等',  example: [
      {text: '<body onload="getAppCodeName()"></body>'}
    ]},
    {name: 'click', desc: '用户点击事件，当前事件内可以执行代码行、调用函数等进行操作', example: [
      {text: `<h5 onclick="this.innerHTML='✎＿ 代码段进行赋值'">点击该文本，执行代码段</h5>`, isFrame: false, dom: 'clickDom'},
      {text: `<h5 onclick="clickFun('函数进行赋值')">点击该文本，执行函数</h5>`, isFrame: false, dom: 'clickFun'},
    ]},
    {name: 'onchange', desc: '结合输入字段的验证使用，或者是有一定页面交互时进行使用',  example: [
      {text: `<input type="text" id="changeDom" onchange="getChangeVal()" ><h5 id="inputGet"></h5>`}
    ]},
    {name: 'onmouseover和onmouseout', desc: '用户的鼠标移至 HTML 元素上方或移出元素时触发函数',  example: [
      {text: '<div onmouseover="mOver(this)" onmouseout="mOut(this)" class="mouseout">把鼠标移到上面</div>'}
    ]},
    {name: 'onmousedown和onmouseup', desc: '用户的鼠标移至 HTML 元素按下或抬起时间时触发函数',  example: [
      {text: '<div onmousedown="mDown(this)" onmouseup="mUp(this)" class="mouseout">试试鼠标点这里</div>'}
    ]},
    // {name: 'onload', desc: '用户页面加载完成时，进行执行',  example: [
    //   {text: '<div onload="mOver(this)">把鼠标移到上面</div>'}
    // ]},
    {name: 'onfocus', desc: '用户移动标签内获取焦点是，进行执行',  example: [
      {text: '<input type="text" onfocus="onFocus(this)" onblur="onBlur(this)"><h5 id="inputOn"></h5>'}
    ]}
  ]
})

let clickFun = ((index, msg) => {
  if(index === 1) evenObj.list[0].example[1].html = '<h5>1234</h5>';
})

let getChangeVal = (() => {
  console.log('Linyb');
  
})
let mOver = (() => {
  console.log('进入');
})
let mOut = (() => {
  console.log('离开');
})
let postMessage = ((item) => {
  if(!frameIs.value) return frameIs.value = true;
  let iframeWin = frameRef.value.contentWindow;
  iframeWin.postMessage({name: 'Linyb', html: item.text}, '*')
})
onMounted(() => {
  // console.log('浏览器版本', navigator);
  
})
</script>
<!-- <script>
function mOver(obj)
{
obj.innerHTML="谢谢"
}

function mOut(obj)
{
obj.innerHTML="把鼠标移到上面"
}
</script> -->
<style lang='scss' scoped>
.jsPage {
  width: 100%;
  height: 100%;
  overflow: auto;
  .list-area {
    text-align: left;
    padding: 0 20%;
    width: 60%;
  }
  .even-area {
    text-align: left;
    padding: 0 20%;
    width: 60%;
    > i {
      font-weight: 600;
    }
    .html-area {
      cursor: pointer;
      color: #ff9900;
    }
  }
  .frame-area {
    position: absolute;
    right: 0;
    top: 20%;
    width: 30%;
    height: 500px;
  }
}
</style>