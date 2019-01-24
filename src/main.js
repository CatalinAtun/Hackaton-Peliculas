const containerRoot = document.getElementById('root');
const selectGenre = document.getElementById('genre');
const selectCountry = document.getElementById('country');

const chileanMovies = [
    {title:"Limite", imdbID:"tt0022080"},
    {title:"María Candelaria", imdbID:"tt0037054"},
    {title:"El fugitivo", imdbID:"tt0039402"},
    {title:"Los olvidados", imdbID:"tt0042804"},
    {title:"Él", imdbID:"tt0045361"},
    {title:"Ensayo de un crimen", imdbID:"tt0048037"},
    {title:"Nazarín", imdbID:"tt0051983"},
    {title:"Orfeo negro", imdbID:"tt0053146"},
    {title:"El ángel exterminador", imdbID:"tt0056732"},
    {title:"El pagador de promesas", imdbID:"tt0056322"},
    {title:"Vidas Secas", imdbID:"tt0057654"},
    {title:"Soy Cuba", imdbID:"tt0058604"},
    {title:"Dios y el diablo en la tierra del sol", imdbID:"tt0058006"},
    {title:"Los fusiles", imdbID:"tt0058122"},
    {title:"Simón del desierto", imdbID:"tt0059719"},
    {title:"La muerte de un burócrata", imdbID:"tt0060722"},
    {title:"Tierra en trance", imdbID:"tt0062352"},
    {title:"Memorias del subdesarrollo", imdbID:"tt0063291"},
    {title:"Lucía", imdbID:"tt0064609"},
    {title:"La hora de los hornos: Notas y testimonios sobre el neocolonialismo, la violencia y la liberación", imdbID:"tt0063084"},
    {title:"O Bandido da Luz Vermelha", imdbID:"tt0144782"},
    {title:"Por primera vez", imdbID:"tt0405251"},
    {title:"Antonio das Mortes", imdbID:"tt0064256"},
    {title:"El Topo", imdbID:"tt0067866"},
    {title:"La montaña sagrada", imdbID:"tt0071615"},
    {title:"La batalla de Chile: La lucha de un pueblo sin armas - Primera parte: La insurrección de la burguesía", imdbID:"tt0072685"},
    {title:"Llueve sobre Santiago", imdbID:"tt0073149"},
    {title:"La última cena", imdbID:"tt0075363"},
    {title:"Bye Bye Brasil", imdbID:"tt0080482"},
    {title:"A Idade da Terra", imdbID:"tt0080910"},
    {title:"Pixote, la ley del más débil", imdbID:"tt0082912"},
    {title:"Eles Não Usam Black-Tie", imdbID:"tt0082317"},
    {title:"Rue cases nègres", imdbID:"tt0086213"},
    {title:"Cóndores no entierran todos los días", imdbID:"tt0195624"},
    {title:"Cabra Marcado Para Morrer", imdbID:"tt0134402"},
    {title:"El exilio de Gardel: Tangos", imdbID:"tt0090125"},
    {title:"El beso de la mujer araña", imdbID:"tt0089424"},
    {title:"La historia oficial", imdbID:"tt0089276"},
    {title:"A Hora da Estrela", imdbID:"tt0089297"},
    {title:"Sur", imdbID:"tt0094076"},
    {title:"Cien niños esperando un tren", imdbID:"tt0144829"},
    {title:"Santa Sangre", imdbID:"tt0098253"},
    {title:"Jugando en los campos del Señor", imdbID:"tt0101373"},
    {title:"Como agua para chocolate", imdbID:"tt0103994"},
    {title:"Un paseo por las nubes", imdbID:"tt0114887"},
    {title:"Estación central de Brasil", imdbID:"tt0140888"},
    {title:"Buena Vista Social Club", imdbID:"tt0186508"},
    {title:"Amores perros", imdbID:"tt0245712"},
    {title:"Nueve reinas", imdbID:"tt0247586"},
    {title:"Rogelio", imdbID:"tt0439285"},
    {title:"Y tu mamá también", imdbID:"tt0245574"},
    {title:"El espinazo del diablo", imdbID:"tt0256009"},
    {title:"La ciénaga", imdbID:"tt0240419"},
    {title:"Ciudad de Dios ", imdbID:"tt0317248"},
    {title:"Japón", imdbID:"tt0322824"},
    {title:"El crimen del padre Amaro", imdbID:"tt0313196"},
    {title:"Whisky", imdbID:"tt0331370"},
    {title:"María, llena eres de gracia", imdbID:"tt0390221"},
    {title:"Diarios de motocicleta", imdbID:"tt0318462"},
    {title:"Salvador Allende", imdbID:"tt0418129"},
    {title:"Batalla en el cielo", imdbID:"tt0387055"},
    {title:"Brasileirinho - Grandes Encontros do Choro", imdbID:"tt0456321"},
    {title:"El violín", imdbID:"tt0451966"},
    {title:"El laberinto del fauno", imdbID:"tt0457430"},
    {title:"Babel", imdbID:"tt0449467"},
    {title:" Tropa de élite", imdbID:"tt0861739"},
    {title:"PVC-1", imdbID:"tt1031951"},
    {title:"La antena", imdbID:"tt0454065"},
    {title:"Luz silenciosa ", imdbID:"tt0841925"},
    {title:"Leonera", imdbID:"tt1022606"},
    {title:"BirdWatchers - La terra degli uomini rossi", imdbID:"tt1054674"},
    {title:"La mujer rubia", imdbID:"tt1221141"},
    {title:"Historias extraordinarias", imdbID:"tt1225831"},
    {title:"El secreto de sus ojos", imdbID:"tt1305806"},
    {title:"La teta asustada", imdbID:"tt1206488"},
    {title:"Biutiful ", imdbID:"tt1164999"},
    {title:"Post Mortem", imdbID:"tt1714886"},
    {title:"Nostalgia de la luz ", imdbID:"tt1556190"},
    {title:"Las acacias", imdbID:"tt1754078"},
    {title:"Un cuento chino", imdbID:"tt1705786"},
    {title:"Medianeras", imdbID:"tt1235841"},
    {title:"Post Tenebras Lux", imdbID:"tt1754367"},
    {title:"Después de Lucía", imdbID:"tt2368749"},
    {title:"No", imdbID:"tt2059255"},
    {title:"La sirga", imdbID:"tt2191612"},
    {title:"Gloria", imdbID:"tt2425486"},
    {title:"La danza de la realidad", imdbID:"tt2301592"},
    {title:"Relatos salvajes", imdbID:"tt3011894"},
    {title:"La sal de la Tierra", imdbID:"tt3674140"},
    {title:"El Clan", imdbID:"tt4411504"},
    {title:"El abrazo de la serpiente", imdbID:"tt4285496"},
    {title:"Una segunda madre", imdbID:"tt3742378"},
    {title:"El botón de nácar", imdbID:"tt4377864"},
    {title:"El Club", imdbID:"tt4375438"},
    {title:"Jackie", imdbID:"tt1619029"},
    {title:"Neruda", imdbID:"tt4698584"},
    {title:"El ciudadano ilustre", imdbID:"tt4562518"},
    {title:"Doña Clara", imdbID:"tt5221584"},
    {title:"Una Mujer Fantástica", imdbID:"tt5639354"},
]

