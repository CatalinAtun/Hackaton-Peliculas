
/* function getMovies(moviesArray){
    let arr = [];
    for (let i = 0; i<moviesArray.length; i++){    
        fetch('http://www.omdbapi.com/?i='+moviesArray[i].imdbID+'&apikey=f465da65')
        .then(res => res.json())
        .then (data => {
          arr.push(data);
        }) 
    }
    return arr;
  } */
      
  /* function filterData(moviesArray, condition){
    let arr = [];
    for (let i = 0; i<moviesArray.length; i++){    
      fetch('http://www.omdbapi.com/?i='+moviesArray[i].imdbID+'&apikey=f465da65')
      .then(res => res.json())
      .then (data => {      
        if (data.Year === condition){
          arr.push(data);
        } else if ((data.Genre).includes(condition) === true){
          arr.push(data);
        }                        
      }) 
    }
    return arr;
  } */
  
  function randomMovie(moviesArray){
    let result = [];
    let randomMovie = moviesArray[Math.floor(Math.random() * moviesArray.length)];    
    fetch('http://www.omdbapi.com/?i='+randomMovie.imdbID+'&apikey=f465da65')
    .then(res => res.json())
    .then (data => {      
      result.push(data)                           
    })     
    return result;
  } 