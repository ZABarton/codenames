var boardData = []
var redCount = null
var blueCount = null
var redScore = null;
var blueScore = null;
var startTeam = null

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
    $("td").css("color", "#fff");
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
    blueCount = 0;
    redCount = 0;
    redScore = 0;
    blueScore = 0;
    var colors = ["black", "red", "red", "red", "red", "red", "red", "red", "red", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "gray", "gray", "gray", "gray", "gray", "gray", "gray",];
    var start = Math.floor(Math.random()*2);
    if (start === 0) {
      colors.push("red");
      redCount = 9
      startTeam = "red"
      blueCount = 8
    } else {
      colors.push("blue");
      redCount = 8
      startTeam = "blue"
      blueCount = 9
    }
    var colorArray = window.knuthShuffle(colors.slice(0));
    for(var i=0; i<colorArray.length; i++) {
      $("#gameboard" + (i+1)).addClass(colorArray[i]);
      boardData[i+1].push(colorArray[i]);
    }
    $("#wait").html("<span class='redText'>Red Team: <span id='rScore'>" + redScore + "</span>/" + redCount + "</span> || <span class='blueText'>Blue Team: <span id='bScore'>" + blueScore + "</span>/" + blueCount +"</span>");
  }

  function passBoardInfo(array){
      for (var i = 1; i <= 25; i++) {
      $("#key" + i).addClass(array[i]["1"]);
      $("#key" + i).css("background-color", array[i]["1"]);
      if (array[i]["1"] === "black") {
        $("#key" + i).css("color", "white");
      }
      $("#key" + i).text(array[i]["0"]);
    }
  };

// setupBoard();
// assignBoardData('words.txt');
// assignColors();

  // $("#gameboard").on("click", ".red", function(){
  //   $(this).css("background-color", "red");
  //   $(this).removeClass("red");
  // });

  // $("#gameboard").on("click", ".blue", function(){
  //   $(this).css("background-color", "blue");
  //   $(this).removeClass("blue");
  // });

  // $("#gameboard").on("click", ".black", function(){
  //   $(this).css("background-color", "black");
  //   $(this).css("color", "white");
  //   $(this).removeClass("black");
  // });

  // $("#gameboard").on("click", ".gray", function(){
  //   $(this).css("background-color", "gray");
  //   $(this).removeClass("gray");
  // });



