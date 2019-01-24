const containerRoot = document.getElementById('root');
const selectGenre = document.getElementById('genre');
const selectYear = document.getElementById('year');


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

function getMovies(moviesArray){
    containerRoot.innerHTML = "";   
    for (let i = 0; i<moviesArray.length; i++){    
        fetch('http://www.omdbapi.com/?i='+moviesArray[i].imdbID+'&apikey=f465da65')
        .then(res => res.json())
        .then (data => {
          containerRoot.innerHTML += `
          <div>
              <div class="card">
                  <div class="box">
                      <div class="img">
                          <img src="${data.Poster}">
                      </div>
                      <h2>${data.Title}</h2>
                  </div>
              </div>
          </div>`
        }) 
    }  
}

getMovies(netflixOriginals);



selectGenre.addEventListener('change', () => {
    containerRoot.innerHTML = ""; 
    let condition = selectGenre.options[selectGenre.selectedIndex].text;
    let moviesArray = netflixOriginals;
    for (let i = 0; i<moviesArray.length; i++){    
        fetch('http://www.omdbapi.com/?i='+moviesArray[i].imdbID+'&apikey=f465da65')
        .then(res => res.json())
        .then (data => {      
          if (data.Year === condition ||  (data.Genre).includes(condition) === true){
              containerRoot.innerHTML += `
              <div>
                  <div class="card">
                      <div class="box">
                          <div class="img">
                              <img src="${data.Poster}">
                          </div>
                          <h2>${data.Title}</h2>
                      </div>
                  </div>
              </div>`
            }                        
        }) 
    } 
})
  
selectYear.addEventListener('change', () => {
    containerRoot.innerHTML = ""; 
    let condition = selectYear.options[selectYear.selectedIndex].text;
    let moviesArray = netflixOriginals;
    for (let i = 0; i<moviesArray.length; i++){    
        fetch('http://www.omdbapi.com/?i='+moviesArray[i].imdbID+'&apikey=f465da65')
        .then(res => res.json())
        .then (data => {      
          if (data.Year === condition ||  (data.Genre).includes(condition) === true){
              containerRoot.innerHTML += `
              <div>
                  <div class="card">
                      <div class="box">
                          <div class="img">
                              <img src="${data.Poster}">
                          </div>
                          <h2>${data.Title}</h2>
                      </div>
                  </div>
              </div>`
            }                        
        }) 
    } 
})

 
