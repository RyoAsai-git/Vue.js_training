var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
    basePrice: 100,
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    },
    taxIncludedPrice: {
      get: function() {
        //parseIntは整数を返す関数
        return parseInt(this.basePrice * 1.08)
      },
      set: function(taxIncludedPrice) {
        //Math.ceilは小数点以下の値を切り上げする関数
        return this.basePrice = Math.ceil(taxIncludedPrice / 1.08)
      }
    },
    computedNumber: function() {
      return Math.random()
    }
  },
  methods: {
    reversedMessageMethod: function() {
      return this.message.split('').reverse().join('')
    },
    methodsNumber: function() {
      return Math.random()
    }
  }
})