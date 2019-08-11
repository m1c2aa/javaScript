var bookCatalog = {
  'myBook1': {
    'title': 'To Kill a Mockingbird',
    'author': 'Harper Lee',
    'genre': 'coming-of-age story',
    'year of publication': 2015,
    'has been read': true,
    'main characters': ['Jean Louise Finch', 'Jeremy Finch', 'Atticus Finch'],
    'quotes': {
      'p116': '"Atticus, you must be wrong..." "How\'s that?" "Well, most folks seem to think they\'re right and you\'re wrong..." "They\'re certainly entitled to think that, and they\'re entitled to full respect for their opinions," said Atticus, "but before I can live with other folks I\'ve got to live with myself. The one thing that doesn\'t abide by majority rule is a person\'s conscience."',
      'p124': 'I wanted you to see something about her—I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It\'s when you know you\'re licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do.',
      'p309': '"An\' they chased him \'n\' never could catch him \'cause they didn\'t know what he looked like, an\' Atticus, when they finally saw him, why he hadn\'t done any of those things... Atticus, he was real nice..." His hands were under my chin, pulling up the cover, tucking it around me. "Most people are, Scout, when you finally see them."'
    },
    'borrowed by': null,
    'rating': 5
  },
  'myBook2': {
    'title': 'The Picture of Dorian Gray',
    'author': 'Oscar Wilde',
    'genre': 'philosophical fiction',
    'year of publication': 2016,
    'has been read': true,
    'main characters': ['Dorian Gray', 'Lord Henry Wotton', 'Basil Hallward'],
    'quotes': {
      'p12': 'You are an extraordinary fellow. You never say a moral thing, and you never do a wrong thing. Your cynicism is simply a pose.',
      'p46': 'Nowadays most people die of a sort of creeping common sense, and discover when it is too late that the only things one never regrets are one\'s mistakes.',
      'p127': '"That book you sent me so fascinated me that I forgot how the time was going." "Yes: I thought you would like it," replied his host, rising from his chair. "I didn\'t say I liked it, Harry. I said it fascinated me. There is a great difference." "Ah, you have discovered that?"'
    },
    'borrowed by': null,
    'rating': 5
  },
  'myBook3': {                                        // typeof lekérdezi a tulajdonság értékét, hogy milyen fajta. Szintaktika typeof bookCatalog.myBook1.title; = string lesz.
    'title': 'The Hitchhiker\'s Guide to the Galaxy', // String tÍpusú érték.
    'author': 'Douglas Adams',
    'genre': 'comedy science fiction',
    'year of publication': 2001,                      // Number tÍpusú érték.
    'has been read': false,                           // Boolen tÍpusú érték. (yes/no, on/ off, tru/false).
    'main characters': [],                            // Tömb   tÍpusú érték.
    'quotes': {},                                     // Objektum tÍpusú érték.
    'borrowed by': null,                              //In JavaScript null is "nothing". It is supposed to be something that doesn't exist. Unfortunately, in JavaScript, the data type of null is                                                           an object.
    'rating': undefined                               //undefined and null are equal in value but different in type: 
  },
  'page marker': function (book) {                    // Oldal megjelölő metódus. Deklarálunk egy argumentumot. Ezt nekünk kell megadni. A meghÍvás szintanktikája: bookCatalog['page marker']                                                               ('myBook1')
    var pageInitial = this[book].page;                // pageInitial deklarálása , ami egyenlő a jelenlegi könyv pl myBook1.page-ével.
    this[book].page = prompt('What page are you on in the book titled ' + this[book].title + '?'); // myBook1.page deklarálása, bekérdezéssel.
    if (typeof pageInitial === 'undefined') { // ÖsszehasonlÍtásnál '' fontosm kivéve boolen, number.  // Amennyiben a pageIntitial értéke undefined, azaz az első inditás.
      alert('You are on page ' + this[book].page + ' in the book titled ' + this[book].title + '.');
    } else {                                                                                       // További inditásoknál már esle ág megy végbe.
      alert('You are on page ' + this[book].page + ' in the book titled ' + this[book].title + '. Last time you were on page ' + pageInitial + ', so you have read ' + (this[book].page - pageInitial) + ' pages this time.');
    }
  },
  'unread': function () {                          // Iteráció : egy függvény ismételt végrehajtását jelenti. Szintaktika : for (var book in this) {}
    var booksToRead = [];                          // Üres tömb deklarálás.
    for (var book in this) {                       // A book változó deklarálása, ami helyére mindig más kerül. Pl: myBook1, myBook2.
      if (this[book]['has been read'] === false) { // Feltétel : Ha ez a könyv tuljadonságának['has neem read'] értéke === false, akkor teljesül.
        booksToRead.push(this[book].title);        // Ha teljesült a booksToRead függvényhez hozzáadjuk a (ez a könyv.cim-et).
      }                                            // Fügvény meghÍvása: bookCatalog.unread();
    }
    if (booksToRead.length === 0) {                // Ha a tömb hossza 0, azaz üres akkor a feltétel igaz. 
      console.log('You have read all your books.');// Amennyiben igaz akkor azt irja ki, hogy mindent elolvastál. Ellenkező esetben kiÍrja a booksToRead tömböt, azaz mit kell még elolvasnod.
    } else {
      console.log('You have not read the following books: ' + booksToRead);
    }
  },
  'change property': function (book, property) {  // Megváltoztat egy értéket ez a metódus. A meghivás szintaktika : bookCatalog['change property']('myBook3', 'rating');
    this[book][property] = prompt('What is the new value of the ' + property + ' property of ' + this[book].title + '?');
    alert('The new value of the ' + property + ' property of ' + this[book].title + ' is the following: ' + this[book][property] + '.');
  },
  'add quote': function (book, page) {           // Hozzá ad egy idézetet a megjelölt könyvhöz ez a metódus. A meghivás szintaktikája: bookCatalog['add quote']('myBook3', 'új idézet');
    this[book].quotes[page] = prompt('What is the quote that you would like to add to your quotes in ' + this[book].title + '?');
    alert('You have added the following quote to your quotes in ' + this[book].title + ': ' + this[book].quotes[page]);
  }
};



























