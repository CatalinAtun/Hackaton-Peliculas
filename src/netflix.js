/*  
const netflixOriginals = [
    {title:"Beasts of No Nation", imdbID:"tt1365050"},
    {title:"Crouching Tiger, Hidden Dragon Sword of Destiny", imdbID:"tt2652118"},
    {title:"The Fundamentals of Caring", imdbID:"tt2452386"},
    {title:"Rebirth", imdbID:"tt4902716"},
    {title:"Tallulah", imdbID:"tt1639084"},
    {title:"XOXO", imdbID:"tt4855748"},
    {title:"ARQ", imdbID:"tt5640450"},
    {title:"The Siege of Jadotville", imdbID:"tt3922798"},
    {title:"I Am the Pretty Thing That Lives in the House", imdbID:"tt5059406"},
    {title:"7 años", imdbID:"tt5517438"},
    {title:"Mercy", imdbID:"tt5710042"},
    {title:"Spectral", imdbID:"tt2106651"},
    {title:"Barry", imdbID:"tt5477566"},
    {title:"Coin Heist", imdbID:"tt5740806"},
    {title:"Clinical", imdbID:"tt5577742"},
    {title:"iBoy", imdbID:"tt3171832"},
    {title:"Imperial Dreams", imdbID:"tt3331028"},
    {title:"I Don't Feel at Home in This World Anymore", imdbID:"tt5710514"},
    {title:"Burning Sands", imdbID:"tt5826432"},
    {title:"Deidra & Laney Rob a Train", imdbID:"tt4144332"},
    {title:"The Most Hated Woman in America", imdbID:"tt4842646"},
    {title:"The Discovery", imdbID:"tt5155780"},
    {title:"Sand Castle", imdbID:"tt2582576"},
    {title:"Tramps", imdbID:"tt4991512"},
    {title:"Blame!", imdbID:"tt6574146"},
    {title:"Shimmer Lake", imdbID:"tt1386691"},
    {title:"Okja", imdbID:"tt3967856"},
    {title:"To the Bone", imdbID:"tt5541240"},
    {title:"Death Note", imdbID:"tt1241317"},
    {title:"First They Killed My Father", imdbID:"tt4882376"},
    {title:"Gerald’s Game", imdbID:"tt3748172"},
    {title:"Our Souls at Night", imdbID:"tt5034266"},
    {title:"The Meyerowitz Stories (New and Selected)", imdbID:"tt5536736"},
    {title:"1922", imdbID:"tt6214928"},
    {title:"Wheelman", imdbID:"tt5723286"},
    {title:"The Killer", imdbID:"tt5379294"},
    {title:"Christmas Inheritance", imdbID:"tt7608534"},
    {title:"Bright", imdbID:"tt5519340"},
    {title:"The Open House", imdbID:"tt7608028"},
    {title:"The Cloverfield Paradox", imdbID:"tt2548396"},
    {title:"Irreplaceable You", imdbID:"tt6119856"},
    {title:"Mute", imdbID:"tt1464763"},
    {title:"The Outsider", imdbID:"tt2011311"},
    {title:"Paradox", imdbID:"tt7245176"},
    {title:"Roxanne Roxanne", imdbID:"tt5796838"},
    {title:"First Match", imdbID:"tt6061074"},
    {title:"6 Balloons", imdbID:"tt6142496"},
    {title:"Amateur", imdbID:"tt5580392"},
    {title:"Come Sunday", imdbID:"tt1690967"},
    {title:"Sometimes", imdbID:"tt5877882"},
    {title:"Forgive Us Our Debts", imdbID:"tt6679412"},
    {title:"Cargo", imdbID:"tt3860916"},
    {title:"Lust Stories", imdbID:"tt8439854"},
    {title:"Calibre", imdbID:"tt6218358"},
    {title:"TAU", imdbID:"tt4357394"},
    {title:"How It Ends", imdbID:"tt5246700"},
    {title:"Extinction", imdbID:"tt3201640"},
    {title:"The Most Assassinated Woman in the World", imdbID:"tt6186696"},
    {title:"Next Gen", imdbID:"tt7133686"},
    {title:"On My Skin", imdbID:"tt7121252"},
    {title:"The Land of Steady HabIts", imdbID:"tt6485928"},
    {title:"The Angel", imdbID:"tt5968274"},
    {title:"Hold the Dark", imdbID:"tt5057140"},
    {title:"Private Life", imdbID:"tt5536610"},
    {title:"22 July2", imdbID:"tt7280898"},
    {title:"Apostle", imdbID:"tt6217306"},
    {title:"The Night Comes for Us", imdbID:"tt6116856"},
    {title:"Been So Long", imdbID:"tt1682886"},
    {title:"The Other Side of the Wind", imdbID:"tt0069049"},
    {title:"Outlaw King", imdbID:"tt6679794"},
    {title:"Cam", imdbID:"tt8361028"},
    {title:"The Ballad of Buster Scruggs", imdbID:"tt6412452"},
    {title:"Mowgli: Legend of the Jungle", imdbID:"tt2388771"},
    {title:"Roma", imdbID:"tt6155172"},
    {title:"Bird Box", imdbID:"tt2737304"},
    {title:"IO", imdbID:"tt3256226"},
    {title:"Soni", imdbID:"tt6078866"},
    {title:"The Ridiculous 6", imdbID:"tt2479478"},
    {title:"Pee-wee's Big Holiday", imdbID:"tt0837156"},
    {title:"Special Correspondents", imdbID:"tt4181052"},
    {title:"The Do-Over", imdbID:"tt4769836"},
    {title:"Brahman Naman", imdbID:"tt5240748"},
    {title:"Mascots", imdbID:"tt4936176"},
    {title:"True Memoirs of an International Assassin", imdbID:"tt1542768"},
    {title:"Take the 10", imdbID:"tt5792472"},
    {title:"Girlfriend's Day", imdbID:"tt2962984"},
    {title:"Win It All", imdbID:"tt3155328"},
    {title:"Sandy Wexler", imdbID:"tt5893332"},
    {title:"Small Crimes", imdbID:"tt5717492"},
    {title:"Handsome: A Netflix Mystery Movie", imdbID:"tt5809020"},
    {title:"War Machine", imdbID:"tt4758646"},
    {title:"The Incredible Jessica James", imdbID:"tt5990342"},
    {title:"Naked", imdbID:"tt6048930"},
    {title:"Little Evil", imdbID:"tt2937366"},
    {title:"#REALITYHIGH", imdbID:"tt6119504"},
    {title:"Bomb Scared", imdbID:"tt6895746"},
    {title:"The Babysitter", imdbID:"tt4225622"},
    {title:"A Christmas Prince", imdbID:"tt7608418"},
    {title:"El Camino Christmas", imdbID:"tt3255590"},
    {title:"The Polka King", imdbID:"tt5539052"},
    {title:"Step Sisters", imdbID:"tt5267472"},
    {title:"Blockbuster", imdbID:"tt2463842"},
    {title:"A Futile and Stupid Gesture", imdbID:"tt5566790"},
    {title:"When We First Met", imdbID:"tt5783956"},
    {title:"Love per Square Foot", imdbID:"tt7853242"},
    {title:"Benji", imdbID:"tt1799516"},
    {title:"Game Over, Man!", imdbID:"tt3317234"},
    {title:"Happy Anniversary", imdbID:"tt6423886"},
    {title:"I Am Not an Easy Man", imdbID:"tt6857988"},
    {title:"Dude", imdbID:"tt3458510"},
    {title:"Candy Jar", imdbID:"tt6744044"},
    {title:"The Week Of", imdbID:"tt6821012"},
    {title:"The Kissing Booth", imdbID:"tt3799232"},
    {title:"Ibiza", imdbID:"tt3685236"},
    {title:"Alex Strangelove", imdbID:"tt5688996"},
    {title:"Set It Up", imdbID:"tt5304992"},
    {title:"To Each, Her Own", imdbID:"tt6290418"},
    {title:"The Legacy of a Whitetail Deer Hunter", imdbID:"tt4762824"},
    {title:"Father of the Year", imdbID:"tt7256866"},
    {title:"Brij Mohan Amar Rahe", imdbID:"tt6514010"},
    {title:"Like Father", imdbID:"tt7170950"},
    {title:"The Package", imdbID:"tt7525778"},
    {title:"To All the Boys I've Loved Before", imdbID:"tt3846674"},
    {title:"The After Party", imdbID:"tt3960240"},
    {title:"Sierra Burgess Is a Loser", imdbID:"tt3120280"},
    {title:"Nappily Ever After", imdbID:"tt0365545"},
    {title:"The Holiday Calendar", imdbID:"tt8262802"},
    {title:"The Princess Switch", imdbID:"tt8954732"},
    {title:"The Christmas Chronicles", imdbID:"tt2990140"},
    {title:"A Christmas Prince: The Royal Wedding", imdbID:"tt8709036"},
    {title:"Rajma Chawal", imdbID:"tt6747420"},
    {title:"5 Star Christmas", imdbID:"tt8775056"},
    {title:"Lionheart", imdbID:"tt7707314"},
    {Title:"The Last Laugh", imdbID:"tt7427356"} 
]
 */
/* window.netflixOriginals = netflixOriginals; */


//Music, Action, Fantasy, Romance, Horror, Thriller, Biography, Sci-Fi, Mystery, Crime, Animation, History, Western, Sport, Family, Drama, Adventure, Comedy, War, Action














