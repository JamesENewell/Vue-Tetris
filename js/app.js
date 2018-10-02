$(()=>{
  console.log('Hello There - General Kenobi');


  function drawBoard() {
    for(var row=0;row<22;row++){
      $('#gameBoard').append('<tr class="'+row+'"></tr>');
      for (var col=0;col<10;col++){
        $('.'+row).append('<td id="'+col+'"></td>');
      }
    }
  }

  drawBoard();

});
