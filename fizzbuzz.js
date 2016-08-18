function fizzBuzz(){
  $('.main').empty();
  for (i=1; i<=100; i++){

    var line_item = '';

    if (i % 3 == 0){
      line_item = 'Fizz';

      if (i % 5 == 0){
        line_item += 'Buzz';
      }
      else {

      }
    }
    else if (i % 5 == 0){
      line_item = 'Buzz';
    }

    else {
      line_item = i;
    }

    $('.main').append('<div class="line">' + line_item + '</div>').hide().fadeIn(300);

    // if (i % 3 == 0){
    //
    //   if (i % 5 == 0) {
    //     $('.main').append('<div class="line fizzbuzz">FizzBuzz</div>');
    //   }
    //   else {
    //     $('.main').append('<div class="line fizz">Fizz</div>');
    //   }
    // }
    // else if (i % 5 == 0) {
    //   $('.main').append('<div class="line buzz">Buzz</div>');
    // }
    // else {
    //   $('.main').append('<div class="line i">' + i + '</div>');
    // }

  };
}
