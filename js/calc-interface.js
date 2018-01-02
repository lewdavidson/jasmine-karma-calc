var Calculator = require('./../js/ping-pong.js').calculatorModule;


$(document).ready(function() {
  $('#add').click(function(){
    var goal = parseInt($("#goal").val());
    var number2 = parseInt($("#number2").val());
    var calc = new Calculator ("human");
    var addResult = calc.add(goal, number2);
    $('#solution').append("<li>" + addResult + "</li>");
  });

  $('#SUB').click(function(){
    var goal = parseInt($("#goal").val());
    var number2 = parseInt($("#number2").val());
    var calc = new Calculator ("human");
    var subResult = calc.sub(goal, number2);
    $('#solution').append("<li>" + subResult + "</li>");
  });

  $('#multiples').click(function(){
    var goal = parseInt($("#goal").val());
    var number2 = parseInt($("#number2").val());
    var calc = new Calculator ("human");
    var multResult = calc.mult(goal, number2);
    $('#solution').append("<li>" + multResult + "</li>");
  });

  $('#divide').click(function(){
    var goal = parseInt($("#goal").val());
    var number2 = parseInt($("#number2").val());
    var calc = new Calculator ("human");
    var divResult = calc.div(goal, number2);
    $('#solution').append("<li>" + divResult + "</li>");
  });
});
