const search = document.querySelector('.search-bar i');
const searchBar = document.querySelector('.search-bar input');
const searchInput = document.querySelector('.search-bar .search-input');

let clicked = false;

search.addEventListener("click", ()=>{
    console.log("search");

    if(clicked) {
        searchBar.classList.add('nav-hide');
        searchBar.classList.remove('show-search-bar');
        searchInput.classList.remove("search");
        search.classList.remove("search-color");
        clicked = false;
    } else  {
        searchBar.classList.remove('nav-hide');
        searchBar.classList.add('show-search-bar');
        searchInput.classList.add("search");
        search.classList.add("search-color");
        clicked = true;
    }
})