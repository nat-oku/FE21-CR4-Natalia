//parsing JSON file
let moviesData = JSON.parse(movies);
//console.log(moviesData);

for (movie in moviesData) {
  document.getElementById('printMovies').innerHTML +=
  `
  <div class="card mb-3 cardWidth alignCenter">
    <div class="row g-0 bg-success">
      <div class="col-md-4 d-flex align-items-center">
        <img src="${moviesData[movie].image}" class="img-thumbnail myImage bg-dark" alt="Movie Image">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${moviesData[movie].movieName}</h5>
          <p class="card-text">${moviesData[movie].description}</p>
          <div class="d-flex justify-content-end" >
            <p class="card-text m-2">Like <i class="fas fa-thumbs-up"></i></p>
            <p class="likeButton m-2">${moviesData[movie].likes}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}