import Vue from "vue/dist/vue.esm.js";
import theApp from "./app";
console.log("1235");
export default function (app) {
  new Vue({
    el: app,
    render: (h) => h(theApp)
  });
}
