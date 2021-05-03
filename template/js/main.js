var app = new Vue ({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
    message2: 'Hello <span style="color:red">Vue.js</span>',
    number: 100,
    ok: true,
    price: 29800,
  },
  methods: {
    clickHandler: function(event) {
      this.message = this.message.split('').reverse().join('')
    }
  },
  filters: {
    numberFormat: function(value) {
      return value.toLocaleString();
    }
  }
})