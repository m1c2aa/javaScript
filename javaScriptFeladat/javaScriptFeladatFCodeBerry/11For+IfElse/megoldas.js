var allTurbines = 25; turbinePower = 2000; allPower = 0; tC = 1;
for (tC = 1; tC <= allTurbines; tC++){
  if (tC <= 10) {
     allPower = allPower+2000;
    console.log('a '+ tC + '. számú turbina teljes fordulaton működik, '+ turbinePower + ' MWh áaramot termelve. A farm összteljesÍtménye jelenleg '+ allPower + ' MWh.');
  } else if(tC <=20) {
    allPower = allPower+1000;
    turbinePower = 1000;
    console.log('a '+ tC + '. számú turbina fél fordulaton működik, '+ turbinePower + ' MWh áaramot termelve. A farm összteljesÍtménye jelenleg '+ allPower + ' MWh.')
  } else {
    allPower = allPower+0;
     turbinePower = 0;
    console.log('a '+ tC + '. számú turbina nulla fordulaton működik, '+ turbinePower + ' MWh áaramot termelve. A farm összteljesÍtménye jelenleg '+ allPower + ' MWh.')
  }
}


