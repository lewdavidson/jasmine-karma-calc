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

var Calculator = require('./../js/ping-pong.js').calculatorModule;


$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    $('#solution').empty();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    console.log(email);
    $('#solution').prepend('<p>Thank You, ' +  email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});
