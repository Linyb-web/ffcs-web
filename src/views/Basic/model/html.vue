<template>
  <div class="htmlPage" style="background-color: rgba(197, 85, 43, .3);">
    <h2>{{ pageObj.title }}</h2>
    <img :src="pageObj.img" alt="">
    <div v-html="pageObj.html"></div>
    <xmp>
      {{ pageObj.html }}
    </xmp>
    <!-- 块级元素区域_start -->
    <div>
      <h3>{{ pageObj.blockObj.title }}</h3>
      <div class="ele-area">
        <table border="1">
          <thead>
            <tr>
              <th v-for="(hItem, hIndex) in pageObj.blockObj.head" :key="hIndex" :style="{width: `${hItem.width}%`}">
                {{ hItem.name }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(blockItem, blockIndex) in pageObj.blockObj.list" :key="blockIndex">
              <th>{{ `${blockItem.label}标签` }}</th>
              <td>{{ `${blockItem.name}` }}</td>
              <td class="ele-area-desc">{{ `${blockItem.desc}` }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 块级元素区域_ end  -->
    <!-- 内联元素区域_start -->
    <div>
      <h3>{{ pageObj.inlineObj.title }}</h3>
      <div class="ele-area">
        <table border="1">
          <thead>
            <tr>
              <th v-for="(hItem, hIndex) in pageObj.inlineObj.head" :key="hIndex" :style="{width: `${hItem.width}%`}">
                {{ hItem.name }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(inlineItem, inlineIndex) in pageObj.inlineObj.list" :key="inlineIndex">
              <th>{{ `${inlineItem.label}标签` }}</th>
              <td>{{ `${inlineItem.name}` }}</td>
              <td class="ele-area-desc">{{ `${inlineItem.desc}` }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 内联元素区域_ end  -->
  </div>
</template>

<script setup>
import { reactive } from "vue";
  /** 存放页面静态元素 */
  const pageObj = reactive({
    title: 'H5介绍',
    img: require('@/views/Basic/img/html.jpeg'),
    html: '',
    blockObj: {
      title: '块级元素',
      head: [
        {name: '元素类型', width: 10, },
        {name: '标签', width: 10, },
        {name: '描述', width: 80, }
      ],
      list: [
        {name: 'div', label: '大区块', desc: '可以把文档分割为独立的、不同的部分。它可以用作严格的组织工具，并且不使用任何格式与其关联。' },
        {name: 'hn', label: '标题', desc: 'n代表的是1-6这6个数字，即标题元素的6种格式，分别为h1、h2、h3、h4、h5与h6，其中的h为heading（标题）的意思，数字1~6代表标题的级别。以1为最大的标题，依次递减。' },
        {name: 'p', label: '段落', desc: '文字以段落的形式表达，而网页中的段落是用标签来定义的，p 元素会自动在其前后创建一些空白。' },
        {name: 'table', label: '表格', desc: '表格数据内容就可以使用，当前介绍内容即使用该标签。' },
        {name: 'ul', label: '无序列表', desc: 'ul标签表示页面中的无序列表，其中type可以取三个值，分别为disc、Circle与Square，分别代表小圆点、空心圆与小正方形；ul标签里只能嵌套li标签，输入文字或其他是不允许的。' },
        {name: 'ol', label: '有序列表', desc: 'ol标签表示页面中的有序列表，其中type可以取5值，取“1”代表数字1、2、3 … …，取“a”时表示小写字母a、b、c … …，取“A”时代表大写字母A、B、C … …，取“i”时代表小写罗马数字i、ii、iii … …，取“I”时代表大写罗马数字I、II、III … …;ul标签里只能嵌套li标签，输入文字或其他是不允许的。' },
        {name: 'dl', label: '自定义列表', desc: 'dl标签表示页面中的自定义列表，它增加了<dt>（定义列表中的项目）和 <dd> （描述列表中的项目），也理解为它可以自定义有序列表的序号是什么内容。' },
        {name: 'marquee', label: '字幕', desc: '又可以理解是“跑马灯”，在页面内进行滚动效果。在通知公告、文本超出以及重点通知领域使用较多。' },
        {name: 'hr', label: '水平线', desc: '在网页中加入一条水平的线。' },
      ]
    },
    inlineObj: {
      title: '内联元素（行内元素）',
      head: [
        {name: '元素类型', width: 10, },
        {name: '标签', width: 10, },
        {name: '描述', width: 80, }
      ],
      list: [
        {name: 'span', label: '元素', desc: 'span没有固定的格式表现。当对它应用样式时，它会产生视觉上的变化。' },
        {name: 'a', label: '语言', desc: '用于从一个页面链接到另一个页面，a元素最重要的属性是 href 属性，它指定链接的目标。a标签的使用方法有：1、页面跳转；2、锚点链接；3、下载文件；4、创建email链接；5、创建Tel链接等。', more: [
          {name: '页面跳转', desc: '页面跳转是我们常用的功能之一，通常在导航栏或菜单栏等地方当用户点击某个选项后就会打开对应的页面。我们只需要给a标签的【href】属性设置对应的网页地址就可以实现用户点击的时候跳转了。<\br>但是a标签默认会给显示的文字添加下划线，并且初始状态是显示蓝色的。我们可以通过给a标签设置css样式来改变这种状态。另外a标签默认是在当前页面打开链接地址，我们也可以通过给a标签设置【target】属性来实现在新的标签页中打开链接地址或者是在父级窗口中打开链接地址。'},
          {name: '锚点链接', desc: '锚点可以在同一页面的不同位置间跳转，使用场景为当一个页面很长的时候可以设置章节导航，用户点击某一章节的时候页面就会跳转到对应章节的位置。我们只需要给a标签的【href】属性设置为【#+当前页面某a标签的name属性】的形式当用户点击链接的时候就会跳转到对应a标签所在的位置。'},
          {name: '下载文件', desc: 'a标签的【download】属性是在HTML5中新增的属性，它指示浏览器下载 URL 而不是导航到它，并且会提示用户将href指定的链接资源保存为本地文件。如果为【download】属性设置属性值的话，则该属性值将作为下载文件的文件名来保存文件。但如果是跨域下载文件则该属性值无效。'},
          {name: '创建email链接', desc: 'a标签可以指向一个email邮箱地址，当用户点击链接的时候会打开用户本地的邮件程序来发送邮件。'},
          {name: '创建Tel链接', desc: 'a标签还可以指向一个手机号，当页面在手机浏览器器中运行的时候，用户点击链接就可以调用手机的拨号界面，来实现网页中点击就能拨打电话的功能。'},
          {name: '防止被搜索引擎收录', desc: '有时候我们并不希望a标签里的链接内容被Google或百度等搜索引擎抓取，这时候就需要使用a标签下rel属性来防止连接被收录。可以给该属性值设置为“externalnofollow”来实现该效果。【external 】属性表示这是一个相对于当前网站的外部资源，【nofollow】属性表示本文档的作者不想宣传该链接的文档。这对于外链或某些无意义链接非常有用。'},
        ] },
        {name: 'img', label: '字幕', desc: '又可以理解是“跑马灯”，在页面内进行滚动效果。在通知公告、文本超出以及重点通知领域使用较多。' },
        {name: 'input', label: '水平线', desc: '在网页中加入一条水平的线。' },
        {name: 'em', label: '强调', desc: '用来呈现需要被强调的文本，语法“<em>需要强调的文本</em>”。em标签会告诉浏览器把其中的文本表示为强调的内容；而对于所有浏览器来说，这意味着要把强调文本用斜体来显示。' },
        {name: 'i', label: '斜体', desc: '表示泄题文本那天，和机遇em标签类似，它告诉浏览器将包含其中的文本以斜体字（italic）或者倾斜（oblique）字体显示。' },
        {name: 'strong', label: '强调', desc: '加粗强调，当前可以和em标签一起使用，起到强调的作用。' },
        {name: 'br', label: '分行', desc: '是网页Html语言中的代码，表示分行，正确的显示效果应该是看不到这个代码的，应该看到的是分行效果，之所以看到的是代码，是网页设计者犯的一个错误。' },
      ]
    }
  })
</script>

<style lang='scss' scoped>
.htmlPage {
  width: 100%;
  height: 100%;
  overflow: auto;
  > img {
    width: 80%;
  }
}
.ele-area {
  width: 80%;
  display: flex;
  justify-content: center;
  padding: 0 10%;
  &-desc {
    text-align: left;
    text-indent: 2rem;
  }
}
</style>