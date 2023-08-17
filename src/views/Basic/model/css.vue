<template>
  <div class="cssPage" style="background-color: rgb(211, 161, 56, .3);">
    <h2>{{ pageObj.title }}</h2>
    <!-- 简介区域_start -->
    <div class="content">
      <h3>{{ pageObj.introduceBriefly.title }}</h3>
      <ol>
        <li v-for="(item, index) in pageObj.introduceBriefly.list" :key="index">
          {{ item.desc }}
        </li>
      </ol>
      <h3>{{ pageObj.optObj.title }}</h3>
      <ol>
        <li v-for="(optItem, optIndex) in pageObj.optObj.list" :key="optIndex">
          <h4>{{ optItem.name }}</h4>
          <ol type="a">
            <li v-for="(optSubItem, optSubIndex) in optItem.data" :key="optSubIndex"  style="width: 100%;">
              <span v-if="optItem.data.length > 1"></span>
              {{ optSubItem.name }}
              <table>
                <thead>
                  <tr>
                    <th v-for="(tItem, tIndex) in pageObj.optObj.table" :key="tIndex" :style="{width: `${tItem.width}%`}">
                      {{ tItem.name }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ optSubItem.grammar }}</td>
                    <td>{{ optSubItem.affect }}</td>
                    <td>{{ `例：${optSubItem.example}` }}</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ol>
        </li>
      </ol>
    </div>
    <!-- 简介区域_ end  -->
  </div>
</template>

<script setup lang='ts'>
import { reactive } from "vue";