function sortData(data, sortBy, sortOrder) { 
    /* se utiliza metodo sort() aprendido aquí https://www.w3schools.com/js/js_array_sort.asp para números y strings */
    /* lo siguiente ordena según valor numérico, dividiendose en ascendente(true) y descendente(false) */
    if (typeof data[0][sortBy] === "number") {
      if (sortOrder === true){
        return data.sort(function(a, b){return a[sortBy] - b[sortBy]});
      } else if (sortOrder == false){
        return data.sort(function(a, b){return b[sortBy] - a[sortBy]});
      } 
    /* lo siguiente ordena según valor string, dividiendose en ascendente(true) y descendente(false) */
    } else if (typeof data[0][sortBy] === "string") {    
      if (sortOrder === true){
        return data.sort(function(a, b){ 
          let x = a[sortBy].toLowerCase();
          let y = b[sortBy].toLowerCase();       
          if (x < y) {
            return -1;
          } if (x > y) {
            return 1;
          } else {
            return 0;
          }
        });
      } else if (sortOrder == false){
        return data.sort(function(a, b){ 
          let x = a[sortBy].toLowerCase();
          let y = b[sortBy].toLowerCase();       
          if (x < y) {
            return 1;
          } if (x > y) {
            return -1;
          } else {
            return 0;
          }
        }); 
      }  
    }
  }



  let moviesArray = chileanMovies;

    
  containerRoot.innerHTML = ""; 
  arrTotal = [];  
  for (let i = 0; i<moviesArray.length; i++){    
      fetch('https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?i='+moviesArray[i].imdbID+'&apikey=a29c249d')
      .then(res => res.json())
      .then (data => {
        arrTotal.push(data)  
        containerRoot.innerHTML +=`<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
        <div class="card" style="width: 18rem;">
        <img src="${data.Poster}" id="img2" class="img-fluid" alt="poster">
        <div class="card-body">
        <h3 class="card-title">${data.Title}</h3>
        <p class="card-subtitle">${data.Country}</p>
        <p class="card-subtitle">${data.Genre}</p>
        <p class="card-subtitle">${data.Year}</p>
        </div>
        </div>
        </div>`
      }) 
  }  

