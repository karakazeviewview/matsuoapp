(function() {
  'use strict';

  var likeComponent = Vue.extend({
    props: {
      message: {
        type: String,
        default: 'Like'
      }
    },
    data: function() {
      return {
        count: 0
      }
    },
    template: '<button @click="countUp">{{ message }} {{ count }}</button>',
    
    
    watch: {
       //todos: function() {
         //localStorage.setItem('todos', JSON.stringify(this.todos));
         //alert('Data saved!');
       //}
      count: {
        handler: function() {
          localStorage.setItem('count', JSON.stringify(this.count));
           alert('Data saved!');
        },
        deep: true
      }
    },
    
    
    methods: {
      countUp: function() {
        this.count++;
        this.$emit('increment');
      }
    }
  });

  var app = new Vue({
    el: '#app',
    components: {
      'like-component': likeComponent
    },
    data: {
      total: 0
    },
    methods: {
      incrementTotal: function() {
        this.total++;
      }
    }
  });

})();