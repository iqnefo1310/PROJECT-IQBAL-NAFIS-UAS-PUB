fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=20294adf51756709c0db49a1d6218100&language=en-US")
.then(Response=>Response.json())
.then(res=>console.log(res.results))