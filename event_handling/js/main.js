var app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    message: '',
  },
  methods: {
    // clickHandler: function($event, message) {
    //   this.counter++
    //   this.message = message
    //   console.log($event)
    //   console.log($event.target.tagName)
    //   console.log($event.target.innerHTML)
    //   console.log($event.target.type)
    // }

    // clickHandler: function() {
    //   this.message = new Date().toLocaleTimeString()
    // },
    clear: function() {
      this.message = ''
    },
    clickHandler: function() {
      // alert('Shift + click ')
      alert('Clicked')
    }
  }
})