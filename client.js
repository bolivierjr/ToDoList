$(function() {  
  $('#myInput').on("keydown", function search(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      addNewTodoItem()
    }
  });
  
  $('#addButton').on('click', function(e){
    e.preventDefault();
    addNewTodoItem();
  });
  
  $('#list').on('click', '.check-btn', function(e){
    $(e.target).parent().find('#items').toggleClass('itemToggle');
  });
  
  $('#list').on('click', '.close-btn', function(e){
    $(e.target).parent().remove();
   
  });
    
  function addNewTodoItem(){
    var itemName = $('#myInput').val();

    if (itemName === ""){
      $('#myInput').val('');
   
    } else {
      var textInput = $('<input>').attr({
        type: 'text',
        id: 'items',
        size: '50',
        value: itemName,
        disabled:true
      });
    
      var closeButton = $('<input>').attr({
        type: 'button',
        class: 'close-btn',
        value: '-'
      });
    
      var checkButton = $('<input>').attr({
        type: 'button',
        class: 'check-btn',
        value: 'L',
      });
    
      var div = $('<div>').append(checkButton).append(textInput).append(closeButton);
      $('#list').append(div);
      $('#myInput').val('');
    }
  }
});

