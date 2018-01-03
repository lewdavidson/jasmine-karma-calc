(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}


Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.add = function(goal, number2) {
  return goal + number2;
}
Calculator.prototype.sub = function(goal, number2) {
  return goal - number2;
}
Calculator.prototype.mult = function(goal, number2) {
  return goal * number2;
}
Calculator.prototype.div = function(goal, number2) {
  return goal / number2;
}

exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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

},{"./../js/ping-pong.js":1}]},{},[2]);
