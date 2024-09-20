//该文件是整个项目的入口文件

//引入Vue
import Vue from "vue" //这个引入的是vue.runtime.esm.js的版本，没有模版解析器,体积更小
//引入App组件，它是所有组件的父组件
import App from "./App.vue"
//关闭Vue的生产提示
Vue.config.productionTip = false

//创建Vue的实例对象--vm
new Vue({
  el: "#app",
  //将App组件渲染到页面上
  render: (h) => h(App),

  /* 完整写是这样的
  render:(createElement)=>{
    return createElement('h1',"你好啊")
  }
  */
})

//使用精简版的Vue可以节省体积，同时也使打包后的文件没有模版解析器
//组件里的模版的解析器在package.json里配置了"vue-template-compiler": "^2.6.14"

/*
关于不同版本的Vue
  1.vue.js与vue.runtime.xxx.js的区别：
      (1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
      (2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能：没有模板解析器。
  2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，
    需要使用render函数接收到的createElement函数去指定具体内容
*/

// new Vue({
//   el: "#app",
//   //没有模版解析器，这样写会报错
//   template: "<App></App>",
//   components: { App },
// });