document.getElementById("all").addEventListener('click', () => {
  containerRoot.innerHTML = ""; 
  arrTotal = [];  
  for (let i = 0; i<moviesArray.length; i++){    
      fetch('https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?i='+moviesArray[i].imdbID+'&apikey=a29c249d')
      .then(res => res.json())
      .then (data => {
        arrTotal.push(data)  
        containerRoot.innerHTML +=`<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
        <div class="card" style="width: 18rem;">
        <img src="${data.Poster}" id="img2" class="img-fluid" alt="poster">
        <div class="card-body">
        <h3 class="card-title">${data.Title}</h3>
        <p class="card-subtitle">${data.Country}</p>
        <p class="card-subtitle">${data.Genre}</p>
        <p class="card-subtitle">${data.Year}</p>
        </div>
        </div>
        </div>`
      }) 
  } 
})



selectGenre.addEventListener('change', () => {
    let arr = []
    containerRoot.innerHTML = ""; 
    let condition = selectGenre.options[selectGenre.selectedIndex].text;
    let moviesArray = chileanMovies;
    for (let i = 0; i<moviesArray.length; i++){    
        fetch('https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?i='+moviesArray[i].imdbID+'&apikey=a29c249d')
        .then(res => res.json())
        .then (data => {      
          if ((data.Genre).includes(condition) === true){
              arr.push(data);
              containerRoot.innerHTML += `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="card" style="width: 18rem;">
              <img src="${data.Poster}" id="img2" class="img-fluid" alt="poster">
              <div class="card-body">
              <h3 class="card-title">${data.Title}</h3>
              <p class="card-subtitle">${data.Country}</p>
              <p class="card-subtitle">${data.Genre}</p>
        <p class="card-subtitle">${data.Year}</p>
              </div>
              </div>
              </div>`
            }                        
        }) 
    } 
})
  
selectCountry.addEventListener('change', () => {
    containerRoot.innerHTML = ""; 
    let condition = selectCountry.options[selectCountry.selectedIndex].text;
    let moviesArray = chileanMovies;
    for (let i = 0; i<moviesArray.length; i++){    
        fetch('https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?i='+moviesArray[i].imdbID+'&apikey=a29c249d')
        .then(res => res.json())
        .then (data => {      
          if ((data.Country).includes(condition) === true){
              containerRoot.innerHTML += `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="card" style="width: 18rem;">
              <img src="${data.Poster}" id="img2" class="img-fluid" alt="poster">
              <div class="card-body">
              <h3 class="card-title">${data.Title}</h3>
              <p class="card-subtitle">${data.Country}</p>
              <p class="card-subtitle">${data.Genre}</p>
        <p class="card-subtitle">${data.Year}</p>
              </div>
              </div>
              </div>`
            }                        
        }) 
    } 
})

document.getElementById("random").addEventListener("click", function(){
    containerRoot.innerHTML = ""; 
    let moviesArray = chileanMovies;
    let randomMovie = moviesArray[Math.floor(Math.random() * moviesArray.length)];    
    fetch('https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?i='+randomMovie.imdbID+'&apikey=a29c249d')
    .then(res => res.json())
    .then (data => {   
        containerRoot.innerHTML += `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
        <div class="card" style="width: 18rem;">
        <img src="${data.Poster}" id="img2" class="img-fluid" alt="poster">
        <div class="card-body">
        <h3 class="card-title">${data.Title}</h3>
        <p class="card-subtitle">${data.Country}</p>
        <p class="card-subtitle">${data.Genre}</p>
        <p class="card-subtitle">${data.Year}</p>
        </div>
        </div>
        </div>`
  })
})

