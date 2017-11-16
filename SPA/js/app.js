var dataURL = 'http://jsonplaceholder.typicode.com/albums';

var App = new Vue({
  el: '.albumss',
  data: {
    albums: [] 
  },
  mounted() { 
    var self = this 
    $.getJSON(dataURL, function(data) {
      self.albums = data;
    });
  }
})

var dataURL = 'http://jsonplaceholder.typicode.com/photos';

var App2 = new Vue({
  el: '.photoss',
  data: {
    photos: [] 
  },
  mounted() { 
    var self = this 
    $.getJSON(dataURL, function(data) {
      self.photos = data;
    });
  }
})

