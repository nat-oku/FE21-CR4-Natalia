//parsing JSON file
let moviesData = JSON.parse(movies);
//console.log(moviesData);

for (let movie = 0 ; movie < moviesData.length; movie++) {
  document.getElementById('printMovies').innerHTML +=

  //dynamic section of the website (displaying movies)
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
            <button class="m-2 clickButton" id="likeButton">${moviesData[movie].likes}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
  //create a new array to store the click counters for each button
  let btns = [...document.getElementsByClassName(`clickButton`)], //*see comment below
  btnsClicksCountArray = new Array(btns.length);

  //iterate through each buttons and apply a "click" event for each
    //btn: the current button; index: i in the array (btns).
  btns.forEach((btn, index) => {
    btnsClicksCountArray[index] = `${moviesData[index].likes}`; //start the second array (btnsClicksCountArray) at the index: 0 
    btn.addEventListener('click', () => btn.innerHTML = ++btnsClicksCountArray[index]); //add event listener for "click" and increment the value stored in btnsClicksCountArray with its index i; and write it in the button
  });
}



/*   this solution works!!!!!
let btns = [...document.getElementsByClassName(`clickButton`)], //*see comment below
  btnsClicksCountArray = new Array(btns.length);

  //iterate through each buttons and apply a "click" event for each
    //btn: the current button; index: i in the array (btns).
  btns.forEach((btn, index) => {
    btnsClicksCountArray[index] = `${like}`; //start the second array (btnsClicksCountArray) at the index: 0 
    btn.addEventListener('click', () => btn.innerHTML = ++btnsClicksCountArray[index]); //add event listener for "click" and increment the value stored in btnsClicksCountArray with its index i; and write it in the button
  });
   */



//* "...document." The three dots in JS are spread/rest operator. This  syntax allows an expression to be expanded in places where multiple arguments are expected. The rest parameter syntax is used for functions with variable number of arguments. The spread rest operator for arrays was introduced in ES6.




//SORT BUTTON - sort movies according to their current like property status (e.g. show on the top of the list the movie whose like property is currently the highest one).

