var AC =  {};

AC.Action = {
  GetBoard: "transfer",
  UpdateBoard: "changeColor"
};


/**
 * A simple helper function to append text to an element
 */
var appendTextToElement = function(parent_ele, text) {
  var ele = document.createElement('DIV');
  ele.innerHTML = text;
  parent_ele.appendChild(ele);
};


