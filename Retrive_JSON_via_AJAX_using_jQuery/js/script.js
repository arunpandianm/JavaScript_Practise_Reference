$(function(){

  $('#clickMe').click(function(){

    $.getJSON('data1.json', function(data){
      var items = [];
      $.each(data, function(key, val){
        items.push('<li id= "' + key + '">' + val + '</li>');
      });

      $('<ul/>', {
        'class': 'myList',
        html: items.join('')
      }).appendTo('body');
    });

  });

});
