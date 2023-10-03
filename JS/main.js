
const fotoPic = document.querySelector(".fotoPic");
const playMovie = document.querySelector(".fa-circle-play");

fotoPic.addEventListener("mouseover", showPlayMovie);

function showPlayMovie(){
    playMovie.style.opacity = "1";
}

fotoPic.addEventListener("mouseout", hidePlayMovie);

function hidePlayMovie(){
    playMovie.style.opacity = "0";
}

