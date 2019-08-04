function kivonoMaradekolo () {
  var elsoSzam = prompt('Első szám: ?');
  var masodikSzam = prompt ('Második szám ?');
  console.log('Első szám = '+ elsoSzam);
  console.log('Második szám = '+ masodikSzam);
  console.log();
  var oszto = elsoSzam/masodikSzam;
  var modulus = elsoSzam%masodikSzam;
  console.log(elsoSzam+ ':' + masodikSzam + '=' + oszto + ', maradék : ' + modulus);
    return;
};
kivonoMaradekolo();
