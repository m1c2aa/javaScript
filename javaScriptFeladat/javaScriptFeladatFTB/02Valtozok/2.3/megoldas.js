function timeMeter() {
  var timeOneHour = prompt('óra1?');
  var timeOneMinute = prompt('perc1?');
  var timeOneSecond = prompt('mp1?');
  var timeTwoHour = prompt('óra2?');
  var timeTwoMinute = prompt('perc2?');
  var timeTwoSecond = prompt ('mp2?');
  var feladat = (timeOneHour*60*60+timeOneMinute*60+timeOneSecond)-(timeTwoHour*60*60+timeTwoMinute*60+timeTwoSecond);
  console.log('Ennyi idő telt el a két időpont között: ' + feladat + ' másodperc!');
  return;
};
timeMeter();
