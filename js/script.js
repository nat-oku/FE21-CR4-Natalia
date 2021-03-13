//parsing JSON file
let moviesData = JSON.parse(movies);
//console.log(moviesData);

for (let movie = 0 ; movie < moviesData.length; movie++) {
  document.getElementById('printMovies').innerHTML +=

  //dynamic section of the website (displaying movies)
  `
  <div class="card mb-3 cardWidth alignCenter shadow rounded bgColor-2 d-flex justify-content-between">
    <div class="row g-0 ">
      <div class="col-md-4 d-flex align-items-center p-1">
        <img src="${moviesData[movie].image}" class="img-thumbnail myImage bg-dark" alt="Movie Image">
      </div>
      <div class="col-md-8 d-flex align-items-center">
        <div class="card-body m-1">
          <h5 class="card-title font-2 textColor-4">${moviesData[movie].movieName}</h5>
          <p class="card-text font-3 textColor-1">${moviesData[movie].description}</p>
          <div class="d-flex justify-content-end align-items-center" >
            <p class="card-text m-2 font-3 textColor-1">Like <i class="fas fa-thumbs-up"></i></p>
            <button class="m-2 clickButton btn buttonStyles textColor-2 fw-bold" id="likeButton">${moviesData[movie].likes}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}

  //LIKE BUTTON
//create a new array to store the click counters for each button
let btns = [...document.getElementsByClassName(`clickButton`)]; //*see comment below
btnsClicksCountArray = new Array(btns.length); // saves the new click count in an array

//iterate through each buttons and apply a "click" event for each
btns.forEach((btn, index) => {
  btnsClicksCountArray[index] = `${moviesData[index].likes}`; //start the second array (btnsClicksCountArray) at the index: 0 
  btn.addEventListener('click', () => btn.innerHTML = ++btnsClicksCountArray[index]); //add event listener for "click" and increment the value stored in btnsClicksCountArray with its index; and write it in the button
});
console.log(btnsClicksCountArray)



  //SORT BUTTON
// function - change the color of button's background

function clickButton() {
  document.getElementById("sortButton").style.background = "#F5C518";
  document.getElementById("sortButton").style.color = "#2A2B2A";
  //document.getElementsByClassName("movieListItem")[0].style.color = "yellow";

  return btnsClicksCountArray.sort(function sortList(a,b) { //sort list by numeric values - console.log to check
    return b - a;
  })
}
document.getElementById('sortButton').addEventListener('click', clickButton, false);


