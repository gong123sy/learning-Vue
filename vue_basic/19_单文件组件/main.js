// 创建实例，并指明为哪个容器服务
// 没有脚手架浏览器不认识.vue文件和import

import App from "./App.vue";

new Vue({
  el: "#root",
  template: `<App></App>`,
  components: { App }, //注册这一个组件就行了
});
