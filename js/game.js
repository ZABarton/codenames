  function setupBoard(){
    var cellCounter = 1;
    for(var row=1; row<6; row++){
      var current_row = $(document.createElement("tr")).appendTo("#gameboard");
      current_row.id = "row" + String(row);
      for(var cell=0; cell<5; cell++) {
        $(document.createElement("td")).attr("id", cellCounter).appendTo(current_row);
        cellCounter ++;
      }
    }
  }

  function assignColors(){
    var colors = ["black", "red", "red", "red", "red", "red", "red", "red", "red", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "gray", "gray", "gray", "gray", "gray", "gray", "gray",];
    var start = Math.floor(Math.random()*2);
    if (start === 0) {
      colors.push("red");
    } else {
      colors.push("blue");
    }
    var colorArray = window.knuthShuffle(colors.slice(0));
    for(var i=0; i<colorArray.length; i++) {
      $("#" + (i+1)).addClass(colorArray[i]);
    }
  }

  function resetColors(){
    $("td").removeClass();
    $("td").css("background-color", "#ccc");
    $("td").css("color", "#000");
  }

  function assignBoardData(file){
    var text = "";
    $.get(file, function(data){
      text=data;
      var words = text.split( '\n' );
      words.pop();
      clues = window.knuthShuffle(words.slice(0));
      clues.splice(25);
      assignClues(clues);
      assignColors();
      passBoardInfo();
    });
  }

  function assignClues(words){
    for (var i=1; i <= words.length; i++) {
      $("#" + i).text(words[i-1]);
      $("#" + i).data("word", words[i-1]);
    }
    console.log('done assigning clues')
  }

  function passBoardInfo(){
    for (var cellId = 1; cellId <= 25; cellId++) {
      var color = $("#"+String(cellId)).attr('class');
      var text = $("#"+String(cellId)).text();
      console.log(text);
      console.log(color);
    }
  }

// setupBoard();
// assignBoardData('words.txt');
// assignColors();

$(document).ready(function(){
  $("#reset").on("click", function(){
    resetColors();
    assignBoardData('words.txt');
  });

  $("#gameboard").on("click", ".red", function(){
    $(this).css("background-color", "red");
    $(this).removeClass("red");
  });

  $("#gameboard").on("click", ".blue", function(){
    $(this).css("background-color", "blue");
    $(this).removeClass("blue");
  });

  $("#gameboard").on("click", ".black", function(){
    $(this).css("background-color", "black");
    $(this).css("color", "white");
    $(this).removeClass("black");
  });

  $("#gameboard").on("click", ".gray", function(){
    $(this).css("background-color", "gray");
    $(this).removeClass("gray");
  });

});
// console.log(assignBoardData('words.txt'))
// console.log(assignBoardData('words.txt'))
// var result = assignBoardData('words.txt');

