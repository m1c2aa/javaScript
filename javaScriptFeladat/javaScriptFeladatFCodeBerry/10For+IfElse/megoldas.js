for (var a = 1; a <= 100; a++) {
  if ( a % 3 == 0 && a % 5 ==0) {
    console.log(a + ' kutya+cica');
  } else  if (a % 3 == 0){
    console.log(a + ' kutya');
  } else if (a % 5 == 0){
    console.log(a + ' cica');
  } else {
    console.log(a);
  }

}