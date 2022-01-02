import Vue from 'vue'
import App from './App.vue'



/*
두개가 동일한 역할
import App from './App.vue'
var App ={
  template: '<div>app</div>'
}


render: h => h(App) 와 components : { 'app': app  } 동일역할

new Vue({
  render: h => h(App),
  components : {
    'app': app
  }
}).$mount('#app')
*/



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/*
render:뷰내부적 사용
템플릿이라는 속성을 정의하면 내부적으로 render함수가 실행
render: h => h(App)
import App from './App.vue'
App이라는 컴포넌트내용을 다른 파일로 부터 불러와서 집어넣고 render함
*/


/*
두개의 역할은 동일하다
new Vue({  
}).$mount('#app')

new Vue({
  el: '#app'
})

-- 두개 모두 동일
new Vue({
  render: h => h(App),
}).$mount('#app')


new Vue({
  el: '#app',
  render: h => h(App),
})
*/