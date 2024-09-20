const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查，不然组件名不是短横线形式会报错
})

// module.exports = {
//   pages: {
//     index: {
//       // page 的入口
//       entry: "src/main.js", //可以修改入口文件
//     },
//   },
// }
