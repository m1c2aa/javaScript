function szorzoTabla() {
  var number = prompt('Melyik számot?');
  for (x = 1; x <= 5; x++) {
    console.log(x+ '*' + number + '=' + number*x);
  };
 return;
};
szorzoTabla();