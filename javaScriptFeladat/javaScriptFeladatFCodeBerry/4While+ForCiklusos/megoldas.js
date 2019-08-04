var time = 0;
var rabbit = 30;
while(time <= 6){
  console.log('A pacsirta völgyben az ' + time + '. hónapban a nyulak száma:' +rabbit);
  time++;
  rabbit=rabbit*2;
}
for(time; time <=12 ; time++ ){
  rabbit=rabbit*3;
  console.log('A pacsirta völgyben az ' + time + '. hónapban a nyulak száma:' +rabbit);
}