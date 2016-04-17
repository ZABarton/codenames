var boardData = []


  function setupBoard(div){
    var cellCounter = 1;
    for(var row=1; row<6; row++){
      var current_row = $(document.createElement("tr")).appendTo("#" + div);
      current_row.id = "row" + String(row);
      for(var cell=0; cell<5; cell++) {
        $(document.createElement("td")).attr("id", div +cellCounter).appendTo(current_row);
        cellCounter ++;
      }
    }
  }

  function clearBoard(){
    $("#key").empty();
  }

  function resetColors(){
    $("td").removeClass();
    $("td").css("background-color", "#ccc");
    $("td").css("color", "#000");
  }

  function assignBoardData(){
    assignClues(words);
    assignColors();
    passBoardInfo();
  }

  function assignClues(words){
    clues = window.knuthShuffle(words.slice(0));
    clues.splice(25);
    for (var i=1; i <= clues.length; i++) {
      $("#gameboard" + i).text(clues[i-1]);
      boardData[i] = [clues[i-1]]
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
      $("#gameboard" + (i+1)).addClass(colorArray[i]);
      boardData[i+1].push(colorArray[i]);
    }
  }

  function passBoardInfo(array){
    // $("#spymaster").load("screen.html #gameboard")
    //   var cellCounter = 1;
    //   for(var row=1; row<6; row++) {
    //     var current_row = $(document.createElement("tr")).appendTo("#gameboard");
    //     current_row.id = "row" + String(row);
    //     for(var cell=0; cell<5; cell++) {
    //       $(document.createElement("td")).attr("id", "#key" + cellCounter).appendTo(current_row);
    //       $("#key" + cellCounter).load("screen.html #gameboard"+cellCounter);
    //       cellCounter ++;
    //     }
    //   }
      for (var i = 1; i <= 25; i++) {
      $("#key" + i).addClass(array[i]["1"]);
      $("#key" + i).css("background-color", array[i]["1"]);
      $("#key" + i).text(array[i]["0"]);
    }
  };

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