let pageObj = reactive({
  title: 'CSS介绍(Cascading Style Sheets，层叠样式表）',
  introduceBriefly: {
    title: '什么是CSS？',
    list: [
      {desc: 'CSS 指层叠样式表 (Cascading Style Sheets)'},
      {desc: 'CSS语言是一种标记语言,它不需要编译,可以直接由浏览器解释执行(属于浏览器解释型语言)'},
    ]
  },
  optObj: {
    title: 'CSS选择器',
    table: [
      {name: '语法', width: 20, },
      {name: '作用', width: 25, },
      {name: '例子', width: 55, },
    ],
    list: [
      {type: 'def', name: '常用选择器', data: [
        {name: '元素选择器', grammar: '标签名{}', affect: '选中对应标签中的内容元素进行样式赋值', example: 'div {}、span {}、p {}、a {}'},
        {name: '类选择器（class）', grammar: '.class属性值{}', affect: '选中对应class属性值的内容元素进行样式赋值', example: '.page-area {}'},
        {name: 'ID选择器', grammar: '#ID属性值{}', affect: '选中对应ID属性值的内容元素进行样式赋值', example: '#cssPage {}'},
        {name: '通配符选择器', grammar: '*{}', affect: '页面所有的标签执行该样式，常在根页面处进行重置间距的操作', example: '* {}'},
      ]},
      {type: 'group', name: '群组选择器', data: [
        {name: '群组选择器', grammar: '选择器1, 选择器2, ... {}', affect: '同时选中对应选择器1，选择器2，选择3内的元素', example: '.page-area, p, #cssPage {}'}
      ]},
      {type: 'group', name: '关系选择器', data: [
        {name: '后代选择器', grammar: '选择器1 选择器2 {}', affect: '后代选择器也叫包含选择器，祖先元素直接或间接的包含后代元素', example: '.page-area p {}, #cssPage h2 {}'},
        {name: '儿子选择器', grammar: '选择器1 > 选择器2 {}', affect: '父元素直接包含子元素,子元素直接被父元素包含', example: '.page-area > p {}, #cssPage > h2 {}'},
        {name: '兄弟选择器', grammar: '选择器1 ～ 选择器2 {}', affect: '同级别元素为兄弟元素，选中当前选择器1的兄弟元素', example: '.page-area ～ p {}, #cssPage ～ h2 {}'},
        {name: '相邻兄弟选择器', grammar: '选择器1 + 选择器2 {}', affect: '同级别元素为兄弟元素，仅选中当前选择器1相邻的兄弟元素', example: '.page-area + p {}, #cssPage + h2 {}'},
      ]},
      {type: 'group', name: '属性选择器', data: [
        {name: '标签带属性', grammar: '标签名[属性名] {}', affect: '当前携带某属性的标签，对其进行样式赋值', example: 'p[title], table[border]'},
        {name: '属性值指定', grammar: '标签名[属性名="属性值"] {}', affect: '当前携带某属性的标签且该属姓名指定为特定的值，对其进行样式赋值', example: 'p[title], table[border]'},
        {name: '属性值开头匹配', grammar: '标签名[属性名^="属性值"] {}', affect: '当前携带某属性的标签且该属姓名匹配为特定的值开头，对其进行样式赋值', example: 'p[title=area], table[border=area]'},
        {name: '属性值结尾匹配', grammar: '标签名[属性名$="属性值"] {}', affect: '当前携带某属性的标签且该属姓名匹配为特定的值结尾，对其进行样式赋值', example: 'p[title^=area], table[border^=area]'},
        {name: '属性值结尾匹配', grammar: '标签名[属性名$="属性值"] {}', affect: '当前携带某属性的标签且该属姓名匹配为特定的值结尾，对其进行样式赋值', example: 'p[title$=area], table[border$=area]'},
        {name: '属性值包含匹配', grammar: '标签名[属性名*="属性值"] {}', affect: '当前携带某属性的标签且该属姓名存在匹配为特定的值，对其进行样式赋值', example: 'p[title*=area], table[border*=area]'},
        {name: '属性值包含匹配', grammar: '标签名[属性名|="属性值"] {}', affect: '当前携带某属性的标签且该属姓名存在匹配为特定的值，对其进行样式赋值', example: 'p[title*=area], table[border*=area]'},
      ]},
      {type: 'group', name: '伪类选择器', data: [
        {name: '常用伪类', grammar: '标签名:伪类 {}', affect: '分别为第一个子元素；最后一个子元素；第n个子元素（even或2n 选中偶数位的元素/odd或2n+1 选中奇数位得到元素）。', example: ':first-child {}, :last-child {}, :nth-child {}'},
        {name: '否定伪类', grammar: '标签名:not(条件) {}', affect: '否定当前除条件外的元素，对其进行样式赋值', example: 'li:not(.page-area) {}, p:not(:nth-child(2n+1)) {}'},
        {name: '元素伪类', grammar: '标签名:link/visited/hover/active {}', affect: '分别对应：link-未访问过的a标签；visited-已访问过的a标签；hover-鼠标移入后元素的状态；active-鼠标点击后的元素状态。', example: 'div:hover {}, a:link {}'},
      ]},
      {type: 'group', name: '伪元素选择器', data: [
        {name: '第一个字母', grammar: '标签名::first-letter {}', affect: '表示当前元素内的第一个字母，不是存在的元素表示元素的特殊状态', example: 'span::first-letter {}'},
        {name: '第一行元素', grammar: '标签名::first-line {}', affect: '表示当前元素内的第一行元素，但是对内联元素无效，它只对display属性为block、inline-block、table-cell、table-caption或list-item的元素有效。', example: 'div::first-line {}'},
        {name: '选中行元素', grammar: '::selection {}', affect: '表示当前元素内的选中行元素，只可以应用于少数的CSS属性：color, background, cursor,和outline。', example: '::selection {}'},
        {name: '元素开始的位置前', grammar: '::before {}', affect: '表示当前元素开始的位置前，所写的内容无法被选中，且永远在前，必须配合content一起使用', example: '.btn-area::before {}'},
        {name: '元素结束的位置后', grammar: '::after {}', affect: '表示当前元素结束的位置后，所写的内容无法被选中，且永远在后，必须配合content一起使用', example: '.btn-area::after {}'},
      ]}
    ]
  }
})
</script>

<style lang='scss' scoped>
.cssPage {
  width: 100%;
  height: 100%;
  overflow: auto;
  .content {
    width: 80%;
    // display: flex;
    padding: 0 10%;
    text-align: left;
  }
}
</style>