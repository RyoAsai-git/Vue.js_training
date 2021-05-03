// グローバルフィルタ
//Vueインスタンス作成前に定義
// Vue.filter('numberFormat', function(value) {
//   return value.toLocaleString()
// })
Vue.filter('toUSD', function(jpy) {
  return jpy / 100
})

Vue.filter('numberFormat', function(value) {
  return value.toLocaleString()
})

var app = new Vue ({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
    message2: 'Hello <span style="color:red">Vue.js</span>',
    number: 100,
    ok: true,
    price: 29800,
    jpyPrice: 2980000000,

  },
  methods: {
    clickHandler: function(event) {
      this.message = this.message.split('').reverse().join('')
    }
  },
  // ローカルフィルタ
  // filters: {
  //   numberFormat: function(value) {
  //     return value.toLocaleString();
  //   }
  // }
})