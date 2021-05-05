// グローバル登録のため全てのVueインスタンスから利用できる
Vue.component('global-component', {
  template: '<p>global</p>'
})

Vue.component('button-counter', {
  // コンポーネントのデータは関数である必要がある
  //各インスタンスが独自のインスタンスを利用できるようにするため
  data: function() {
    return {
      count: 0
    }
  },
  // template: '<button v-on:click="count++">{{ count }}</button>'
  
  //以下はエラー 要素はdivなどで囲む必要がある
  // template: '</span><button v-on:click="count++">{{ count }}</button>'
  template: '<div><span>count: </span><button v-on:click="count++">{{ count }}</button></div>'
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