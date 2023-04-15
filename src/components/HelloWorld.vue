<template>
  <div class="hello">
    <h1>{{ pageObj.msg }}</h1>
    <!-- <img src="@/assets/img/iphone.png" alt=""> -->
    <!-- <img :src="iphoneImg" alt=""> -->
    <!-- <img class="phone" src="" alt=""> -->
    <div class="m-box">
      <videoPlayer
        ref="videoPlayerRef"
        :options="playerOptions"
        @pause="onPlayerPause($event)"
      />
    </div>
    <!-- <div @click="showVideo" class="btn">播放</div> -->
  </div>
</template>

<script setup lang="ts">
import { defineProps, reactive, ref } from 'vue';
// 引入媒体
import videoPlayer from "vue-video-player";   // 如果使用全局引入 这句话可以不写，
import "videojs-flash";  // 如果使用全局引入 这句话可以不写，
  const props = defineProps({
    msg: {
      type: String
    }
  })
  const pageObj = reactive ({
    msg: props.msg,
    // img: require('https://www.apple.com.cn/v/iphone-14-pro/f/images/key-features/features/sizes/size_promax_deep_purple__ct7arcvi3vyq_large.jpg')
  })
  const videoPlayerRef = ref(null);
  const playerOptions = reactive ({
    height: "300",
    width: "600",
    sources: [
      {
        type: "rtmp/mp4",
        src: "rtmp://58.200.131.2:1935/livetv/hunantv",
      },
    ],
    techOrder: ["flash"],
    autoplay: true,
    controls: true,
  })
  var onPlayerPause = (player: string) => {
    console.log(player);
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  width: 100%;
  .phone {
    width: 30%;
    height: auto;
  }
  .m-box {
    width: 600px;
    height: 420px;
    background-color: rgba(0, 0, 0, .7);
  }
}
</style>
