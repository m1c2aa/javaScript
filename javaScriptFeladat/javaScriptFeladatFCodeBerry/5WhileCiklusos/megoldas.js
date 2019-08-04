var totalBus = 20;
var workingBus = 15;
var busCounter = 10;
while (busCounter <= workingBus) {
  console.log("A(z)" + busCounter +". számú vonalon zavartalan a közlekedés.");
busCounter++;
}
while (busCounter <= totalBus) {
  console.log("A(z)" + busCounter + ". számú vonalon jelenleg nincs közlekedés.");
  busCounter++;
}
