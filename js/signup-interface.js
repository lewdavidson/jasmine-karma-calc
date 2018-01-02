$(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    console.log(email);
    $('#solution').prepend('<p>Thank You, ' +  email + ' has been added to our list!</p>');
  });
});
