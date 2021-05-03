var app = new Vue ({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
    message2: 'Hello <span style="color:red">Vue.js</span>',
    number: 100,
    ok: true,
  },
  methods: {
    clickHandler: function(event) {
      this.message = this.message.split('').reverse().join('')
    }
  }
})