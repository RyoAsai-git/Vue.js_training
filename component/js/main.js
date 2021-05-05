// グローバル登録のため全てのVueインスタンスから利用できる
Vue.component('global-component', {
  template: '<p>global</p>'
})

var localComponent = {
  template: '<p>local</p>'
}

var app = new Vue ({
  el: '#app',
  components: {
    'local-component': localComponent
  }
})