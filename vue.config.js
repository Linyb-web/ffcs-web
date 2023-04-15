const { defineConfig } = require('@vue/cli-service')
// import path from 'path'
// const resolve = (dir: string) => path.resolve(__dirname, dir)

module.exports = defineConfig({
  transpileDependencies: true,
  // 别名设置
  // resolve: {
  //   alias: {
  //     '@': resolve('./src'), // 把 @ 指向到 src 目录去
  //   },
  // },
})