/* 
const ombdResults = [
    {
      "Title": "Beasts of No Nation",
      "Year": "2015",
      "Rated": "NOT RATED",
      "Released": "16 Oct 2015",
      "Runtime": "137 min",
      "Genre": "Drama, War",
      "Director": "Cary Joji Fukunaga",
      "Writer": "Cary Joji Fukunaga (written for the screen by), Uzodinma Iweala (based on the novel by)",
      "Actors": "Abraham Attah, Emmanuel Affadzi, Ricky Adelayitor, Andrew Adote",
      "Plot": "A drama based on the experiences of Agu, a child soldier fighting in the civil war of an unnamed African country.",
      "Language": "English, Akan",
      "Country": "USA",
      "Awards": "Nominated for 1 Golden Globe. Another 33 wins & 53 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwMzMzMDI0NF5BMl5BanBnXkFtZTgwNDQ3NjI3NjE@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.8/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "92%"
        },
        {
          "Source": "Metacritic",
          "Value": "79/100"
        }
      ],
      "Metascore": "79",
      "imdbRating": "7.8",
      "imdbVotes": "60,831",
      "imdbID": "tt1365050",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "$83,861",
      "Production": "Netflix",
      "Website": "http://www.netflix.com/title/80044545",
      "Response": "True"
    },
    {
      "Title": "The Fundamentals of Caring",
      "Year": "2016",
      "Rated": "TV-MA",
      "Released": "24 Jun 2016",
      "Runtime": "97 min",
      "Genre": "Comedy, Drama",
      "Director": "Rob Burnett",
      "Writer": "Rob Burnett (screenplay), Jonathan Evison (novel)",
      "Actors": "Alex Huff, Donna Biscoe, Paul Rudd, Julia Denton",
      "Plot": "A man suffering an incredible amount of loss enrolls in a class about care-giving that changes his perspective on life.",
      "Language": "English",
      "Country": "USA",
      "Awards": "3 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTA1Mjc4ODI0NzReQTJeQWpwZ15BbWU4MDQ3MzAwMjkx._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "76%"
        },
        {
          "Source": "Metacritic",
          "Value": "55/100"
        }
      ],
      "Metascore": "55",
      "imdbRating": "7.3",
      "imdbVotes": "45,217",
      "imdbID": "tt2452386",
      "Type": "movie",
      "DVD": "24 Jun 2016",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "http://www.netflix.com/title/80097349",
      "Response": "True"
    },
    {
      "Title": "XOXO",
      "Year": "2016",
      "Rated": "TV-MA",
      "Released": "26 Aug 2016",
      "Runtime": "92 min",
      "Genre": "Drama, Music",
      "Director": "Christopher Louie",
      "Writer": "Christopher Louie (story by), Dylan Meyer",
      "Actors": "Sarah Hyland, Graham Phillips, Brett DelBuono, Hayley Kiyoko",
      "Plot": "Six strangers' lives collide in one frenetic, dream-chasing, hopelessly romantic night.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjkzNzI4MjQ5NV5BMl5BanBnXkFtZTgwNjc3MzM2OTE@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "71%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.3",
      "imdbVotes": "5,862",
      "imdbID": "tt4855748",
      "Type": "movie",
      "DVD": "26 Aug 2016",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "https://www.netflix.com/title/80057691",
      "Response": "True"
    },
    {
      "Title": "Crouching Tiger, Hidden Dragon: Sword of Destiny",
      "Year": "2016",
      "Rated": "PG-13",
      "Released": "26 Feb 2016",
      "Runtime": "96 min",
      "Genre": "Action, Adventure, Drama, Fantasy",
      "Director": "Woo-Ping Yuen",
      "Writer": "John Fusco (screenplay), Du Lu Wang (book)",
      "Actors": "Donnie Yen, Michelle Yeoh, Harry Shum Jr., Natasha Liu Bordizzo",
      "Plot": "A story of lost love, young love, a legendary sword and one last opportunity at redemption.",
      "Language": "English",
      "Country": "China, USA",
      "Awards": "1 win & 1 nomination.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTA2MzM5NTk4NTBeQTJeQWpwZ15BbWU4MDk0NjgyNDcx._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.1/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "18%"
        },
        {
          "Source": "Metacritic",
          "Value": "47/100"
        }
      ],
      "Metascore": "47",
      "imdbRating": "6.1",
      "imdbVotes": "15,309",
      "imdbID": "tt2652118",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "http://www.netflix.com/title/80039717",
      "Response": "True"
    },
    {
      "Title": "Rebirth",
      "Year": "2016",
      "Rated": "TV-MA",
      "Released": "15 Jul 2016",
      "Runtime": "100 min",
      "Genre": "Thriller",
      "Director": "Karl Mueller",
      "Writer": "Karl Mueller",
      "Actors": "Fran Kranz, Adam Goldberg, Nicky Whelan, Kat Foster",
      "Plot": "He's a family man headed for a weekend of self-discovery. But it's about to turn into a nightmare with no escape.",
      "Language": "English, French",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzZlYWU3ZTktMWUzMi00ZWFjLThhZTMtNGNjYTRiMDQxYmU2XkEyXkFqcGdeQXVyNTc5NDE0MDA@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.0/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.0",
      "imdbVotes": "2,924",
      "imdbID": "tt4902716",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "http://www.netflix.com/title/80064459",
      "Response": "True"
    },
    {
      "Title": "Tallulah",
      "Year": "2016",
      "Rated": "N/A",
      "Released": "29 Jul 2016",
      "Runtime": "111 min",
      "Genre": "Comedy, Drama, Romance",
      "Director": "Sian Heder",
      "Writer": "Sian Heder",
      "Actors": "Ellen Page, Allison Janney, Tammy Blanchard, Evan Jonigkeit",
      "Plot": "Desperate to be rid of her toddler, a dissatisfied Manhattan housewife hires a stranger to babysit and ends up getting much more than she bargained for.",
      "Language": "English",
      "Country": "USA",
      "Awards": "1 nomination.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTIyYWFkNjctNTMyNy00YWI0LWJkYzYtYjFlMzQwZTg0ZWExXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.7/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "84%"
        },
        {
          "Source": "Metacritic",
          "Value": "63/100"
        }
      ],
      "Metascore": "63",
      "imdbRating": "6.7",
      "imdbVotes": "14,205",
      "imdbID": "tt1639084",
      "Type": "movie",
      "DVD": "29 Jul 2016",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "https://www.netflix.com/title/80093198",
      "Response": "True"
    },
    {
      "Title": "I Am the Pretty Thing That Lives in the House",
      "Year": "2016",
      "Rated": "N/A",
      "Released": "28 Oct 2016",
      "Runtime": "89 min",
      "Genre": "Horror, Thriller",
      "Director": "Oz Perkins",
      "Writer": "Oz Perkins",
      "Actors": "Ruth Wilson, Paula Prentiss, Bob Balaban, Lucy Boynton",
      "Plot": "A young nurse takes care of an elderly author who lives in a haunted house.",
      "Language": "English",
      "Country": "Canada, USA",
      "Awards": "2 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZmM1MzFiOTAtNGQ5MS00ZTgzLTg4YmEtZDhlZmY3YjUzNGNlXkEyXkFqcGdeQXVyMjU3OTg4NzA@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "4.6/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "58%"
        },
        {
          "Source": "Metacritic",
          "Value": "68/100"
        }
      ],
      "Metascore": "68",
      "imdbRating": "4.6",
      "imdbVotes": "8,907",
      "imdbID": "tt5059406",
      "Type": "movie",
      "DVD": "28 Oct 2016",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Siege of Jadotville",
      "Year": "2016",
      "Rated": "N/A",
      "Released": "07 Oct 2016",
      "Runtime": "108 min",
      "Genre": "Action, Biography, Drama, Thriller, War",
      "Director": "Richie Smyth",
      "Writer": "Kevin Brodbin, Declan Power (based on the book by)",
      "Actors": "Richard Lukunku, Danny Sapani, Andrew Stock, Mark Strong",
      "Plot": "Irish Commandant Pat Quinlan leads a stand off with troops against French and Belgian Mercenaries in the Congo during the early 1960s.",
      "Language": "English, Irish, French",
      "Country": "Ireland, South Africa",
      "Awards": "3 wins & 3 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTAxZWViYTUtMDljNi00MmQ5LTk2MzEtYmIwZDNkOTFhZjk0XkEyXkFqcGdeQXVyNjkxOTcwNjc@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "60%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "7.3",
      "imdbVotes": "22,273",
      "imdbID": "tt3922798",
      "Type": "movie",
      "DVD": "07 Oct 2016",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "http://www.netflix.com/title/80041653",
      "Response": "True"
    },
    {
      "Title": "ARQ",
      "Year": "2016",
      "Rated": "N/A",
      "Released": "16 Sep 2016",
      "Runtime": "88 min",
      "Genre": "Sci-Fi, Thriller",
      "Director": "Tony Elliott",
      "Writer": "Tony Elliott",
      "Actors": "Robbie Amell, Rachael Taylor, Shaun Benson, Gray Powell",
      "Plot": "Trapped in a lab and stuck in a time loop, a disoriented couple fends off masked raiders while harboring a new energy source that could save humanity.",
      "Language": "English",
      "Country": "USA, Canada",
      "Awards": "1 win & 3 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxODQ2MzkyMV5BMl5BanBnXkFtZTgwNjU3MTE5OTE@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.4/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "43%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "6.4",
      "imdbVotes": "27,328",
      "imdbID": "tt5640450",
      "Type": "movie",
      "DVD": "16 Sep 2016",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Mercy",
      "Year": "2016",
      "Rated": "G",
      "Released": "22 Nov 2016",
      "Runtime": "90 min",
      "Genre": "Drama, Mystery, Thriller",
      "Director": "Chris Sparling",
      "Writer": "Chris Sparling",
      "Actors": "James Wolk, Tom Lipinski, Caitlin FitzGerald, Mike Donovan",
      "Plot": "When four estranged brothers return home to say their last goodbye to their dying mother, Grace, hidden motivations reveal themselves.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BY2I3MWZmMDEtMzYxNy00MTJiLTg4NmMtMGM2NDFjNzg5MDE2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjMyODE4NDU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "4.2/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "4.2",
      "imdbVotes": "2,111",
      "imdbID": "tt5710042",
      "Type": "movie",
      "DVD": "22 Nov 2016",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Spectral",
      "Year": "2016",
      "Rated": "PG-13",
      "Released": "09 Dec 2016",
      "Runtime": "107 min",
      "Genre": "Action, Mystery, Sci-Fi, Thriller",
      "Director": "Nic Mathieu",
      "Writer": "Ian Fried (story), Nic Mathieu (story), George Nolfi",
      "Actors": "James Badge Dale, Emily Mortimer, Bruce Greenwood, Max Martini",
      "Plot": "A sci-fi/thriller story centered on a special-ops team that is dispatched to fight supernatural beings.",
      "Language": "English, Russian, Romanian, Slovenian",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYWQxN2I1NjItMDVjMS00ZmJjLWIyYjItOWI2OGY5NTU1ZjI2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTc3MjM3OTA@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "75%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "6.3",
      "imdbVotes": "40,407",
      "imdbID": "tt2106651",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "Universal Pictures",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "7 Años",
      "Year": "2016",
      "Rated": "N/A",
      "Released": "28 Oct 2016",
      "Runtime": "77 min",
      "Genre": "Drama",
      "Director": "Roger Gual",
      "Writer": "Jose Cabeza (story), Roger Gual (additional writing), Cristian Conti (additional writing), Julia Fontana, Jose Cabeza",
      "Actors": "Juana Acosta, Alex Brendemühl, Paco León, Manuel Morón",
      "Plot": "Four friends face an agonizing decision. One must go to prison. The other three must make the sacrifice worthwhile.",
      "Language": "Spanish",
      "Country": "Spain",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzkwZTRmNzMtYTg3Ni00NzU4LTk4M2UtYzU0ZDQ2OWZiMTY3XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.8/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "6.8",
      "imdbVotes": "2,962",
      "imdbID": "tt5517438",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Coin Heist",
      "Year": "2017",
      "Rated": "TV-14",
      "Released": "06 Jan 2017",
      "Runtime": "97 min",
      "Genre": "Action, Crime, Drama",
      "Director": "Emily Hagins",
      "Writer": "Emily Hagins (screen writer), Elisa Ludwig (based on a novel by)",
      "Actors": "Alex Saxon, Alexis G. Zall, Sasha Pieterse, Jay Walker",
      "Plot": "United by dire circumstances, four unlikely allies from a Philadelphia prep school - the hacker, the slacker, the athlete, and the perfect student - band together to attempt the impossible: steal from the U.S. Mint.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDM4NzhhNTQtZmUyMy00OTFlLWFlMzgtYTQ5OTE3YjBmMTA5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "4.8/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "4.8",
      "imdbVotes": "1,830",
      "imdbID": "tt5740806",
      "Type": "movie",
      "DVD": "06 Jan 2017",
      "BoxOffice": "N/A",
      "Production": "Adaptive Studios",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Barry",
      "Year": "2016",
      "Rated": "N/A",
      "Released": "16 Dec 2016",
      "Runtime": "104 min",
      "Genre": "Biography, Drama",
      "Director": "Vikram Gandhi",
      "Writer": "Adam Mansbach",
      "Actors": "Devon Terrell, Anya Taylor-Joy, Jason Mitchell, Ellar Coltrane",
      "Plot": "A look into the early life of U.S. President Barack Obama.",
      "Language": "English, Swahili",
      "Country": "USA",
      "Awards": "3 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNGVhNThkZDgtMTg4Ny00NTQ5LThkODAtM2EzYTE5MjJlOWVmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.9/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "80%"
        },
        {
          "Source": "Metacritic",
          "Value": "72/100"
        }
      ],
      "Metascore": "72",
      "imdbRating": "5.9",
      "imdbVotes": "4,953",
      "imdbID": "tt5477566",
      "Type": "movie",
      "DVD": "16 Dec 2016",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "http://blackbearpictures.com/films-coming-soon/barry/",
      "Response": "True"
    },
    {
      "Title": "Clinical",
      "Year": "2017",
      "Rated": "N/A",
      "Released": "13 Jan 2017",
      "Runtime": "104 min",
      "Genre": "Horror, Thriller",
      "Director": "Alistair Legrand",
      "Writer": "Luke Harvis, Alistair Legrand",
      "Actors": "Vinessa Shaw, Kevin Rahm, India Eisley, Aaron Stanford",
      "Plot": "A psychiatrist tries to put her life back together after a violent attack by seeking to repair the life of a new patient, but he has his own terrifying history.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMzNTkwNzMyMF5BMl5BanBnXkFtZTgwNTg2MzIxMTI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.1/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.1",
      "imdbVotes": "4,660",
      "imdbID": "tt5577742",
      "Type": "movie",
      "DVD": "13 Jan 2017",
      "BoxOffice": "N/A",
      "Production": "Campfire Films",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "I Don't Feel at Home in This World Anymore.",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "24 Feb 2017",
      "Runtime": "93 min",
      "Genre": "Comedy, Crime, Drama, Thriller",
      "Director": "Macon Blair",
      "Writer": "Macon Blair",
      "Actors": "Melanie Lynskey, Chris Doubek, Marilyn Faith Hickey, Jared Roylance",
      "Plot": "When a depressed woman is burglarized, she finds a new sense of purpose by tracking down the thieves alongside her obnoxious neighbor. But they soon find themselves dangerously out of their depth against a pack of degenerate criminals.",
      "Language": "English",
      "Country": "USA",
      "Awards": "3 wins & 3 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYmM5Zjg5ZWEtYmQwOS00NmFmLTgxYzktYTJkZmY3OGM4NDQyXkEyXkFqcGdeQXVyNjk4NjM5Nzc@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.9/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "88%"
        },
        {
          "Source": "Metacritic",
          "Value": "75/100"
        }
      ],
      "Metascore": "75",
      "imdbRating": "6.9",
      "imdbVotes": "35,060",
      "imdbID": "tt5710514",
      "Type": "movie",
      "DVD": "24 Feb 2017",
      "BoxOffice": "N/A",
      "Production": "Film Science",
      "Website": "http://www.filmscience.com/",
      "Response": "True"
    },
    {
      "Title": "iBoy",
      "Year": "2017",
      "Rated": "N/A",
      "Released": "27 Jan 2017",
      "Runtime": "90 min",
      "Genre": "Action, Crime, Sci-Fi, Thriller",
      "Director": "Adam Randall",
      "Writer": "Joe Barton (screenplay), Joe Barton, Kevin Brooks (based on the novel by), Mark Denton, Jonny Stockwood",
      "Actors": "Bill Milner, Maisie Williams, Miranda Richardson, Rory Kinnear",
      "Plot": "After being shot, Tom wakes from a coma to discover that fragments of his smart phone have been embedded in his head, and worse, that returning to normal teenage life is impossible because he has developed a strange set of superpowers.",
      "Language": "English",
      "Country": "UK",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjQxODM2MDAyM15BMl5BanBnXkFtZTgwODc4MTE0MTI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.0/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "64%"
        },
        {
          "Source": "Metacritic",
          "Value": "50/100"
        }
      ],
      "Metascore": "50",
      "imdbRating": "6.0",
      "imdbVotes": "15,438",
      "imdbID": "tt3171832",
      "Type": "movie",
      "DVD": "27 Jan 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Imperial Dreams",
      "Year": "2014",
      "Rated": "N/A",
      "Released": "01 Oct 2016",
      "Runtime": "87 min",
      "Genre": "Drama",
      "Director": "Malik Vitthal",
      "Writer": "Ismet Prcic, Malik Vitthal",
      "Actors": "John Boyega, Rotimi, Glenn Plummer, De'aundre Bonds",
      "Plot": "A 21-year-old reformed gangster's devotion to his family and his future is put to the test when he is released from prison and returns to his old stomping grounds in Watts, Los Angeles.",
      "Language": "English",
      "Country": "USA",
      "Awards": "10 wins & 6 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODA0NWJmMzEtNjQxNS00MjhmLTlhN2UtZThkYjJlNWY5MDgxL2ltYWdlXkEyXkFqcGdeQXVyNjk3MjA4NDI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.8/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "91%"
        },
        {
          "Source": "Metacritic",
          "Value": "67/100"
        }
      ],
      "Metascore": "67",
      "imdbRating": "6.8",
      "imdbVotes": "3,193",
      "imdbID": "tt3331028",
      "Type": "movie",
      "DVD": "03 Feb 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Deidra & Laney Rob a Train",
      "Year": "2017",
      "Rated": "TV-14",
      "Released": "17 Mar 2017",
      "Runtime": "92 min",
      "Genre": "Comedy, Crime, Drama",
      "Director": "Sydney Freeland",
      "Writer": "Shelby Farrell",
      "Actors": "Ashleigh Murray, Rachel Crow, Lance Gray, Danielle Nicolet",
      "Plot": "After their mother ends up in jail, two sisters turn to train robbery in order to support their family.",
      "Language": "English",
      "Country": "USA",
      "Awards": "1 nomination.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxNzA0NTQxMl5BMl5BanBnXkFtZTgwMDk2NjQ3MTI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.1/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "91%"
        },
        {
          "Source": "Metacritic",
          "Value": "65/100"
        }
      ],
      "Metascore": "65",
      "imdbRating": "6.1",
      "imdbVotes": "1,272",
      "imdbID": "tt4144332",
      "Type": "movie",
      "DVD": "17 Mar 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Burning Sands",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "10 Mar 2017",
      "Runtime": "96 min",
      "Genre": "Drama",
      "Director": "Gerard McMurray",
      "Writer": "Christine T. Berg, Gerard McMurray",
      "Actors": "Trevor Jackson, Tosin Cole, DeRon Horton, Alfre Woodard",
      "Plot": "Deep into Hell Week, a favored pledgee is torn between honoring his code of silence or standing up against the intensifying violence of underground hazing.",
      "Language": "English",
      "Country": "USA",
      "Awards": "4 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjM4MTgwMDYwOF5BMl5BanBnXkFtZTgwNTIwMTc2MTI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.1/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "88%"
        },
        {
          "Source": "Metacritic",
          "Value": "63/100"
        }
      ],
      "Metascore": "63",
      "imdbRating": "6.1",
      "imdbVotes": "2,174",
      "imdbID": "tt5826432",
      "Type": "movie",
      "DVD": "10 Mar 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Most Hated Woman in America",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "24 Mar 2017",
      "Runtime": "91 min",
      "Genre": "Biography, Drama, History",
      "Director": "Tommy O'Haver",
      "Writer": "Tommy O'Haver, Irene Turner",
      "Actors": "Melissa Leo, Brandon Mychal Smith, Juno Temple, Michael Chernus",
      "Plot": "The life of Madelyn Murray O'Hair, the outspoken activist and founder of American Atheists.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZWM5NTNhMTMtYmFlMi00MTY1LTk5YTAtZThhNWNkOTM3NDJhXkEyXkFqcGdeQXVyMjQzNzk2ODk@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.1/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "40%"
        },
        {
          "Source": "Metacritic",
          "Value": "41/100"
        }
      ],
      "Metascore": "41",
      "imdbRating": "6.1",
      "imdbVotes": "3,213",
      "imdbID": "tt4842646",
      "Type": "movie",
      "DVD": "24 Mar 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Discovery",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "31 Mar 2017",
      "Runtime": "102 min",
      "Genre": "Drama, Mystery, Romance, Sci-Fi, Thriller",
      "Director": "Charlie McDowell",
      "Writer": "Charlie McDowell, Justin Lader",
      "Actors": "Robert Redford, Mary Steenburgen, Brian McCarthy, Jason Segel",
      "Plot": "Two years after the afterlife is scientifically proven, a man attempts to help a young woman break away from her dark past.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTUzNjE5ODYwN15BMl5BanBnXkFtZTgwMTY4MjQ1MTI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "46%"
        },
        {
          "Source": "Metacritic",
          "Value": "54/100"
        }
      ],
      "Metascore": "54",
      "imdbRating": "6.3",
      "imdbVotes": "23,059",
      "imdbID": "tt5155780",
      "Type": "movie",
      "DVD": "31 Mar 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Blame!",
      "Year": "2017",
      "Rated": "TV-14",
      "Released": "20 May 2017",
      "Runtime": "106 min",
      "Genre": "Animation, Action, Drama, Sci-Fi, Thriller",
      "Director": "Hiroyuki Seshita",
      "Writer": "Sadayuki Murai (screenplay), Tsutomu Nihei (created by)",
      "Actors": "Takahiro Sakurai, Kana Hanazawa, Sora Amamiya, Mamoru Miyano",
      "Plot": "In the distant future, humans are declared \"illegal residents\" and hunted to near extinction by murderous robots. One day, a group of human scavengers come across a strange man named Killy, who may be the key to humanity's survival.",
      "Language": "Japanese",
      "Country": "Japan",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTgxNDI1NzgyNl5BMl5BanBnXkFtZTgwMTgzNTIzMjI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.7/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "6.7",
      "imdbVotes": "5,037",
      "imdbID": "tt6574146",
      "Type": "movie",
      "DVD": "20 May 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "http://www.blame.jp/",
      "Response": "True"
    },
    {
      "Title": "Sand Castle",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "21 Apr 2017",
      "Runtime": "113 min",
      "Genre": "Drama, War",
      "Director": "Fernando Coimbra",
      "Writer": "Chris Roessner",
      "Actors": "Henry Cavill, Nicholas Hoult, Logan Marshall-Green, Tommy Flanagan",
      "Plot": "The story follows a young soldier, and his introduction into the 2003 invasion of Iraq. Based on true events, it bears witness to the destruction, and horrors of war.",
      "Language": "English, German",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTQ2YWM1MmItMGVmZi00N2EzLWE4NDUtNTgzODVkNTZlMTBmXkEyXkFqcGdeQXVyMzI3MDEzMzM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "47%"
        },
        {
          "Source": "Metacritic",
          "Value": "45/100"
        }
      ],
      "Metascore": "45",
      "imdbRating": "6.3",
      "imdbVotes": "13,852",
      "imdbID": "tt2582576",
      "Type": "movie",
      "DVD": "21 Apr 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Tramps",
      "Year": "2016",
      "Rated": "N/A",
      "Released": "21 Apr 2017",
      "Runtime": "82 min",
      "Genre": "Comedy, Romance",
      "Director": "Adam Leon",
      "Writer": "Adam Leon (screenplay by), Adam Leon (story by), Jamund Washington (story by)",
      "Actors": "Callum Turner, Grace Van Patten, Michal Vondel, Mike Birbiglia",
      "Plot": "A young man and woman find love in an unlikely place while carrying out a shady deal.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODMwNTVmZWEtMWI5NS00ZTliLThmZTQtZjVmOTI1ZWM5MzAwXkEyXkFqcGdeQXVyOTU3ODk4MQ@@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.5/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "95%"
        },
        {
          "Source": "Metacritic",
          "Value": "76/100"
        }
      ],
      "Metascore": "76",
      "imdbRating": "6.5",
      "imdbVotes": "3,125",
      "imdbID": "tt4991512",
      "Type": "movie",
      "DVD": "21 Apr 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Shimmer Lake",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "09 Jun 2017",
      "Runtime": "83 min",
      "Genre": "Crime, Drama, Mystery, Thriller",
      "Director": "Oren Uziel",
      "Writer": "Oren Uziel",
      "Actors": "Benjamin Walker, Rainn Wilson, Stephanie Sigman, John Michael Higgins",
      "Plot": "An inventive crime thriller told backwards -- reversing day by day through a week -- following a local sheriff's quest to unlock the mystery of three small town criminals and a bank heist gone wrong.",
      "Language": "English",
      "Country": "Canada, USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGQ5NzVjZGMtOGM5NC00NjI4LTg5NzQtMjYzOWExMmE1NWYwXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.2/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "60%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "6.2",
      "imdbVotes": "8,027",
      "imdbID": "tt1386691",
      "Type": "movie",
      "DVD": "09 Jun 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Okja",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "28 Jun 2017",
      "Runtime": "120 min",
      "Genre": "Action, Adventure, Drama, Sci-Fi",
      "Director": "Joon-ho Bong",
      "Writer": "Joon-ho Bong (screenplay by), Jon Ronson (screenplay by), Joon-ho Bong (story by)",
      "Actors": "Tilda Swinton, Sheena Kamal, Michael Mitton, Colm Hill",
      "Plot": "A young girl risks everything to prevent a powerful, multinational company from kidnapping her best friend - a fascinating beast named Okja.",
      "Language": "English, Korean, Spanish",
      "Country": "South Korea, USA",
      "Awards": "6 wins & 10 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQxMTcxNDgxN15BMl5BanBnXkFtZTgwOTczNTIzMjI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "87%"
        },
        {
          "Source": "Metacritic",
          "Value": "75/100"
        }
      ],
      "Metascore": "75",
      "imdbRating": "7.3",
      "imdbVotes": "67,131",
      "imdbID": "tt3967856",
      "Type": "movie",
      "DVD": "28 Jun 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "http://netflix.com/okja",
      "Response": "True"
    },
    {
      "Title": "To the Bone",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "14 Jul 2017",
      "Runtime": "107 min",
      "Genre": "Drama",
      "Director": "Marti Noxon",
      "Writer": "Marti Noxon",
      "Actors": "Rebekah Kennedy, Lily Collins, Dana L. Wilson, Ziah Colon",
      "Plot": "A young woman, dealing with anorexia, meets an unconventional doctor who challenges her to face her condition and embrace life.",
      "Language": "English",
      "Country": "USA",
      "Awards": "2 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTU1MTQ0NDAyNV5BMl5BanBnXkFtZTgwNjQ4MjE4MjI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.9/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "70%"
        },
        {
          "Source": "Metacritic",
          "Value": "64/100"
        }
      ],
      "Metascore": "64",
      "imdbRating": "6.9",
      "imdbVotes": "29,838",
      "imdbID": "tt5541240",
      "Type": "movie",
      "DVD": "14 Jul 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Death Note",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "25 Aug 2017",
      "Runtime": "101 min",
      "Genre": "Adventure, Crime, Drama, Fantasy, Horror, Mystery, Thriller",
      "Director": "Adam Wingard",
      "Writer": "Charley Parlapanides (screenplay by), Vlas Parlapanides (screenplay by), Jeremy Slater (screenplay by), Tsugumi Ôba (based on \"Death Note\" by: In Shonen Jump), Takeshi Obata (based on \"Death Note\" by: In Shonen Jump)",
      "Actors": "Nat Wolff, Lakeith Stanfield, Margaret Qualley, Shea Whigham",
      "Plot": "A high school student named Light Turner discovers a mysterious notebook that has the power to kill anyone whose name is written within its pages, and launches a secret crusade to rid the world of criminals.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTUwOTgzMTEyOF5BMl5BanBnXkFtZTgwNTk3MTM5MjI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "4.6/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "38%"
        },
        {
          "Source": "Metacritic",
          "Value": "43/100"
        }
      ],
      "Metascore": "43",
      "imdbRating": "4.6",
      "imdbVotes": "63,670",
      "imdbID": "tt1241317",
      "Type": "movie",
      "DVD": "25 Aug 2017",
      "BoxOffice": "N/A",
      "Production": "Vertigo Entertainment",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Gerald's Game",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "29 Sep 2017",
      "Runtime": "103 min",
      "Genre": "Drama, Horror, Thriller",
      "Director": "Mike Flanagan",
      "Writer": "Mike Flanagan (screenplay by), Jeff Howard (screenplay by), Stephen King (based on the novel by)",
      "Actors": "Carla Gugino, Bruce Greenwood, Chiara Aurelia, Carel Struycken",
      "Plot": "While trying to spice up their marriage in their remote lake house, Jessie must fight to survive when her husband dies unexpectedly, leaving her handcuffed to their bed frame.",
      "Language": "English",
      "Country": "USA",
      "Awards": "2 wins & 3 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzg0NGE0N2MtYTg1My00NTBkLWI5NjEtZTgyMDA0MTU4MmIyXkEyXkFqcGdeQXVyMTU2NTcyMg@@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.6/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "90%"
        },
        {
          "Source": "Metacritic",
          "Value": "77/100"
        }
      ],
      "Metascore": "77",
      "imdbRating": "6.6",
      "imdbVotes": "58,428",
      "imdbID": "tt3748172",
      "Type": "movie",
      "DVD": "29 Sep 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "First They Killed My Father",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "15 Sep 2017",
      "Runtime": "136 min",
      "Genre": "Biography, Drama, History, War",
      "Director": "Angelina Jolie",
      "Writer": "Loung Ung (screenplay by), Angelina Jolie (screenplay by), Loung Ung (based on the book \"First They Killed My Father\" by)",
      "Actors": "Sareum Srey Moch, Phoeung Kompheak, Sveng Socheata, Mun Kimhak",
      "Plot": "Cambodian author and human rights activist Loung Ung recounts the horrors she suffered as a child under the rule of the deadly Khmer Rouge.",
      "Language": "Khmer, English, French",
      "Country": "Cambodia, USA",
      "Awards": "Nominated for 1 Golden Globe. Another 9 wins & 24 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTgzOTQ1NDUwOF5BMl5BanBnXkFtZTgwNjAwNTkwMzI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.2/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "88%"
        },
        {
          "Source": "Metacritic",
          "Value": "72/100"
        }
      ],
      "Metascore": "72",
      "imdbRating": "7.2",
      "imdbVotes": "9,366",
      "imdbID": "tt4882376",
      "Type": "movie",
      "DVD": "15 Sep 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix Originals",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Meyerowitz Stories (New and Selected)",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "13 Oct 2017",
      "Runtime": "112 min",
      "Genre": "Comedy, Drama",
      "Director": "Noah Baumbach",
      "Writer": "Noah Baumbach",
      "Actors": "Adam Sandler, Grace Van Patten, Dustin Hoffman, Elizabeth Marvel",
      "Plot": "An estranged family gathers together in New York City for an event celebrating the artistic work of their father.",
      "Language": "English",
      "Country": "USA",
      "Awards": "4 wins & 6 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTY1MTA1MjU4NV5BMl5BanBnXkFtZTgwMTAwMzE2MzI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.9/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "93%"
        },
        {
          "Source": "Metacritic",
          "Value": "79/100"
        }
      ],
      "Metascore": "79",
      "imdbRating": "6.9",
      "imdbVotes": "28,092",
      "imdbID": "tt5536736",
      "Type": "movie",
      "DVD": "13 Oct 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "1922",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "20 Oct 2017",
      "Runtime": "102 min",
      "Genre": "Crime, Drama, Horror, Mystery, Thriller",
      "Director": "Zak Hilditch",
      "Writer": "Stephen King (novel), Zak Hilditch (screenplay)",
      "Actors": "Thomas Jane, Molly Parker, Dylan Schmid, Kaitlyn Bernard",
      "Plot": "A simple yet proud farmer in the year 1922 conspires to murder his wife for financial gain, convincing his teenage son to assist. But their actions have unintended consequences.",
      "Language": "English",
      "Country": "USA",
      "Awards": "1 nomination.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTg0MmUyNjItYzJmNi00YTcxLTg4OTQtNmI2ZjI0ZDIzNjQ2XkEyXkFqcGdeQXVyNTM0MDc1ODE@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "87%"
        },
        {
          "Source": "Metacritic",
          "Value": "70/100"
        }
      ],
      "Metascore": "70",
      "imdbRating": "6.3",
      "imdbVotes": "31,733",
      "imdbID": "tt6214928",
      "Type": "movie",
      "DVD": "20 Oct 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Wheelman",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "20 Oct 2017",
      "Runtime": "82 min",
      "Genre": "Action, Crime, Mystery, Thriller",
      "Director": "Jeremy Rush",
      "Writer": "Jeremy Rush",
      "Actors": "Frank Grillo, Caitlin Carmichael, Garret Dillahunt, Shea Whigham",
      "Plot": "A getaway driver for a bank robbery realizes he has been double crossed and races to find out who betrayed him.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjA3NjA0MzE1N15BMl5BanBnXkFtZTgwNjAzNzQ0MzI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.4/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "87%"
        },
        {
          "Source": "Metacritic",
          "Value": "66/100"
        }
      ],
      "Metascore": "66",
      "imdbRating": "6.4",
      "imdbVotes": "13,214",
      "imdbID": "tt5723286",
      "Type": "movie",
      "DVD": "20 Oct 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "https://www.netflix.com/title/80113669",
      "Response": "True"
    },
    {
      "Title": "Our Souls at Night",
      "Year": "2017",
      "Rated": "TV-14",
      "Released": "29 Sep 2017",
      "Runtime": "103 min",
      "Genre": "Drama, Romance",
      "Director": "Ritesh Batra",
      "Writer": "Scott Neustadter (screenplay by), Michael H. Weber (screenplay by), Kent Haruf (based on the novel by)",
      "Actors": "Judy Greer, Robert Redford, Matthias Schoenaerts, Jane Fonda",
      "Plot": "Fonda and Redford will star as Addie Moore and Louis Waters, a widow and widower who've lived next to each other for years. The pair have almost no relationship, but that all changes when Addie tries to make a connection with her neighbor.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzU4ODQ5MDc5OV5BMl5BanBnXkFtZTgwMjk4MDM1MzI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.9/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "90%"
        },
        {
          "Source": "Metacritic",
          "Value": "69/100"
        }
      ],
      "Metascore": "69",
      "imdbRating": "6.9",
      "imdbVotes": "7,802",
      "imdbID": "tt5034266",
      "Type": "movie",
      "DVD": "29 Sep 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "https://www.netflix.com/title/80104068",
      "Response": "True"
    },
    {
      "Title": "The Killer",
      "Year": "2017",
      "Rated": "N/A",
      "Released": "10 Nov 2017",
      "Runtime": "99 min",
      "Genre": "Western",
      "Director": "Marcelo Galvão",
      "Writer": "Marcelo Galvão",
      "Actors": "Diogo Morgado, Maria de Medeiros, Thaila Ayala, Etienne Chicot",
      "Plot": "A Brazilian western about Cabeleira, a feared killer living in the countryside of Pernambuco State in the 40's.",
      "Language": "Portuguese",
      "Country": "Brazil",
      "Awards": "2 wins & 9 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTVkZDNmM2QtM2YxOS00ZTA0LWFmMGMtM2I2ZWE5ZmU2MTUzXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.0/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "6.0",
      "imdbVotes": "1,552",
      "imdbID": "tt5379294",
      "Type": "movie",
      "DVD": "10 Nov 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Christmas Inheritance",
      "Year": "2017",
      "Rated": "N/A",
      "Released": "15 Dec 2017",
      "Runtime": "104 min",
      "Genre": "Romance",
      "Director": "Ernie Barbarash",
      "Writer": "Dinah Eng",
      "Actors": "Eliza Taylor, Jake Lacy, Andie MacDowell, Neil Crone",
      "Plot": "To be the CEO, an heiress is challenged by her dad to deliver a Christmas letter in person to his ex-partner in their hometown - traveling by bus, incognito and with only $100. Will she learn something from the people there?",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjM2ODVjNjItMTRhNi00ZGU0LTkyM2UtNTJlMmE3NzBkMjE3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.7/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "50%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.7",
      "imdbVotes": "6,267",
      "imdbID": "tt7608534",
      "Type": "movie",
      "DVD": "15 Dec 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Bright",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "22 Dec 2017",
      "Runtime": "117 min",
      "Genre": "Action, Crime, Fantasy, Thriller",
      "Director": "David Ayer",
      "Writer": "Max Landis",
      "Actors": "Will Smith, Joel Edgerton, Noomi Rapace, Edgar Ramírez",
      "Plot": "A detective must work with an Orc to find a powerful wand before evil creatures do.",
      "Language": "English, Spanish",
      "Country": "USA",
      "Awards": "1 win & 3 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNzk5NDg1Nl5BMl5BanBnXkFtZTgwNTM5MDQxNDM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.4/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "25%"
        },
        {
          "Source": "Metacritic",
          "Value": "29/100"
        }
      ],
      "Metascore": "29",
      "imdbRating": "6.4",
      "imdbVotes": "141,834",
      "imdbID": "tt5519340",
      "Type": "movie",
      "DVD": "22 Dec 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "http://www.netflix.com/bright",
      "Response": "True"
    },
    {
      "Title": "The Open House",
      "Year": "2018",
      "Rated": "TV-MA",
      "Released": "19 Jan 2018",
      "Runtime": "94 min",
      "Genre": "Horror, Thriller",
      "Director": "Matt Angel, Suzanne Coote",
      "Writer": "Matt Angel, Suzanne Coote",
      "Actors": "Dylan Minnette, Piercey Dalton, Patricia Bethune, Sharif Atkins",
      "Plot": "A teenager and his mother find themselves besieged by threatening forces when they move into a new house.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTU0MjQxNjk3Ml5BMl5BanBnXkFtZTgwOTM3NzY0NDM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "3.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "10%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "3.3",
      "imdbVotes": "21,990",
      "imdbID": "tt7608028",
      "Type": "movie",
      "DVD": "19 Jan 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Irreplaceable You",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "16 Feb 2018",
      "Runtime": "96 min",
      "Genre": "Comedy, Drama, Romance",
      "Director": "Stephanie Laing",
      "Writer": "Bess Wohl",
      "Actors": "Gugu Mbatha-Raw, Michiel Huisman, Steve Coogan, Timothy Simons",
      "Plot": "A couple who have known each other since 8 are destined to be together until death do them apart.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTUzMDI0MTc3OV5BMl5BanBnXkFtZTgwMjM0MzI3NDM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.4/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "32%"
        },
        {
          "Source": "Metacritic",
          "Value": "34/100"
        }
      ],
      "Metascore": "34",
      "imdbRating": "6.4",
      "imdbVotes": "4,990",
      "imdbID": "tt6119856",
      "Type": "movie",
      "DVD": "16 Feb 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Mute",
      "Year": "2018",
      "Rated": "TV-MA",
      "Released": "23 Feb 2018",
      "Runtime": "126 min",
      "Genre": "Mystery, Sci-Fi, Thriller",
      "Director": "Duncan Jones",
      "Writer": "Michael Robert Johnson (screenplay by), Duncan Jones (screenplay by), Duncan Jones (story by)",
      "Actors": "Levi Eisenblätter, Rosie Shaw, Eugen Bauder, Livia Matthes",
      "Plot": "A mute bartender goes up against his city's gangsters in an effort to find out what happened to his missing partner.",
      "Language": "English, German",
      "Country": "UK, Germany",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjAwNTE3MjQ2M15BMl5BanBnXkFtZTgwNjgzNjk2NDM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.4/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "20%"
        },
        {
          "Source": "Metacritic",
          "Value": "35/100"
        }
      ],
      "Metascore": "35",
      "imdbRating": "5.4",
      "imdbVotes": "23,251",
      "imdbID": "tt1464763",
      "Type": "movie",
      "DVD": "23 Feb 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Cloverfield Paradox",
      "Year": "2018",
      "Rated": "TV-MA",
      "Released": "04 Feb 2018",
      "Runtime": "102 min",
      "Genre": "Horror, Mystery, Sci-Fi, Thriller",
      "Director": "Julius Onah",
      "Writer": "Oren Uziel (screenplay by), Oren Uziel (story by), Doug Jung (story by)",
      "Actors": "Gugu Mbatha-Raw, David Oyelowo, Daniel Brühl, John Ortiz",
      "Plot": "Orbiting a planet on the brink of war, scientists test a device to solve an energy crisis, and end up face-to-face with a dark alternate reality.",
      "Language": "English, Mandarin",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTAwOTIxMDA0MjZeQTJeQWpwZ15BbWU4MDg1MjgzNzQz._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.6/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "19%"
        },
        {
          "Source": "Metacritic",
          "Value": "37/100"
        }
      ],
      "Metascore": "37",
      "imdbRating": "5.6",
      "imdbVotes": "76,867",
      "imdbID": "tt2548396",
      "Type": "movie",
      "DVD": "05 Feb 2019",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Outsider",
      "Year": "2018",
      "Rated": "TV-MA",
      "Released": "09 Mar 2018",
      "Runtime": "120 min",
      "Genre": "Crime, Drama, Thriller",
      "Director": "Martin Zandvliet",
      "Writer": "Andrew Baldwin",
      "Actors": "Jared Leto, Tadanobu Asano, Kippei Shîna, Shioli Kutsuna",
      "Plot": "An epic set in post-WWII Japan and centered on an American former G.I. who joins the yakuza.",
      "Language": "English, Japanese",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjIyYjAzOWItNzI5Yy00NGU4LTlhODktYjZmZThmMTY3ZWNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "17%"
        },
        {
          "Source": "Metacritic",
          "Value": "30/100"
        }
      ],
      "Metascore": "30",
      "imdbRating": "6.3",
      "imdbVotes": "14,754",
      "imdbID": "tt2011311",
      "Type": "movie",
      "DVD": "09 Mar 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Paradox",
      "Year": "2017",
      "Rated": "N/A",
      "Released": "08 May 2018",
      "Runtime": "101 min",
      "Genre": "Action",
      "Director": "Wilson Yip",
      "Writer": "Nick Cheuk (screenwriter), Lai-Yin Leung",
      "Actors": "Louis Koo, Yue Wu, Ka Tung Lam, Chris Collins",
      "Plot": "A tough Hong Kong cop's 16 y.o. daughter disappears in Pattaya. He goes to Thailand to find her and must deal with corrupt cops but an honest one helps him track down culprits involved in illegal organ trafficking.",
      "Language": "Cantonese",
      "Country": "Hong Kong",
      "Awards": "1 win & 3 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTEzYzczMTctNTJhMy00YTdiLWJkZTAtNGM0YzYyMjMyY2VmXkEyXkFqcGdeQXVyNjgwNTk4Mg@@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.6/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "6.6",
      "imdbVotes": "2,192",
      "imdbID": "tt7245176",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Roxanne Roxanne",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "23 Mar 2018",
      "Runtime": "100 min",
      "Genre": "Biography, Drama, Music",
      "Director": "Michael Larnell",
      "Writer": "Michael Larnell (screenwriter)",
      "Actors": "Germar Terrell Gardner, Adam Horovitz, Terrence Shingler, Nigel A. Fullerton",
      "Plot": "In the late 80s/ early 1990s, the most feared battle MC in Queens, New York, was a fierce teenage girl with the weight of the world on her shoulders. At the age of 14, Lolita \"Roxanne ...",
      "Language": "English",
      "Country": "USA",
      "Awards": "1 win & 1 nomination.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjg5YTZmOTMtZTcyNS00NWRkLTlmNjItMGJjYTdlZTBiODBhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.1/10"
        },
        {
          "Source": "Metacritic",
          "Value": "74/100"
        }
      ],
      "Metascore": "74",
      "imdbRating": "6.1",
      "imdbVotes": "1,944",
      "imdbID": "tt5796838",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "First Match",
      "Year": "2018",
      "Rated": "TV-MA",
      "Released": "30 Mar 2018",
      "Runtime": "102 min",
      "Genre": "Drama, Sport",
      "Director": "Olivia Newman",
      "Writer": "Olivia Newman",
      "Actors": "Elvire Emanuelle, Yahya Abdul-Mateen II, Colman Domingo, Jharrel Jerome",
      "Plot": "Hardened by years in foster care, a teenage girl from Brooklyn's Brownsville neighborhood decides that joining the boys wrestling team is the only way back to her estranged father.",
      "Language": "English",
      "Country": "USA",
      "Awards": "2 wins & 1 nomination.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjI2MDMxOTQzMF5BMl5BanBnXkFtZTgwNzIxNzk5NDM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "84%"
        },
        {
          "Source": "Metacritic",
          "Value": "68/100"
        }
      ],
      "Metascore": "68",
      "imdbRating": "6.3",
      "imdbVotes": "1,353",
      "imdbID": "tt6061074",
      "Type": "movie",
      "DVD": "30 Mar 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Amateur",
      "Year": "2018",
      "Rated": "TV-MA",
      "Released": "06 Apr 2018",
      "Runtime": "96 min",
      "Genre": "Drama, Sport",
      "Director": "Ryan Koo",
      "Writer": "Ryan Koo",
      "Actors": "Michael Rainey Jr., Tekola Cornetet, Hanna Longo, Walter Anaruk",
      "Plot": "A young basketball future star struggles with his personal life in pursuit of his dream.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjc4ZmU4NGMtOTY2OS00NDBhLTg4YTAtNzk0OWM5MjMzNGI3XkEyXkFqcGdeQXVyMzI3NzQ0Nw@@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.9/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.9",
      "imdbVotes": "2,383",
      "imdbID": "tt5580392",
      "Type": "movie",
      "DVD": "06 Apr 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "6 Balloons",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "06 Apr 2018",
      "Runtime": "74 min",
      "Genre": "Drama",
      "Director": "Marja-Lewis Ryan",
      "Writer": "Marja-Lewis Ryan",
      "Actors": "Abbi Jacobson, Dave Franco, Charlotte Carel, Madeline Carel",
      "Plot": "A woman (Jacobson) learns her brother (Franco) has relapsed on heroin.",
      "Language": "English",
      "Country": "USA",
      "Awards": "1 nomination.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTY1MjgyODM5NF5BMl5BanBnXkFtZTgwNTk2NzIwNTM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.8/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "86%"
        },
        {
          "Source": "Metacritic",
          "Value": "66/100"
        }
      ],
      "Metascore": "66",
      "imdbRating": "5.8",
      "imdbVotes": "2,604",
      "imdbID": "tt6142496",
      "Type": "movie",
      "DVD": "06 Apr 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "https://www.netflix.com/title/80130625",
      "Response": "True"
    },
    {
      "Title": "Come Sunday",
      "Year": "2018",
      "Rated": "TV-14",
      "Released": "13 Apr 2018",
      "Runtime": "106 min",
      "Genre": "Drama",
      "Director": "Joshua Marston",
      "Writer": "Marcus Hinchey, Russell Cobb (based on a radio story from WBEZ's This American Life,  reported by), Alex Blumberg (based on a radio story from WBEZ's This American Life,  produced by)",
      "Actors": "Chiwetel Ejiofor, Gerard Catus, Allie McCulloch, Lakeith Stanfield",
      "Plot": "Evangelist Carlton Pearson is ostracized by his church for preaching that there is no Hell.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzAzNTUyNzYzNV5BMl5BanBnXkFtZTgwNjcwNzkwNTM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.9/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "65%"
        },
        {
          "Source": "Metacritic",
          "Value": "65/100"
        }
      ],
      "Metascore": "65",
      "imdbRating": "5.9",
      "imdbVotes": "1,308",
      "imdbID": "tt1690967",
      "Type": "movie",
      "DVD": "13 Apr 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Sometimes",
      "Year": "2016",
      "Rated": "TV-14",
      "Released": "30 Apr 2018",
      "Runtime": "110 min",
      "Genre": "Comedy, Drama",
      "Director": "Priyadarshan",
      "Writer": "N/A",
      "Actors": "M.S. Bhaskar, Kannayiram, Asritha Kingini, Nassar",
      "Plot": "Seven people from different walks of life give their blood sample for ELISA Test - AIDS Screening. To avoid the tension of waiting, they decide to bribe the technician and know the results ...",
      "Language": "Tamil",
      "Country": "India",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZWEyYzViNGMtOWQyOC00OTk4LWE0NGEtNTMyNDk2ZTZkNDIyXkEyXkFqcGdeQXVyMTU2OTI0Mzg@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.2/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "7.2",
      "imdbVotes": "403",
      "imdbID": "tt5877882",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Cargo",
      "Year": "2017",
      "Rated": "N/A",
      "Released": "18 May 2018",
      "Runtime": "105 min",
      "Genre": "Drama, Horror, Sci-Fi, Thriller",
      "Director": "Ben Howling, Yolanda Ramke",
      "Writer": "Yolanda Ramke",
      "Actors": "Martin Freeman, Anthony Hayes, Susie Porter, Caren Pistorius",
      "Plot": "After an epidemic spreads all over Australia, a father searches for someone willing to protect his daughter.",
      "Language": "English, Aboriginal",
      "Country": "Australia",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTczZWEyOTktODNmMC00NDgzLTk3NTktYjllN2Y4MWMxOGViXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.3/10"
        },
        {
          "Source": "Metacritic",
          "Value": "65/100"
        }
      ],
      "Metascore": "65",
      "imdbRating": "6.3",
      "imdbVotes": "22,626",
      "imdbID": "tt3860916",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Lust Stories",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "15 Jun 2018",
      "Runtime": "120 min",
      "Genre": "Drama, Romance",
      "Director": "Zoya Akhtar, Dibakar Banerjee, Karan Johar, Anurag Kashyap",
      "Writer": "N/A",
      "Actors": "Radhika Apte, Bhumi Pednekar, Manisha Koirala, Sanjay Kapoor",
      "Plot": "Lust Stories is the sequel to 2013 movie Bombay Talkies presenting four short films by four of India's biggest directors exploring love, sex and relationships in modern India.",
      "Language": "Hindi",
      "Country": "India",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwNTQ4NDAyN15BMl5BanBnXkFtZTgwNjMwMzQ3NTM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.6/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "100%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "6.6",
      "imdbVotes": "7,138",
      "imdbID": "tt8439854",
      "Type": "movie",
      "DVD": "15 Jun 2018",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Calibre",
      "Year": "2018",
      "Rated": "TV-MA",
      "Released": "29 Jun 2018",
      "Runtime": "101 min",
      "Genre": "Thriller",
      "Director": "Matt Palmer",
      "Writer": "Matt Palmer",
      "Actors": "Jack Lowden, Martin McCann, Tony Curran, Ian Pirie",
      "Plot": "A shocking deed turned their weekend trip into a nightmare. Now their only hope is to swallow their paranoia and act normal.",
      "Language": "English",
      "Country": "UK",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMWJmNmRjYzgtNDk0ZC00ZDk5LTkyNGItMDY5OWU4MjU4ZTExXkEyXkFqcGdeQXVyMTA5MzEzOTg@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.7/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "93%"
        },
        {
          "Source": "Metacritic",
          "Value": "76/100"
        }
      ],
      "Metascore": "76",
      "imdbRating": "6.7",
      "imdbVotes": "11,995",
      "imdbID": "tt6218358",
      "Type": "movie",
      "DVD": "29 Jun 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Forgive Us Our Debts",
      "Year": "2018",
      "Rated": "TV-MA",
      "Released": "04 May 2018",
      "Runtime": "104 min",
      "Genre": "Drama",
      "Director": "Antonio Morabito",
      "Writer": "Antonio Morabito, Amedeo Pagani",
      "Actors": "Claudio Santamaria, Marco Giallini, Jerzy Stuhr, Flonja Kodheli",
      "Plot": "A man struggling under the crushing weight of debt must work as a tax collector to pay off his creditors.",
      "Language": "Italian",
      "Country": "Italy, Switzerland, Albania, Poland",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjY1YTZkMGMtNGNlNC00YzllLTkxNjMtNzE4Y2U1MWIyYzkzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.2/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "6.2",
      "imdbVotes": "736",
      "imdbID": "tt6679412",
      "Type": "movie",
      "DVD": "04 May 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Tau",
      "Year": "2018",
      "Rated": "R",
      "Released": "29 Jun 2018",
      "Runtime": "97 min",
      "Genre": "Sci-Fi, Thriller",
      "Director": "Federico D'Alessandro",
      "Writer": "Noga Landau",
      "Actors": "Maika Monroe, Ed Skrein, Gary Oldman, Fiston Barek",
      "Plot": "A woman is held captive by a scientist in a futuristic smart house, and hopes to escape by reasoning with the Artificial Intelligence that controls the house.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNmYzYWNhYWQtNjg0MS00NWU5LTgyZGUtYzViNjgwY2NjY2YwXkEyXkFqcGdeQXVyNjYzMzU4OTg@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.7/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "20%"
        },
        {
          "Source": "Metacritic",
          "Value": "43/100"
        }
      ],
      "Metascore": "43",
      "imdbRating": "5.7",
      "imdbVotes": "16,782",
      "imdbID": "tt4357394",
      "Type": "movie",
      "DVD": "29 Jun 2018",
      "BoxOffice": "N/A",
      "Production": "Addictive Pictures",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Most Assassinated Woman in the World",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "07 Sep 2018",
      "Runtime": "102 min",
      "Genre": "Biography, Drama, Mystery",
      "Director": "Franck Ribière",
      "Writer": "James Charkow (original idea), Vérane Frédiani, David Murdoch (original idea), David Murdoch, Franck Ribière",
      "Actors": "Anna Mouglalis, Niels Schneider, Eric Godon, André Wilms",
      "Plot": "Paula Maxa is the Parisian Grand Guignol Theatre's leading lady, famous for being murdered on stage every day. But is there a link between the theatre and a series of gruesome real-life murders?",
      "Language": "French",
      "Country": "Belgium, UK, USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzBhOGY1N2QtMTVhYi00YzgzLTlmODctM2JmNmIxOWY2ZDM4XkEyXkFqcGdeQXVyMTYxNjkxOQ@@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.3/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.3",
      "imdbVotes": "415",
      "imdbID": "tt6186696",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Next Gen",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "07 Sep 2018",
      "Runtime": "106 min",
      "Genre": "Animation, Action, Adventure, Comedy, Family, Sci-Fi",
      "Director": "Kevin R. Adams, Joe Ksander, Ricardo Curtis",
      "Writer": "Kevin R. Adams, Joe Ksander, Wang Nima (story by), Ryan W. Smith (additional screenplay material by)",
      "Actors": "John Krasinski, Charlyne Yi, Jason Sudeikis, Michael Peña",
      "Plot": "A friendship with a top-secret robot turns a lonely girl's life into a thrilling adventure as they take on bullies, evil bots and a scheming madman.",
      "Language": "English, Mandarin",
      "Country": "China, Canada, USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTU0MjAwMDkxNV5BMl5BanBnXkFtZTgwMTA4ODIxNjM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.6/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "6.6",
      "imdbVotes": "9,222",
      "imdbID": "tt7133686",
      "Type": "movie",
      "DVD": "07 Sep 2018",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "On My Skin: The Last Seven Days of Stefano Cucchi",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "12 Sep 2018",
      "Runtime": "100 min",
      "Genre": "Biography, Drama",
      "Director": "Alessio Cremonini",
      "Writer": "Alessio Cremonini, Lisa Nur Sultan",
      "Actors": "Alessandro Borghi, Massimiliano Tortora, Milvia Marigliano, Jasmine Trinca",
      "Plot": "The incredible true story behind the most controversial Italian court cases in recent years. Stefano Cucchi was arrested for a minor crime and mysteriously found dead during his detention. In one week's time, a family is changed forever.",
      "Language": "Italian",
      "Country": "Italy",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYWQ5Mzg4NGUtZGVlMi00YWM1LTg2NWItZWNkNGVmZmJlZWQyXkEyXkFqcGdeQXVyMzIwNDY4NDI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.4/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "7.4",
      "imdbVotes": "3,554",
      "imdbID": "tt7121252",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "How It Ends",
      "Year": "2018",
      "Rated": "TV-MA",
      "Released": "13 Jul 2018",
      "Runtime": "113 min",
      "Genre": "Action, Adventure, Drama, Mystery, Sci-Fi, Thriller",
      "Director": "David M. Rosenthal",
      "Writer": "Brooks McLaren",
      "Actors": "Theo James, Kat Graham, Nancy Sorel, Nicole Ari Parker",
      "Plot": "A desperate man tries to return home to his pregnant fiancée after a mysterious apocalyptic event turns everything to chaos.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMwOTg0MzU4MV5BMl5BanBnXkFtZTgwODk2NjY3NTM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.0/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "21%"
        },
        {
          "Source": "Metacritic",
          "Value": "36/100"
        }
      ],
      "Metascore": "36",
      "imdbRating": "5.0",
      "imdbVotes": "30,723",
      "imdbID": "tt5246700",
      "Type": "movie",
      "DVD": "13 Jul 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Land of Steady Habits",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "14 Sep 2018",
      "Runtime": "98 min",
      "Genre": "Comedy, Drama",
      "Director": "Nicole Holofcener",
      "Writer": "Nicole Holofcener, Ted Thompson (based on the novel by)",
      "Actors": "Connie Britton, Ben Mendelsohn, Edie Falco, Charlie Tahan",
      "Plot": "After leaving his wife and his job to find happiness, Anders befriends a drug-addicted teen, sending him down a path of reckless and shameful behavior.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTg0NjY4MjIxM15BMl5BanBnXkFtZTgwMTk2MjIyNjM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.2/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "86%"
        },
        {
          "Source": "Metacritic",
          "Value": "71/100"
        }
      ],
      "Metascore": "71",
      "imdbRating": "6.2",
      "imdbVotes": "3,684",
      "imdbID": "tt6485928",
      "Type": "movie",
      "DVD": "14 Sep 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Angel",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "14 Sep 2018",
      "Runtime": "114 min",
      "Genre": "Drama, Thriller",
      "Director": "Ariel Vromen",
      "Writer": "David Arata, Uri Bar-Joseph (based on the novel by)",
      "Actors": "Toby Kebbell, Marwan Kenzari, Hannah Ware, Sasson Gabai",
      "Plot": "True story of Ashraf Marwan, who was President Nasser's son-in-law and special adviser and confidant to his successor Anwar Sadat - while simultaneously Israeli Intelligence's most precious...",
      "Language": "Italian, English, Arabic, Hebrew",
      "Country": "Israel, USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTEzOTY5ODA2MDReQTJeQWpwZ15BbWU4MDI5NDkyMTYz._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.7/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "80%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "6.7",
      "imdbVotes": "6,734",
      "imdbID": "tt5968274",
      "Type": "movie",
      "DVD": "14 Sep 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Extinction",
      "Year": "2018",
      "Rated": "TV-MA",
      "Released": "27 Jul 2018",
      "Runtime": "95 min",
      "Genre": "Action, Drama, Sci-Fi, Thriller",
      "Director": "Ben Young",
      "Writer": "Spenser Cohen (screenplay by), Brad Kane (screenplay by), Spenser Cohen (story by)",
      "Actors": "Michael Peña, Lizzy Caplan, Amelia Crouch, Erica Tremblay",
      "Plot": "A father has a recurring dream of losing his family. His nightmare turns into reality when the planet is invaded by a force bent on destruction. Fighting for their lives, he comes to realize an unknown strength to keep them safe from harm.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTU5OTYzMzcwOF5BMl5BanBnXkFtZTgwNTkzMzk4NTM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.8/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "40%"
        },
        {
          "Source": "Metacritic",
          "Value": "40/100"
        }
      ],
      "Metascore": "40",
      "imdbRating": "5.8",
      "imdbVotes": "33,503",
      "imdbID": "tt3201640",
      "Type": "movie",
      "DVD": "27 Jul 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Private Life",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "05 Oct 2018",
      "Runtime": "123 min",
      "Genre": "Drama",
      "Director": "Tamara Jenkins",
      "Writer": "Tamara Jenkins",
      "Actors": "Kathryn Hahn, Paul Giamatti, Gabrielle Reid, Amy Russ",
      "Plot": "An author (Hahn) is undergoing multiple fertility therapies to get pregnant, putting her relationship with her husband (Giamatti) on edge.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjYzMjZiNDItMDk2ZC00MWVkLWFmNjUtZGU1MjM2YmY0Y2MxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "94%"
        },
        {
          "Source": "Metacritic",
          "Value": "83/100"
        }
      ],
      "Metascore": "83",
      "imdbRating": "7.3",
      "imdbVotes": "6,471",
      "imdbID": "tt5536610",
      "Type": "movie",
      "DVD": "05 Oct 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "22 July",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "10 Oct 2018",
      "Runtime": "143 min",
      "Genre": "Crime, Drama, History, Thriller",
      "Director": "Paul Greengrass",
      "Writer": "Paul Greengrass, Åsne Seierstad (based upon the book \"One of Us\" by)",
      "Actors": "Anders Danielsen Lie, Jonas Strand Gravli, Jon Øigarden, Maria Bock",
      "Plot": "A three-part story of Norway's worst terrorist attack in which over seventy people were killed. 22 July looks at the disaster itself, the survivors, Norway's political system and the lawyers who worked on this horrific case.",
      "Language": "English",
      "Country": "Norway, Iceland, USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNGY2MmQ0YTYtNjRjOS00ZjBhLThlMDMtN2FiY2ZjODhmNzU2XkEyXkFqcGdeQXVyOTA5NzQ0MDQ@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.8/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "80%"
        },
        {
          "Source": "Metacritic",
          "Value": "69/100"
        }
      ],
      "Metascore": "69",
      "imdbRating": "6.8",
      "imdbVotes": "14,927",
      "imdbID": "tt7280898",
      "Type": "movie",
      "DVD": "10 Oct 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Hold the Dark",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "28 Sep 2018",
      "Runtime": "125 min",
      "Genre": "Adventure, Drama, Horror, Mystery, Thriller",
      "Director": "Jeremy Saulnier",
      "Writer": "Macon Blair (screenplay by), William Giraldi (based on the book by)",
      "Actors": "Beckam Crawford, Riley Keough, Jeffrey Wright, Michael Tayles",
      "Plot": "After the deaths of three children suspected to be killed by wolves, writer Russell Core is hired by the parents of a missing six-year-old boy to track down and locate their son in the Alaskan wilderness.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMwOTQ1MzM3M15BMl5BanBnXkFtZTgwODQyNDQxNjM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.7/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "69%"
        },
        {
          "Source": "Metacritic",
          "Value": "63/100"
        }
      ],
      "Metascore": "63",
      "imdbRating": "5.7",
      "imdbVotes": "22,239",
      "imdbID": "tt5057140",
      "Type": "movie",
      "DVD": "28 Sep 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Night Comes for Us",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "19 Oct 2018",
      "Runtime": "121 min",
      "Genre": "Action, Thriller",
      "Director": "Timo Tjahjanto",
      "Writer": "Timo Tjahjanto",
      "Actors": "Julie Estelle, Iko Uwais, Joe Taslim, Zack Lee",
      "Plot": "Ito (Joe Taslim), a gangland enforcer, caught amidst a treacherous and violent insurrection within his Triad crime family upon his return home from a stint abroad.",
      "Language": "Indonesian, English, Mandarin, French",
      "Country": "Indonesia, USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTJhMWE4MDUtYTIzYi00M2ZmLThhNjgtZTM2YTY0NDU1NWJhXkEyXkFqcGdeQXVyOTA5NzQ0MDQ@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.1/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "88%"
        },
        {
          "Source": "Metacritic",
          "Value": "69/100"
        }
      ],
      "Metascore": "69",
      "imdbRating": "7.1",
      "imdbVotes": "10,966",
      "imdbID": "tt6116856",
      "Type": "movie",
      "DVD": "19 Oct 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Apostle",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "12 Oct 2018",
      "Runtime": "130 min",
      "Genre": "Drama, Fantasy, Horror, Mystery, Thriller",
      "Director": "Gareth Evans",
      "Writer": "Gareth Evans",
      "Actors": "Dan Stevens, Richard Elfyn, Paul Higgins, Bill Milner",
      "Plot": "In 1905, a drifter on a dangerous mission to rescue his kidnapped sister tangles with a sinister religious cult on an isolated island.",
      "Language": "English",
      "Country": "UK, USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTY1NDk0NjI4MV5BMl5BanBnXkFtZTgwNjUyNzMwNjM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "79%"
        },
        {
          "Source": "Metacritic",
          "Value": "62/100"
        }
      ],
      "Metascore": "62",
      "imdbRating": "6.3",
      "imdbVotes": "21,017",
      "imdbID": "tt6217306",
      "Type": "movie",
      "DVD": "12 Oct 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Been So Long",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "26 Oct 2018",
      "Runtime": "100 min",
      "Genre": "Drama, Musical, Romance",
      "Director": "Tinge Krishnan",
      "Writer": "Che Walker (screenplay)",
      "Actors": "Michaela Coel, Mya Lewis, Arinzé Kene, George MacKay",
      "Plot": "A dedicated single mother who, on an unusual night on the town, is charmed by a handsome yet troubled stranger.",
      "Language": "N/A",
      "Country": "N/A",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTk4NTI5MDQ0M15BMl5BanBnXkFtZTgwNDQyNDU0NjM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "100%"
        },
        {
          "Source": "Metacritic",
          "Value": "74/100"
        }
      ],
      "Metascore": "74",
      "imdbRating": "5.3",
      "imdbVotes": "454",
      "imdbID": "tt1682886",
      "Type": "movie",
      "DVD": "26 Oct 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Outlaw King",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "09 Nov 2018",
      "Runtime": "121 min",
      "Genre": "Action, Biography, Drama, History, War",
      "Director": "David Mackenzie",
      "Writer": "Bathsheba Doran (screenplay by), David Mackenzie (screenplay by), James MacInnes (screenplay by), David Harrower (additional writing by), Mark Bomback (additional writing by)",
      "Actors": "Chris Pine, Stephen Dillane, Rebecca Robin, Billy Howle",
      "Plot": "A true David vs. Goliath story of how the 14th century Scottish 'Outlaw King' Robert the Bruce used cunning and bravery to defeat the much larger and better equipped occupying English army.",
      "Language": "English, French",
      "Country": "UK, USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTc4MTU4YzEtODBiNC00NzA4LTg0NGItM2ZhZjZlNDFiNjJjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.0/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "63%"
        },
        {
          "Source": "Metacritic",
          "Value": "59/100"
        }
      ],
      "Metascore": "59",
      "imdbRating": "7.0",
      "imdbVotes": "35,830",
      "imdbID": "tt6679794",
      "Type": "movie",
      "DVD": "09 Nov 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Ballad of Buster Scruggs",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "09 Nov 2018",
      "Runtime": "133 min",
      "Genre": "Comedy, Drama, Musical, Mystery, Romance, Western",
      "Director": "Ethan Coen, Joel Coen",
      "Writer": "Joel Coen, Ethan Coen, Jack London (based on a story by), Stewart Edward White (inspired by a story by)",
      "Actors": "Tim Blake Nelson, Willie Watson, Clancy Brown, Danny McCarthy",
      "Plot": "Six tales of life and violence in the Old West, following a singing gunslinger, a bank robber, a traveling impresario, an elderly prospector, a wagon train, and a perverse pair of bounty hunters.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjRkYTI3M2EtZWQ4Ny00OTA2LWFmMTMtY2E4MTEyZmNjOTMxXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.4/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "92%"
        },
        {
          "Source": "Metacritic",
          "Value": "79/100"
        }
      ],
      "Metascore": "79",
      "imdbRating": "7.4",
      "imdbVotes": "52,920",
      "imdbID": "tt6412452",
      "Type": "movie",
      "DVD": "16 Nov 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Cam",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "16 Nov 2018",
      "Runtime": "94 min",
      "Genre": "Horror, Mystery, Thriller",
      "Director": "Daniel Goldhaber",
      "Writer": "Isa Mazzei, Daniel Goldhaber (story by), Isa Mazzei (story by), Isabelle Link-Levy (story by)",
      "Actors": "Madeline Brewer, Patch Darragh, Melora Walters, Devin Druid",
      "Plot": "Alice, an ambitious camgirl, wakes up one day to discover she's been replaced on her show with an exact replica of herself.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYWYwZDg4Y2YtN2RiYS00YTJlLTkyNTctNjJlZjVjMmQzMmNiXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.0/10"
        },
        {
          "Source": "Metacritic",
          "Value": "71/100"
        }
      ],
      "Metascore": "71",
      "imdbRating": "6.0",
      "imdbVotes": "11,801",
      "imdbID": "tt8361028",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Mowgli: Legend of the Jungle",
      "Year": "2018",
      "Rated": "PG-13",
      "Released": "07 Dec 2018",
      "Runtime": "104 min",
      "Genre": "Adventure, Drama, Fantasy",
      "Director": "Andy Serkis",
      "Writer": "Callie Kloves (screenplay by), Rudyard Kipling (based on the stories of)",
      "Actors": "Christian Bale, Cate Blanchett, Benedict Cumberbatch, Naomie Harris",
      "Plot": "A human child raised by wolves must face off against a menacing tiger named Shere Khan, as well as his own origins.",
      "Language": "English, Hindi",
      "Country": "UK, USA",
      "Awards": "1 win.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.6/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "53%"
        },
        {
          "Source": "Metacritic",
          "Value": "51/100"
        }
      ],
      "Metascore": "51",
      "imdbRating": "6.6",
      "imdbVotes": "34,852",
      "imdbID": "tt2388771",
      "Type": "movie",
      "DVD": "07 Dec 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Other Side of the Wind",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "02 Nov 2018",
      "Runtime": "122 min",
      "Genre": "Comedy, Drama",
      "Director": "Orson Welles",
      "Writer": "Oja Kodar, Orson Welles",
      "Actors": "John Huston, Oja Kodar, Peter Bogdanovich, Susan Strasberg",
      "Plot": "A Hollywood director emerges from semi-exile with plans to complete work on an innovative motion picture.",
      "Language": "English",
      "Country": "France, Iran, USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDg5NTQ0NDU1Nl5BMl5BanBnXkFtZTgwMTExNzIyNjM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.0/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "82%"
        },
        {
          "Source": "Metacritic",
          "Value": "79/100"
        }
      ],
      "Metascore": "79",
      "imdbRating": "7.0",
      "imdbVotes": "3,364",
      "imdbID": "tt0069049",
      "Type": "movie",
      "DVD": "02 Nov 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "IO",
      "Year": "2019",
      "Rated": "N/A",
      "Released": "18 Jan 2019",
      "Runtime": "N/A",
      "Genre": "Adventure, Drama, Romance, Sci-Fi",
      "Director": "Jonathan Helpert",
      "Writer": "Clay Jeter, Charles Spano, Will Basanta",
      "Actors": "Anthony Mackie, Margaret Qualley, Danny Huston",
      "Plot": "Sam (Margaret Qualley), one of the last survivors on a post-cataclysmic Earth, is a young scientist dedicated to finding a way for humans to adapt and survive, rather than abandon their ...",
      "Language": "N/A",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNmU4NTc0ZTgtNjliOC00NTM2LWE3NDktNGJiNzc2YzY3ZjA2XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg",
      "Ratings": [],
      "Metascore": "N/A",
      "imdbRating": "N/A",
      "imdbVotes": "N/A",
      "imdbID": "tt3256226",
      "Type": "movie",
      "DVD": "18 Jan 2019",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Bird Box",
      "Year": "2018",
      "Rated": "R",
      "Released": "21 Dec 2018",
      "Runtime": "124 min",
      "Genre": "Drama, Horror, Sci-Fi, Thriller",
      "Director": "Susanne Bier",
      "Writer": "Eric Heisserer (screenplay), Josh Malerman (novel)",
      "Actors": "Sandra Bullock, Trevante Rhodes, John Malkovich, Sarah Paulson",
      "Plot": "Five years after an ominous unseen presence drives most of society to suicide, a mother and her two children make a desperate bid to reach safety.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjAzMTI1MjMyN15BMl5BanBnXkFtZTgwNzU5MTE2NjM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.7/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "65%"
        },
        {
          "Source": "Metacritic",
          "Value": "51/100"
        }
      ],
      "Metascore": "51",
      "imdbRating": "6.7",
      "imdbVotes": "152,930",
      "imdbID": "tt2737304",
      "Type": "movie",
      "DVD": "21 Dec 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Ridiculous 6",
      "Year": "2015",
      "Rated": "TV-14",
      "Released": "11 Dec 2015",
      "Runtime": "119 min",
      "Genre": "Comedy, Western",
      "Director": "Frank Coraci",
      "Writer": "Tim Herlihy, Adam Sandler",
      "Actors": "Adam Sandler, Terry Crews, Jorge Garcia, Taylor Lautner",
      "Plot": "An outlaw who was raised by Native Americans discovers that he has five half-brothers; together the men go on a mission to find their wayward, deadbeat dad.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4NzMxMjUwOF5BMl5BanBnXkFtZTgwMDk1ODMxNzE@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "4.8/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "0%"
        },
        {
          "Source": "Metacritic",
          "Value": "18/100"
        }
      ],
      "Metascore": "18",
      "imdbRating": "4.8",
      "imdbVotes": "37,052",
      "imdbID": "tt2479478",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "http://www.netflix.com/title/80039517",
      "Response": "True"
    },
    {
      "Title": "Roma",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "21 Nov 2018",
      "Runtime": "135 min",
      "Genre": "Drama",
      "Director": "Alfonso Cuarón",
      "Writer": "Alfonso Cuarón",
      "Actors": "Yalitza Aparicio, Marina de Tavira, Diego Cortina Autrey, Carlos Peralta",
      "Plot": "A story that chronicles a year in the life of a middle-class family's maid in Mexico City in the early 1970s.",
      "Language": "Spanish, English, Norwegian, Japanese",
      "Country": "Mexico, USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTU0OTc3ODk4Ml5BMl5BanBnXkFtZTgwMzM4NzI5NjM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.2/10"
        },
        {
          "Source": "Metacritic",
          "Value": "96/100"
        }
      ],
      "Metascore": "96",
      "imdbRating": "8.2",
      "imdbVotes": "30,951",
      "imdbID": "tt6155172",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Soni",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "05 Sep 2018",
      "Runtime": "97 min",
      "Genre": "Drama",
      "Director": "Ivan Ayr",
      "Writer": "Ivan Ayr, Kislay Kislay",
      "Actors": "Geetika Vidya Ohlyan, Saloni Batra, Vikas Shukla, Mohit Chauhan",
      "Plot": "Soni, a young policewoman in Delhi, and her superintendent, Kalpana, have collectively taken on a growing crisis of violent crimes against women. However, their alliance suffers a major ...",
      "Language": "Hindi",
      "Country": "India",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZDU1Zjk2OWMtYjIyZC00OWIxLTg3MmItNDA4OTcyZjBmNmFlXkEyXkFqcGdeQXVyNjA3NzYzNzc@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.7/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "80%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "7.7",
      "imdbVotes": "49",
      "imdbID": "tt6078866",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Pee-wee's Big Holiday",
      "Year": "2016",
      "Rated": "TV-PG",
      "Released": "18 Mar 2016",
      "Runtime": "90 min",
      "Genre": "Adventure, Comedy, Family",
      "Director": "John Lee",
      "Writer": "Paul Reubens, Paul Rust",
      "Actors": "Paul Reubens, Jordan Black, Doug Cox, Linda Porter",
      "Plot": "A fateful meeting with a mysterious stranger inspires Pee-wee Herman to take his first holiday ever in this epic story of friendship and destiny.",
      "Language": "English, Spanish",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjIyODA1MzYyM15BMl5BanBnXkFtZTgwMjQxODYyODE@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.2/10"
        },
        {
          "Source": "Metacritic",
          "Value": "63/100"
        }
      ],
      "Metascore": "63",
      "imdbRating": "6.2",
      "imdbVotes": "6,129",
      "imdbID": "tt0837156",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Special Correspondents",
      "Year": "2016",
      "Rated": "TV-MA",
      "Released": "29 Apr 2016",
      "Runtime": "101 min",
      "Genre": "Comedy",
      "Director": "Ricky Gervais",
      "Writer": "Ricky Gervais",
      "Actors": "Ricky Gervais, Eric Bana, Vera Farmiga, Kelly Macdonald",
      "Plot": "A radio journalist and his technician get in over their heads when they hatch a scheme to fake their own kidnapping during a rebel uprising in South America and hide out in New York instead.",
      "Language": "English, Spanish",
      "Country": "Canada, UK, USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2MzUwODQzMF5BMl5BanBnXkFtZTgwMTA5MDM0ODE@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.8/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "17%"
        },
        {
          "Source": "Metacritic",
          "Value": "36/100"
        }
      ],
      "Metascore": "36",
      "imdbRating": "5.8",
      "imdbVotes": "15,215",
      "imdbID": "tt4181052",
      "Type": "movie",
      "DVD": "29 Apr 2016",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "http://www.netflix.com/title/80048940",
      "Response": "True"
    },
    {
      "Title": "The Do-Over",
      "Year": "2016",
      "Rated": "TV-MA",
      "Released": "27 May 2016",
      "Runtime": "108 min",
      "Genre": "Action, Adventure, Comedy, Mystery",
      "Director": "Steven Brill",
      "Writer": "Kevin Barnett, Chris Pappas",
      "Actors": "Adam Sandler, David Spade, Paula Patton, Kathryn Hahn",
      "Plot": "Two down-on-their-luck guys decide to fake their own deaths and start over with new identities, only to find the people they're pretending to be are in even deeper trouble.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyNDY2NzAxNV5BMl5BanBnXkFtZTgwOTMxMzg2ODE@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.7/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "10%"
        },
        {
          "Source": "Metacritic",
          "Value": "22/100"
        }
      ],
      "Metascore": "22",
      "imdbRating": "5.7",
      "imdbVotes": "31,863",
      "imdbID": "tt4769836",
      "Type": "movie",
      "DVD": "27 May 2016",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "http://www.netflix.com/title/80063265",
      "Response": "True"
    },
    {
      "Title": "Mascots",
      "Year": "2016",
      "Rated": "TV-MA",
      "Released": "13 Oct 2016",
      "Runtime": "89 min",
      "Genre": "Comedy",
      "Director": "Christopher Guest",
      "Writer": "Christopher Guest, Jim Piddock",
      "Actors": "Zach Woods, Wayne Wilderson, Sarah Baker, Michael Hitchcock",
      "Plot": "A look into the world of competitive mascots.",
      "Language": "English",
      "Country": "USA",
      "Awards": "1 nomination.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQxNjAxMzI5Ml5BMl5BanBnXkFtZTgwMzE2NjA5OTE@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.8/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "50%"
        },
        {
          "Source": "Metacritic",
          "Value": "57/100"
        }
      ],
      "Metascore": "57",
      "imdbRating": "5.8",
      "imdbVotes": "5,917",
      "imdbID": "tt4936176",
      "Type": "movie",
      "DVD": "13 Oct 2016",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Brahman Naman",
      "Year": "2016",
      "Rated": "N/A",
      "Released": "07 Jul 2016",
      "Runtime": "95 min",
      "Genre": "Comedy",
      "Director": "Qaushiq Mukherjee",
      "Writer": "Naman Ramachandran",
      "Actors": "Shashank Arora, Tanmay Dhanania, Chaitanya Varad, Vaishwath Shankar",
      "Plot": "A champion college quizzing team try to win the all-India finals and lose their virginities.",
      "Language": "English",
      "Country": "India, UK",
      "Awards": "2 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDdlYWI3YWMtZmNhMC00NzZhLWI2ZWMtNjZmZDE2ZDYzMzRmXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.7/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "75%"
        },
        {
          "Source": "Metacritic",
          "Value": "58/100"
        }
      ],
      "Metascore": "58",
      "imdbRating": "5.7",
      "imdbVotes": "1,426",
      "imdbID": "tt5240748",
      "Type": "movie",
      "DVD": "07 Jul 2016",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "http://www.netflix.com/title/80097355",
      "Response": "True"
    },
    {
      "Title": "True Memoirs of an International Assassin",
      "Year": "2016",
      "Rated": "TV-14",
      "Released": "11 Nov 2016",
      "Runtime": "98 min",
      "Genre": "Action, Comedy, Crime",
      "Director": "Jeff Wadlow",
      "Writer": "Jeff Morris (screenplay), Jeff Wadlow (screenplay)",
      "Actors": "Kevin James, Kim Coates, Maurice Compte, Zulay Henao",
      "Plot": "After a publisher changes a writer's debut novel about a deadly assassin from fiction to non-fiction, the author finds himself thrust into the world of his lead character, and must take on the role of his character for his own survival.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjEzMjI0Mzc5MV5BMl5BanBnXkFtZTgwODExMDgxMDI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.9/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "0%"
        },
        {
          "Source": "Metacritic",
          "Value": "37/100"
        }
      ],
      "Metascore": "37",
      "imdbRating": "5.9",
      "imdbVotes": "16,111",
      "imdbID": "tt1542768",
      "Type": "movie",
      "DVD": "11 Nov 2016",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Take the 10",
      "Year": "2017",
      "Rated": "N/A",
      "Released": "20 Jan 2017",
      "Runtime": "80 min",
      "Genre": "Comedy",
      "Director": "Chester Tam",
      "Writer": "Chester Tam",
      "Actors": "Josh Peck, Tony Revolori, Kevin Corrigan, Chester Tam",
      "Plot": "A day in the life of two best friends, a drug dealer, and a store manager collide at a hip-hop concert in the Inland Empire.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://ia.media-imdb.com/images/M/MV5BN2E1YmYwOTAtMjdkNS00ZGJjLTk3MmQtYzZkNWQwNmM0Mjg5L2ltYWdlXkEyXkFqcGdeQXVyMzMxODMxNjk@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "4.8/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "4.8",
      "imdbVotes": "1,852",
      "imdbID": "tt5792472",
      "Type": "movie",
      "DVD": "20 Jan 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Sandy Wexler",
      "Year": "2017",
      "Rated": "TV-14",
      "Released": "14 Apr 2017",
      "Runtime": "130 min",
      "Genre": "Comedy",
      "Director": "Steven Brill",
      "Writer": "Dan Bulla (screenplay by), Paul Sado (screenplay by), Adam Sandler (screenplay by)",
      "Actors": "Adam Sandler, Jennifer Hudson, Kevin James, Colin Quinn",
      "Plot": "Sandy Wexler (Adam Sandler) is a talent manager working in Los Angeles in the 1990s, diligently representing a group of eccentric clients on the fringes of show business. His single-minded ...",
      "Language": "English",
      "Country": "USA",
      "Awards": "1 win & 1 nomination.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTY1NDIwMjQ1OF5BMl5BanBnXkFtZTgwMzUzMjI4MTI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.1/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "27%"
        },
        {
          "Source": "Metacritic",
          "Value": "40/100"
        }
      ],
      "Metascore": "40",
      "imdbRating": "5.1",
      "imdbVotes": "11,334",
      "imdbID": "tt5893332",
      "Type": "movie",
      "DVD": "14 Apr 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Win It All",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "07 Apr 2017",
      "Runtime": "88 min",
      "Genre": "Comedy",
      "Director": "Joe Swanberg",
      "Writer": "Jake Johnson, Joe Swanberg",
      "Actors": "Jake Johnson, Rony Shemon, Morgan Ng, Edward Kaihatsu",
      "Plot": "Eddie Garrett agrees to watch a duffel bag for an acquaintance who is heading to prison. When he discovers cash in the bag, he's unable to resist the temptation and winds up deeply in debt....",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTEzOTYzOTctMDBjNi00NzMyLTkzNjgtYTIyNDAxOWNiMDIxXkEyXkFqcGdeQXVyMzI3MDEzMzM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.2/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "86%"
        },
        {
          "Source": "Metacritic",
          "Value": "77/100"
        }
      ],
      "Metascore": "77",
      "imdbRating": "6.2",
      "imdbVotes": "6,333",
      "imdbID": "tt3155328",
      "Type": "movie",
      "DVD": "07 Apr 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Small Crimes",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "28 Apr 2017",
      "Runtime": "95 min",
      "Genre": "Crime, Drama, Thriller",
      "Director": "E.L. Katz",
      "Writer": "E.L. Katz (screenplay by), Macon Blair (screenplay by), David Zeltserman (based upon the novel Small Crimes by)",
      "Actors": "Nikolaj Coster-Waldau, Robert Forster, Jacki Weaver, Molly Parker",
      "Plot": "A disgraced former cop, fresh off a six-year prison sentence for attempted murder - returns home looking for redemption but winds up trapped in the mess he left behind.",
      "Language": "English",
      "Country": "Canada, USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjRiNjMxMzQtMTgxNi00MjNlLTg0MTMtZmY0NzQxNzEwNjMzXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.8/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "63%"
        },
        {
          "Source": "Metacritic",
          "Value": "60/100"
        }
      ],
      "Metascore": "60",
      "imdbRating": "5.8",
      "imdbVotes": "5,167",
      "imdbID": "tt5717492",
      "Type": "movie",
      "DVD": "28 Apr 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Handsome: A Netflix Mystery Movie",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "05 May 2017",
      "Runtime": "80 min",
      "Genre": "Comedy, Mystery",
      "Director": "Jeff Garlin",
      "Writer": "Andrea Seigel, Jeff Garlin",
      "Actors": "Ava Acres, Armani GreatDane, Dino Battaglia, Brent Bradshaw",
      "Plot": "Gene Handsome is an LA homicide detective who tries to make sense of his life as he solves crime. Handsome's knack for solving mysteries is matched only by his inability to make sense of his own problems.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzIyMzA5MDU3M15BMl5BanBnXkFtZTgwNjk1MjA4MTI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.3/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.3",
      "imdbVotes": "2,951",
      "imdbID": "tt5809020",
      "Type": "movie",
      "DVD": "05 May 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Incredible Jessica James",
      "Year": "2017",
      "Rated": "N/A",
      "Released": "28 Jul 2017",
      "Runtime": "85 min",
      "Genre": "Comedy",
      "Director": "Jim Strouse",
      "Writer": "Jim Strouse",
      "Actors": "Jessica Williams, Chris O'Dowd, Lakeith Stanfield, Noël Wells",
      "Plot": "An aspiring playwright in New York strikes up a friendship with a guy while on the rebound from a break-up.",
      "Language": "English",
      "Country": "USA",
      "Awards": "3 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTUxODczMTQ2Ml5BMl5BanBnXkFtZTgwNDI1ODA5MjI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.5/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "87%"
        },
        {
          "Source": "Metacritic",
          "Value": "72/100"
        }
      ],
      "Metascore": "72",
      "imdbRating": "6.5",
      "imdbVotes": "4,723",
      "imdbID": "tt5990342",
      "Type": "movie",
      "DVD": "28 Jul 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "War Machine",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "26 May 2017",
      "Runtime": "122 min",
      "Genre": "Comedy, Drama, War",
      "Director": "David Michôd",
      "Writer": "Michael Hastings (book), David Michôd (screenplay)",
      "Actors": "Brad Pitt, Daniel Betts, John Magaro, Emory Cohen",
      "Plot": "An idiosyncratic General confronts opposition from enemies, allies, and bureaucrats while leading a massive rebuilding operation in Afghanistan.",
      "Language": "English, Pushto",
      "Country": "USA",
      "Awards": "2 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyMzgwNDE1M15BMl5BanBnXkFtZTgwMDAzMDM0MjI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.0/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "49%"
        },
        {
          "Source": "Metacritic",
          "Value": "56/100"
        }
      ],
      "Metascore": "56",
      "imdbRating": "6.0",
      "imdbVotes": "32,885",
      "imdbID": "tt4758646",
      "Type": "movie",
      "DVD": "26 May 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "https://www.netflix.com/title/80068327",
      "Response": "True"
    },
    {
      "Title": "Naked",
      "Year": "2017",
      "Rated": "TV-14",
      "Released": "11 Aug 2017",
      "Runtime": "96 min",
      "Genre": "Comedy, Fantasy, Romance",
      "Director": "Michael Tiddes",
      "Writer": "Rick Alvarez, Mårten Knutsson (based on an original story by), Torkel Knutsson (based on an original story by), Cory Koller, Marlon Wayans",
      "Actors": "Marlon Wayans, Regina Hall, Dennis Haysbert, J.T. Jackson",
      "Plot": "Nervous about finally getting married, a guy is forced to relive the same nerve-wracking hours over and over again until he gets things right on his wedding day.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYmIzMzk2OTgtNWI1ZC00YTQxLWJiYWYtMzE5MTY4ODRiMTEzXkEyXkFqcGdeQXVyNzAwMjc4ODA@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.4/10"
        },
        {
          "Source": "Metacritic",
          "Value": "36/100"
        }
      ],
      "Metascore": "36",
      "imdbRating": "5.4",
      "imdbVotes": "13,013",
      "imdbID": "tt6048930",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Little Evil",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "01 Sep 2017",
      "Runtime": "94 min",
      "Genre": "Comedy, Horror",
      "Director": "Eli Craig",
      "Writer": "Eli Craig",
      "Actors": "Evangeline Lilly, Owen Atlas, Adam Scott, Marcus Terrell Smith",
      "Plot": "Gary, who has just married Samantha, the woman of his dreams, discovers that her six-year-old son may be the Antichrist.",
      "Language": "N/A",
      "Country": "USA",
      "Awards": "1 nomination.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0NTM2NzQ0Ml5BMl5BanBnXkFtZTgwMjc4MTAzMzI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.7/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "91%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.7",
      "imdbVotes": "14,906",
      "imdbID": "tt2937366",
      "Type": "movie",
      "DVD": "01 Sep 2017",
      "BoxOffice": "N/A",
      "Production": "Bluegrass Films",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "#REALITYHIGH",
      "Year": "2017",
      "Rated": "TV-14",
      "Released": "08 Sep 2017",
      "Runtime": "99 min",
      "Genre": "Comedy, Drama, Romance",
      "Director": "Fernando Lebrija",
      "Writer": "Brandon Broussard, Hudson Obayuwana, Jana Savage",
      "Actors": "Nesta Cooper, Keith Powers, Alicia Sanz, Jake Borelli",
      "Plot": "High-achieving high-school senior Dani Barnes dreams of getting into UC Davis, the world's top veterinary school. Then a glamorous new friend draws her into a Southern California scene that threatens everything she's worked for.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDU3Mzk0ODAtMzI0Ni00YTUzLWIyNDctMDE3OTE3OTk4OWE2XkEyXkFqcGdeQXVyNTM0MDc1ODE@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.2/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.2",
      "imdbVotes": "3,805",
      "imdbID": "tt6119504",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Bomb Scared",
      "Year": "2017",
      "Rated": "N/A",
      "Released": "12 Oct 2017",
      "Runtime": "89 min",
      "Genre": "Comedy",
      "Director": "Borja Cobeaga",
      "Writer": "Diego San José, Borja Cobeaga (story)",
      "Actors": "Javier Cámara, Julián López, Miren Ibarguren, Gorka Otxoa",
      "Plot": "Four Basque ETA terrorists, living together with peculiar Spanish neighbors, are planning a terrorist attack in Spain, but await instructions from the head of the organization.",
      "Language": "Spanish",
      "Country": "Spain",
      "Awards": "3 nominations.",
      "Poster": "https://ia.media-imdb.com/images/M/MV5BYTZhY2IxYjYtZDc4OS00ZGY4LTg4OTEtZTNiMzEzOTNlMTBhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.7/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.7",
      "imdbVotes": "1,705",
      "imdbID": "tt6895746",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Babysitter",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "13 Oct 2017",
      "Runtime": "85 min",
      "Genre": "Comedy, Horror",
      "Director": "McG",
      "Writer": "Brian Duffield",
      "Actors": "Judah Lewis, Samara Weaving, Robbie Amell, Hana Mae Lee",
      "Plot": "The events of one evening take an unexpected turn for the worst for a young boy trying to spy on his babysitter.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0MDUwNzg5OV5BMl5BanBnXkFtZTgwNTY4NjU3MzI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.3/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "6.3",
      "imdbVotes": "42,612",
      "imdbID": "tt4225622",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "Marvista Entertainment",
      "Website": "http://www.babysitterfilm.com/",
      "Response": "True"
    },
    {
      "Title": "The Polka King",
      "Year": "2017",
      "Rated": "TV-14",
      "Released": "12 Jan 2018",
      "Runtime": "95 min",
      "Genre": "Biography, Comedy, Drama",
      "Director": "Maya Forbes",
      "Writer": "Maya Forbes, Wallace Wolodarsky",
      "Actors": "Jack Black, Jenny Slate, Jason Schwartzman, Jacki Weaver",
      "Plot": "Local Pennsylvania polka legend Jan Lewan develops a plan to get rich that shocks his fans and lands him in jail.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTU3MTQyNDEyN15BMl5BanBnXkFtZTgwMjE3NjgzNDM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.9/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "65%"
        },
        {
          "Source": "Metacritic",
          "Value": "65/100"
        }
      ],
      "Metascore": "65",
      "imdbRating": "5.9",
      "imdbVotes": "6,146",
      "imdbID": "tt5539052",
      "Type": "movie",
      "DVD": "12 Jan 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "http://www.netflix.com/thepolkaking",
      "Response": "True"
    },
    {
      "Title": "Step Sisters",
      "Year": "2018",
      "Rated": "PG-13",
      "Released": "19 Jan 2018",
      "Runtime": "108 min",
      "Genre": "Comedy",
      "Director": "Charles Stone III",
      "Writer": "Chuck Hayward",
      "Actors": "Megalyn Echikunwoke, Eden Sher, Lyndon Smith, Gage Golightly",
      "Plot": "Jamilah has her whole life figured out. She's the president of her sorority, captain of their champion step dance crew, is student liaison to the college dean, and her next move is on to ...",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjI0ODYyOTI0NF5BMl5BanBnXkFtZTgwOTY5ODg0NDM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.4/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "22%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.4",
      "imdbVotes": "2,990",
      "imdbID": "tt5267472",
      "Type": "movie",
      "DVD": "19 Jan 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "A Christmas Prince",
      "Year": "2017",
      "Rated": "TV-PG",
      "Released": "17 Nov 2017",
      "Runtime": "92 min",
      "Genre": "Comedy, Romance",
      "Director": "Alex Zamm",
      "Writer": "Karen Schaler, Nate Atkins",
      "Actors": "Rose McIver, Ben Lamb, Alice Krige, Honor Kneafsey",
      "Plot": "When a reporter goes undercover as a tutor to get the inside scoop on a playboy prince, she gets tangled in some royal intrigue and ends up finding love - but will she be able to keep up her lie?",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNWMzZTE4NTYtOGRiNi00YzQ2LWJiNjctMzk1NDU4NmY5ZGQwXkEyXkFqcGdeQXVyODIyMzA4NDc@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.7/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "78%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.7",
      "imdbVotes": "11,016",
      "imdbID": "tt7608418",
      "Type": "movie",
      "DVD": "17 Nov 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "El Camino Christmas",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "08 Dec 2017",
      "Runtime": "89 min",
      "Genre": "Comedy, Crime",
      "Director": "David E. Talbert",
      "Writer": "Theodore Melfi, Christopher Wehner",
      "Actors": "Dax Shepard, Kurtwood Smith, Luke Grimes, Emilio Rivera",
      "Plot": "The project, scripted by Melfi and writer Chris Wehner, is about a young man (Grimes) who seeks out a father he has never met and, through no fault of his own, ends up barricaded in a ...",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODk3MzY0MDkyM15BMl5BanBnXkFtZTgwNzUxNzMyNDM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.6/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "40%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.6",
      "imdbVotes": "5,630",
      "imdbID": "tt3255590",
      "Type": "movie",
      "DVD": "08 Dec 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Blockbuster",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "24 Jan 2018",
      "Runtime": "85 min",
      "Genre": "Comedy",
      "Director": "July Hygreck",
      "Writer": "July Hygreck (screenplay), Tom Hygreck (screenplay)",
      "Actors": "Syrus Shahidi, Charlotte Gabris, Tom Hygreck, Gunther Love",
      "Plot": "Dumped over a video he made to amuse his ailing dad, a heartsick Jérémy hatches and elaborate scheme to win back his superhero loving girlfriend Lola.",
      "Language": "French",
      "Country": "France",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODk2MjY0OTYtZTQ3OC00NWQ0LThjNzAtOGNjMjQxOWZiYmZmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.5/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.5",
      "imdbVotes": "232",
      "imdbID": "tt2463842",
      "Type": "movie",
      "DVD": "24 Jan 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "When We First Met",
      "Year": "2018",
      "Rated": "TV-14",
      "Released": "09 Feb 2018",
      "Runtime": "97 min",
      "Genre": "Comedy, Fantasy, Romance",
      "Director": "Ari Sandel",
      "Writer": "John Whittington",
      "Actors": "Adam Devine, Alexandra Daddario, Shelley Hennig, Andrew Bachelor",
      "Plot": "Noah meets Avery at a Halloween party and falls in love but gets friend-zoned. 3 years later she's engaged to someone else. Noah uses the photo booth time machine several times to return and fix things. Will it work or...?",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzM1OTI4NDM4Nl5BMl5BanBnXkFtZTgwMDAwODg2NDM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.4/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "41%"
        },
        {
          "Source": "Metacritic",
          "Value": "36/100"
        }
      ],
      "Metascore": "36",
      "imdbRating": "6.4",
      "imdbVotes": "31,306",
      "imdbID": "tt5783956",
      "Type": "movie",
      "DVD": "09 Feb 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "A Futile and Stupid Gesture",
      "Year": "2018",
      "Rated": "TV-MA",
      "Released": "26 Jan 2018",
      "Runtime": "101 min",
      "Genre": "Biography, Comedy",
      "Director": "David Wain",
      "Writer": "Michael Colton, John Aboud, Josh Karp (based on the book by)",
      "Actors": "Frank Gingerich, Morgan Gingerich, Annette O'Toole, Harry Groener",
      "Plot": "In the 1970s and '80s, National Lampoon's success and influence creates a new media empire overseen in part by the brilliant and troubled Douglas Kenney.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTg3OTQyODAwOF5BMl5BanBnXkFtZTgwMDY1MDM0NDM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.8/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "65%"
        },
        {
          "Source": "Metacritic",
          "Value": "55/100"
        }
      ],
      "Metascore": "55",
      "imdbRating": "6.8",
      "imdbVotes": "9,510",
      "imdbID": "tt5566790",
      "Type": "movie",
      "DVD": "26 Jan 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Love Per Square Foot",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "14 Feb 2018",
      "Runtime": "133 min",
      "Genre": "Comedy, Romance",
      "Director": "Anand Tiwari",
      "Writer": "Asif Ali Beg (additional dialogue), Anand Tiwari, Sumeet Vyas (dialogue), Sumeet Vyas",
      "Actors": "Vicky Kaushal, Angira Dhar, Alankrita Sahai, Raghuvir Yadav",
      "Plot": "Individually, Sanjay and Karina don't earn enough to be able to buy a home, so they enter into a marriage of convenience.",
      "Language": "Hindi",
      "Country": "India",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzM4NGVhYjQtMTM5OS00ZmQ5LTg3NzktZDY5NzMwNmI4YzRmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.2/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "7.2",
      "imdbVotes": "5,100",
      "imdbID": "tt7853242",
      "Type": "movie",
      "DVD": "14 Feb 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Benji",
      "Year": "2018",
      "Rated": "TV-PG",
      "Released": "16 Mar 2018",
      "Runtime": "87 min",
      "Genre": "Crime, Drama, Family",
      "Director": "Brandon Camp",
      "Writer": "Brandon Camp (written for screen by), Joe Camp (based on the 1974 motion picture written by)",
      "Actors": "Gabriel Bateman, Darby Camp, Kiele Sanchez, Gralen Bryant Banks",
      "Plot": "Two school kids strike up a friendship with an orphaned puppy named Benji. When danger befalls them and they end up kidnapped by robbers who are in over their heads, Benji and his scruffy sidekick come to the rescue.",
      "Language": "English",
      "Country": "United Arab Emirates, USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MzIyMDk5Ml5BMl5BanBnXkFtZTgwMzA5MTA4NDM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.4/10"
        },
        {
          "Source": "Metacritic",
          "Value": "53/100"
        }
      ],
      "Metascore": "53",
      "imdbRating": "6.4",
      "imdbVotes": "2,248",
      "imdbID": "tt1799516",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Happy Anniversary",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "30 Mar 2018",
      "Runtime": "78 min",
      "Genre": "Comedy",
      "Director": "Jared Stern",
      "Writer": "Jared Stern",
      "Actors": "Noël Wells, Ben Schwartz, Rahul Kohli, Joe Pantoliano",
      "Plot": "A couple on their three-year anniversary need to decide whether to stay together or call it quits.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzdmNjljMGMtZDBlZC00N2NjLTgyMTctMzU5M2VhYTkzYjRlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.7/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "83%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.7",
      "imdbVotes": "2,680",
      "imdbID": "tt6423886",
      "Type": "movie",
      "DVD": "30 Mar 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Dude",
      "Year": "2018",
      "Rated": "TV-MA",
      "Released": "20 Apr 2018",
      "Runtime": "97 min",
      "Genre": "Comedy, Drama",
      "Director": "Olivia Milch",
      "Writer": "Olivia Milch, Olivia Milch (story by), Kendall McKinnon (story by)",
      "Actors": "Lucy Hale, Kathryn Prescott, Alexandra Shipp, Awkwafina",
      "Plot": "A group of teenage girlfriends deal with life after high school.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTk1NjA2ODk2NV5BMl5BanBnXkFtZTgwNjkyMTA0NTM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.1/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.1",
      "imdbVotes": "4,572",
      "imdbID": "tt3458510",
      "Type": "movie",
      "DVD": "20 Apr 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "I Am Not an Easy Man",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "13 Apr 2018",
      "Runtime": "98 min",
      "Genre": "Comedy",
      "Director": "Eléonore Pourriat",
      "Writer": "Ariane Fert (collaborating writer), Eléonore Pourriat",
      "Actors": "Vincent Elbaz, Marie-Sophie Ferdane, Pierre Benezit, Blanche Gardin",
      "Plot": "A shameless chauvinist gets a taste of his own medicine when he wakes up in a world dominated by women and locks horns with a powerful female author.",
      "Language": "French",
      "Country": "France",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYzM3OGM1OGUtMzE0Yi00OGM2LWFlNjItMGIwNmE4ODhkY2E2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.4/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "6.4",
      "imdbVotes": "6,845",
      "imdbID": "tt6857988",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Candy Jar",
      "Year": "2018",
      "Rated": "TV-14",
      "Released": "27 Apr 2018",
      "Runtime": "92 min",
      "Genre": "Comedy",
      "Director": "Ben Shelton",
      "Writer": "Chad Klitzman",
      "Actors": "Jacob Latimore, Sami Gayle, Tom Bergeron, Helen Hunt",
      "Plot": "Dueling high school debate champs who are at odds on just about everything forge ahead with ambitious plans to get into the colleges of their dreams.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDZiYTg3NTQtNzU2Ni00ZjhkLTk4YTAtMDZkY2RjNDllNjhiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.8/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "67%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.8",
      "imdbVotes": "2,951",
      "imdbID": "tt6744044",
      "Type": "movie",
      "DVD": "27 Apr 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Week Of",
      "Year": "2018",
      "Rated": "TV-14",
      "Released": "27 Apr 2018",
      "Runtime": "116 min",
      "Genre": "Comedy",
      "Director": "Robert Smigel",
      "Writer": "Adam Sandler, Robert Smigel",
      "Actors": "Adam Sandler, Chris Rock, Steve Buscemi, Rachel Dratch",
      "Plot": "Two fathers with opposing personalities come together to celebrate the wedding of their children. They are forced to spend the longest week of their lives together, and the big day cannot come soon enough.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjUwMjczMzY5OV5BMl5BanBnXkFtZTgwMjgyMTczNTM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.1/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "26%"
        },
        {
          "Source": "Metacritic",
          "Value": "42/100"
        }
      ],
      "Metascore": "42",
      "imdbRating": "5.1",
      "imdbVotes": "11,838",
      "imdbID": "tt6821012",
      "Type": "movie",
      "DVD": "27 Apr 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Kissing Booth",
      "Year": "2018",
      "Rated": "TV-14",
      "Released": "11 May 2018",
      "Runtime": "105 min",
      "Genre": "Comedy, Romance",
      "Director": "Vince Marcello",
      "Writer": "Vince Marcello (screenplay), Beth Reekles (novel)",
      "Actors": "Megan du Plessis, Lincoln Pearson, Caitlyn de Abrue, Jack Fokkens",
      "Plot": "A high school student is forced to confront her secret crush at a kissing booth.",
      "Language": "English",
      "Country": "UK",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjQ0Mzk0OTE5MF5BMl5BanBnXkFtZTgwNDkyOTI0NTM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.2/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "13%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "6.2",
      "imdbVotes": "35,139",
      "imdbID": "tt3799232",
      "Type": "movie",
      "DVD": "11 May 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Ibiza",
      "Year": "2018",
      "Rated": "TV-MA",
      "Released": "25 May 2018",
      "Runtime": "94 min",
      "Genre": "Comedy, Romance",
      "Director": "Alex Richanbach",
      "Writer": "Lauryn Kahn",
      "Actors": "Gwen Elizabeth Duchon, Gillian Jacobs, Michaela Watkins, Phoebe Robinson",
      "Plot": "A young American woman and her two best friends seek out a hot DJ in Spain.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTczMTA5ODMxOV5BMl5BanBnXkFtZTgwNTgwNDkzNTM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.2/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "70%"
        },
        {
          "Source": "Metacritic",
          "Value": "56/100"
        }
      ],
      "Metascore": "56",
      "imdbRating": "5.2",
      "imdbVotes": "10,904",
      "imdbID": "tt3685236",
      "Type": "movie",
      "DVD": "25 May 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Game Over, Man!",
      "Year": "2018",
      "Rated": "TV-MA",
      "Released": "23 Mar 2018",
      "Runtime": "101 min",
      "Genre": "Action, Comedy",
      "Director": "Kyle Newacheck",
      "Writer": "Anders Holm (screenplay by), Anders Holm (story by), Kyle Newacheck (story by), Adam Devine (story by), Blake Anderson (story by)",
      "Actors": "Adam Devine, Anders Holm, Blake Anderson, Chloe Bridges",
      "Plot": "Three friends are on the verge of getting their video game financed when their benefactor is taken hostage by terrorists.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTUxNjI4MDU2OF5BMl5BanBnXkFtZTgwMDAzMzA1NDM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.4/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "20%"
        },
        {
          "Source": "Metacritic",
          "Value": "32/100"
        }
      ],
      "Metascore": "32",
      "imdbRating": "5.4",
      "imdbVotes": "19,430",
      "imdbID": "tt3317234",
      "Type": "movie",
      "DVD": "23 Mar 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Alex Strangelove",
      "Year": "2018",
      "Rated": "TV-MA",
      "Released": "08 Jun 2018",
      "Runtime": "99 min",
      "Genre": "Comedy, Drama",
      "Director": "Craig Johnson",
      "Writer": "Craig Johnson",
      "Actors": "Michael Abela, Daniel Doheny, Brendan Archer, Gianna Jean",
      "Plot": "Alex, the high school class president, nerd and a straight A student, has been dating Claire a long time. They decide to sleep together but then he meets a gay guy and gets confused.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MjIxOTYyNF5BMl5BanBnXkFtZTgwMTc3MDg0NTM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "82%"
        },
        {
          "Source": "Metacritic",
          "Value": "62/100"
        }
      ],
      "Metascore": "62",
      "imdbRating": "6.3",
      "imdbVotes": "9,945",
      "imdbID": "tt5688996",
      "Type": "movie",
      "DVD": "08 Jun 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Set It Up",
      "Year": "2018",
      "Rated": "TV-14",
      "Released": "15 Jun 2018",
      "Runtime": "105 min",
      "Genre": "Comedy, Romance",
      "Director": "Claire Scanlon",
      "Writer": "Katie Silberman",
      "Actors": "Zoey Deutch, Glen Powell, Lucy Liu, Taye Diggs",
      "Plot": "Two corporate executive assistants hatch a plan to match-make their two bosses.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTk0MDUyMzA1OF5BMl5BanBnXkFtZTgwNzA4NzE1NTM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.5/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "90%"
        },
        {
          "Source": "Metacritic",
          "Value": "62/100"
        }
      ],
      "Metascore": "62",
      "imdbRating": "6.5",
      "imdbVotes": "28,209",
      "imdbID": "tt5304992",
      "Type": "movie",
      "DVD": "15 Jun 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Father of the Year",
      "Year": "2018",
      "Rated": "TV-14",
      "Released": "20 Jul 2018",
      "Runtime": "94 min",
      "Genre": "Comedy",
      "Director": "Tyler Spindel",
      "Writer": "Brandon Cournoyer, Tyler Spindel",
      "Actors": "David Spade, Nat Faxon, Joey Bragg, Matt Shively",
      "Plot": "Before NYC, college valedictorian Ben visits his trailer park loser dad. Same evening Ben argues with Larry about whose dad can kick the other dad's ass. Loser dad hears of this and tries to beat up doormat dad and chaos follows.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTMzNjE4NjE2MV5BMl5BanBnXkFtZTgwOTc1NjE4NTM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.2/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "0%"
        },
        {
          "Source": "Metacritic",
          "Value": "32/100"
        }
      ],
      "Metascore": "32",
      "imdbRating": "5.2",
      "imdbVotes": "6,890",
      "imdbID": "tt7256866",
      "Type": "movie",
      "DVD": "20 Jul 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Legacy of a Whitetail Deer Hunter",
      "Year": "2018",
      "Rated": "TV-14",
      "Released": "06 Jul 2018",
      "Runtime": "83 min",
      "Genre": "Adventure, Comedy, Drama",
      "Director": "Jody Hill",
      "Writer": "Jody Hill, Danny McBride, John Carcieri",
      "Actors": "Josh Brolin, Carrie Coon, Danny McBride, Scoot McNairy",
      "Plot": "The great hunter Buck Ferguson (Josh Brolin) and his trusted cameraman Don (Danny McBride) set out for an epic weekend adventure to reconnect with Buck's young son (Montana Jordan).",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjM3MjY1MzMzOF5BMl5BanBnXkFtZTgwOTI5MDU4NTM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.5/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "30%"
        },
        {
          "Source": "Metacritic",
          "Value": "49/100"
        }
      ],
      "Metascore": "49",
      "imdbRating": "5.5",
      "imdbVotes": "2,456",
      "imdbID": "tt4762824",
      "Type": "movie",
      "DVD": "06 Jul 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Long Live Brij Mohan",
      "Year": "2017",
      "Rated": "N/A",
      "Released": "03 Aug 2018",
      "Runtime": "105 min",
      "Genre": "Comedy, Crime, Drama",
      "Director": "Nikhil Bhat",
      "Writer": "Nikhil Bhat (dialogue), Nikhil Bhat (screenplay), Nikhil Bhat (story), Kuldeep Ruhil (dialogue), Gaurav Sharma (concept), Gaurav Sharma (story)",
      "Actors": "Arjun Mathur, Nidhi Singh, Sheetal Thakur, Manav Vij",
      "Plot": "A man fakes his own death. Unfortunately for him, starting a new life with a new identity will only bring him more problems.",
      "Language": "Hindi",
      "Country": "India",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BM2U5NjM3MzktZmM2Zi00N2EzLTllNTUtMjFhMmQ3YTg1ZTZmXkEyXkFqcGdeQXVyNzI0NzQyNTk@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.1/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "7.1",
      "imdbVotes": "2,289",
      "imdbID": "tt6514010",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "To Each, Her Own",
      "Year": "2018",
      "Rated": "TV-MA",
      "Released": "24 Jun 2018",
      "Runtime": "95 min",
      "Genre": "Comedy",
      "Director": "Myriam Aziza",
      "Writer": "Myriam Aziza, Denyse Rodriguez-Tomé",
      "Actors": "Sarah Stern, Jean-Christophe Folly, Julia Piaton, Catherine Jacob",
      "Plot": "Simone plans to inform her conservative Jewish family that she's a lesbian, but as she proceeds with coming out she finds herself attracted to a man.",
      "Language": "French",
      "Country": "France",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjJhNDQ5NzAtZDlkZS00MGY4LWEwNWUtOTFmNDc2ZDIyYjNhXkEyXkFqcGdeQXVyODk0MTk4MjE@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.2/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.2",
      "imdbVotes": "802",
      "imdbID": "tt6290418",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Girlfriend's Day",
      "Year": "2017",
      "Rated": "TV-MA",
      "Released": "14 Feb 2017",
      "Runtime": "65 min",
      "Genre": "Comedy, Drama",
      "Director": "Michael Paul Stephenson",
      "Writer": "Eric Hoffman, Bob Odenkirk, Philip Zlotorynski",
      "Actors": "Bob Odenkirk, Amber Tamblyn, Stacy Keach, Alex Karpovsky",
      "Plot": "In a city where greeting card writers are celebrated like movie stars, Romance writer Ray used to be the king. In trying to recapture the feelings that once made him the greatest, he gets ...",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTVjYWQyZWUtMWI5ZS00NDEwLWJjM2ItZTlmNGJmNDViMTU2L2ltYWdlXkEyXkFqcGdeQXVyNjE4ODA3NTY@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.2/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "43%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.2",
      "imdbVotes": "2,780",
      "imdbID": "tt2962984",
      "Type": "movie",
      "DVD": "14 Feb 2017",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Package",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "10 Aug 2018",
      "Runtime": "94 min",
      "Genre": "Comedy",
      "Director": "Jake Szymanski",
      "Writer": "Kevin Burrows, Matt Mider",
      "Actors": "Daniel Doheny, Geraldine Viswanathan, Sadie Calvano, Luke Spencer Roberts",
      "Plot": "When a group of teenage friends go on a spring break camping trip, an unfortunate accident sets off a race against time to save their friend's most prized possession.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYmNjY2RhMTUtNTQ1Mi00NmJmLTk4Y2QtYzA1YmM1ZDNiNGRkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.5/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "47%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.5",
      "imdbVotes": "8,282",
      "imdbID": "tt7525778",
      "Type": "movie",
      "DVD": "10 Aug 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "http://www.netflix.com/thepackage",
      "Response": "True"
    },
    {
      "Title": "Like Father",
      "Year": "2018",
      "Rated": "TV-MA",
      "Released": "03 Aug 2018",
      "Runtime": "98 min",
      "Genre": "Comedy, Drama",
      "Director": "Lauren Miller Rogen",
      "Writer": "Lauren Miller Rogen (screenplay by), Anders Bard (story by), Lauren Miller Rogen (story by)",
      "Actors": "Kristen Bell, Danielle Davenport, Kimiko Glenn, Wynter Kullman",
      "Plot": "After she's left at the altar, a workaholic advertising executive ends up on her Caribbean honeymoon cruise with her estranged father.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTY1NDc3MzgxNV5BMl5BanBnXkFtZTgwNDc3MTQwNjM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.1/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "48%"
        },
        {
          "Source": "Metacritic",
          "Value": "52/100"
        }
      ],
      "Metascore": "52",
      "imdbRating": "6.1",
      "imdbVotes": "13,866",
      "imdbID": "tt7170950",
      "Type": "movie",
      "DVD": "03 Aug 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "To All the Boys I've Loved Before",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "17 Aug 2018",
      "Runtime": "99 min",
      "Genre": "Drama, Romance",
      "Director": "Susan Johnson",
      "Writer": "Sofia Alvarez (screenplay by), Jenny Han (based on the novel by)",
      "Actors": "Lana Condor, Noah Centineo, Janel Parrish, Anna Cathcart",
      "Plot": "A teenage girl's secret love letters are exposed and wreak havoc on her love life.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ3NjM5MTAzN15BMl5BanBnXkFtZTgwODQzMDAwNjM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.3/10"
        },
        {
          "Source": "Metacritic",
          "Value": "64/100"
        }
      ],
      "Metascore": "64",
      "imdbRating": "7.3",
      "imdbVotes": "50,812",
      "imdbID": "tt3846674",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Sierra Burgess Is a Loser",
      "Year": "2018",
      "Rated": "PG-13",
      "Released": "07 Sep 2018",
      "Runtime": "105 min",
      "Genre": "Comedy, Drama, Romance",
      "Director": "Ian Samuels",
      "Writer": "Lindsey Beer",
      "Actors": "Shannon Purser, Kristine Froseth, RJ Cyler, Noah Centineo",
      "Plot": "A case of mistaken identity results in unexpected romance when the most popular girl in high school and the biggest loser must come together to win over their crushes.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTU5Mjc4NTM2Ml5BMl5BanBnXkFtZTgwMjMzMzA5NTM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.0/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "64%"
        },
        {
          "Source": "Metacritic",
          "Value": "60/100"
        }
      ],
      "Metascore": "60",
      "imdbRating": "6.0",
      "imdbVotes": "21,805",
      "imdbID": "tt3120280",
      "Type": "movie",
      "DVD": "07 Sep 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Nappily Ever After",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "21 Sep 2018",
      "Runtime": "98 min",
      "Genre": "Comedy, Drama, Romance",
      "Director": "Haifaa Al-Mansour",
      "Writer": "Adam Brooks, Cee Marcellus, Trisha R. Thomas (based on the novel Nappily Ever After by)",
      "Actors": "Sanaa Lathan, Ricky Whittle, Lyriq Bent, Lynn Whitfield",
      "Plot": "Violet Jones tired of waiting for her longtime boyfriend to propose, breaks up with him. But old feelings, and heaps of jealousy, no doubt, arise when he promptly begins dating another woman.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzIzMWY0Y2YtMWM4My00MjZlLWI4YjAtMjNjMzE5YmVjM2M0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.4/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "67%"
        },
        {
          "Source": "Metacritic",
          "Value": "63/100"
        }
      ],
      "Metascore": "63",
      "imdbRating": "6.4",
      "imdbVotes": "5,144",
      "imdbID": "tt0365545",
      "Type": "movie",
      "DVD": "21 Sep 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Holiday Calendar",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "02 Nov 2018",
      "Runtime": "95 min",
      "Genre": "Drama, Romance",
      "Director": "Bradley Walsh",
      "Writer": "Amyn Kaderali",
      "Actors": "Kat Graham, Quincy Brown, Ethan Peck, Ron Cephas Jones",
      "Plot": "A struggling but talented photographer inherits an antique holiday advent calendar, the contents of which seem to predict the future. Will this magical calendar lead her to love this holiday season?",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BY2ZhYWRlMWYtMDA2YS00ZDQ5LWFmMzctZjg2ZDAwOThmNmJjXkEyXkFqcGdeQXVyNjk2Mjc2OTI@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.7/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "40%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.7",
      "imdbVotes": "4,705",
      "imdbID": "tt8262802",
      "Type": "movie",
      "DVD": "02 Nov 2018",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Christmas Chronicles",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "22 Nov 2018",
      "Runtime": "104 min",
      "Genre": "Adventure, Comedy, Family, Fantasy",
      "Director": "Clay Kaytis",
      "Writer": "Matt Lieberman (screenplay by), David Guggenheim (story by), Matt Lieberman (story by)",
      "Actors": "Oliver Hudson, Kimberly Williams-Paisley, Jesse Gervasi, David Kohlsmith",
      "Plot": "The story of sister and brother, Kate and Teddy Pierce, whose Christmas Eve plan to catch Santa Claus on camera turns into an unexpected journey that most kids could only dream about.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTA3NjU3OTM2MV5BMl5BanBnXkFtZTgwNjQ2MzE1NjM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "7.2/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "72%"
        },
        {
          "Source": "Metacritic",
          "Value": "52/100"
        }
      ],
      "Metascore": "52",
      "imdbRating": "7.2",
      "imdbVotes": "28,692",
      "imdbID": "tt2990140",
      "Type": "movie",
      "DVD": "22 Nov 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Princess Switch",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "16 Nov 2018",
      "Runtime": "101 min",
      "Genre": "N/A",
      "Director": "Mike Rohl",
      "Writer": "Robin Bernheim, Megan Metzger",
      "Actors": "Vanessa Hudgens, Sam Palladio, Nick Sagar, Alexa Adeosun",
      "Plot": "A Chicago baker (V.Hudgens) is competing in a Christmas baking competition in Belgravia. There she bumps into the prince's fiancee. They look alike and switch for 2 days. \"Life is what happens to you while you're busy making other plans.\"",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyMjYxMjEzOF5BMl5BanBnXkFtZTgwMjAwNDE3NjM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "6.0/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "89%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "6.0",
      "imdbVotes": "11,585",
      "imdbID": "tt8954732",
      "Type": "movie",
      "DVD": "16 Nov 2018",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "A Christmas Prince: The Royal Wedding",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "30 Nov 2018",
      "Runtime": "92 min",
      "Genre": "Drama, Romance",
      "Director": "John Schultz",
      "Writer": "Nate Atkins, Karen Schaler (based on characters created by)",
      "Actors": "Rose McIver, Ben Lamb, Alice Krige, Honor Kneafsey",
      "Plot": "A year after helping Richard get to the throne, Amber is about to become his wife. But is she really made to be queen?",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMWVhMTBiOWUtMmI0Ni00NDg1LWFkMmYtNTJkNTkxNWE5OWY5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.1/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "54%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.1",
      "imdbVotes": "4,003",
      "imdbID": "tt8709036",
      "Type": "movie",
      "DVD": "30 Nov 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "https://www.netflix.com/title/80238204",
      "Response": "True"
    },
    {
      "Title": "Rajma Chawal",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "30 Nov 2018",
      "Runtime": "117 min",
      "Genre": "Comedy, Drama, Family",
      "Director": "Leena Yadav",
      "Writer": "Vivek Anchalia (screenplay), Vivek Anchalia (story), Manu Rishi Chadha (dialogue), Manu Rishi Chadha (screenplay), Leena Yadav (screenplay)",
      "Actors": "Amyra Dastur, Rishi Kapoor, Aparshakti Khurana, Sheeba Chaddha",
      "Plot": "An internet-rookie father attempts to use social media to enhance his faltering relationship with his millennial son.",
      "Language": "Hindi",
      "Country": "India",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjFhYzRlMzAtZWI2Ny00YjY1LTlkNTQtNmFjYmEyZDc3NDIxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.6/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.6",
      "imdbVotes": "945",
      "imdbID": "tt6747420",
      "Type": "movie",
      "DVD": "30 Nov 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Lionheart",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "04 Jan 2019",
      "Runtime": "95 min",
      "Genre": "Comedy",
      "Director": "Genevieve Nnaji",
      "Writer": "Ishaya Bako, Emil B. Garuba, C.J. 'Fiery' Obasi",
      "Actors": "Genevieve Nnaji, Nkem Owoh, Pete Edochie, Onyeka Onwenu",
      "Plot": "Running a company can be challenging, especially if you are a female in a male-dominated industry. Looking to prove her worth, Adaeze steps up to the challenge when her father is forced to take a step back due to health issues.",
      "Language": "Ibo, English",
      "Country": "Nigeria",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTQ1NThiOTgtODMyMS00ZGNlLTkwMmQtMzJiZmVkZTg0ZjczXkEyXkFqcGdeQXVyOTA3NzgxODQ@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "4.8/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "4.8",
      "imdbVotes": "183",
      "imdbID": "tt7707314",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "5 Star Christmas",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "24 Dec 2018",
      "Runtime": "92 min",
      "Genre": "N/A",
      "Director": "Marco Risi",
      "Writer": "Ray Cooney (loosely based on the comedy \"Out of Order\" by), Enrico Vanzina",
      "Actors": "Massimo Ghini, Ricky Memphis, Martina Stella, Paola Minaccioni",
      "Plot": "When the Italian Premier and his companion find a dead body in his hotel suite, while on a trip to Hungary, they find themselves embroiled in a series of comedic situations as they try to avoid a scandal.",
      "Language": "Italian",
      "Country": "Italy",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTgxMDU0NTg5OF5BMl5BanBnXkFtZTgwNDIxNzA4NjM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "4.2/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "4.2",
      "imdbVotes": "83",
      "imdbID": "tt8775056",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The Last Laugh",
      "Year": "2019",
      "Rated": "N/A",
      "Released": "11 Jan 2019",
      "Runtime": "98 min",
      "Genre": "Comedy",
      "Director": "Greg Pritikin",
      "Writer": "Greg Pritikin",
      "Actors": "Chevy Chase, Richard Dreyfuss, Andie MacDowell, George Wallace",
      "Plot": "When retired talent manager Al Hart is reunited with his first client, Buddy Green, a comic who quit show business 50 years ago, he convinces Buddy to escape their retirement community and hit the road for a cross-country comedy tour.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDg0NzIxNTc1MV5BMl5BanBnXkFtZTgwMzk2MTQxNzM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.8/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "56%"
        },
        {
          "Source": "Metacritic",
          "Value": "31/100"
        }
      ],
      "Metascore": "31",
      "imdbRating": "5.8",
      "imdbVotes": "871",
      "imdbID": "tt7427356",
      "Type": "movie",
      "DVD": "11 Jan 2019",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "The After Party",
      "Year": "2018",
      "Rated": "N/A",
      "Released": "24 Aug 2018",
      "Runtime": "120 min",
      "Genre": "Comedy, Music",
      "Director": "Ian Edelman",
      "Writer": "Ian Edelman",
      "Actors": "Harrison Holzer, Kyle, Jordan Rock, Robbie Dema",
      "Plot": "When an aspiring rapper goes viral for all the wrong reasons, he thinks his career is over. But when his best friend gets them into a wild NYC after party, he gets one more chance to make the impossible happen.",
      "Language": "N/A",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTU1NjgwODUyNV5BMl5BanBnXkFtZTgwOTQ0NTc5NTM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "5.8/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "0%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "5.8",
      "imdbVotes": "2,748",
      "imdbID": "tt3960240",
      "Type": "movie",
      "DVD": "24 Aug 2018",
      "BoxOffice": "N/A",
      "Production": "Netflix",
      "Website": "N/A",
      "Response": "True"
    }
  ]

 */
