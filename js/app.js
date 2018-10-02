$(()=>{
  console.log('Hello There - General Kenobi');

  var testShapeCoordinates = [{row: 1, col: 1},{row: 2, col: 1},{row: 1, col: 2},{row: 2, col: 2}];

  function drawBoard() {
    for(var row=0;row<22;row++){
      $('#gameBoard').append('<tr class="'+row+'"></tr>');
      for (var col=0;col<10;col++){
        $('.'+row).append('<td id="'+col+'"></td>');
      }
    }
  }

  function fillShape(coordinates,fillColor) {
    for(var i=0;i<coordinates.length;i++){
      var row = coordinates[i].row;
      var col = coordinates[i].col;
      var $coor = $('.'+row).find('#'+col);
      $coor.attr('bgcolor',fillColor);
    }
  }


  drawBoard();
  fillShape(testShapeCoordinates,'blue');

});
