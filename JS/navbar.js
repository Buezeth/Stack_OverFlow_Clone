const search = document.querySelector('.search-bar i');
const searchBar = document.querySelector('.search-bar input');

search.addEventListener("click", ()=>{
    console.log("search");
    searchBar.classList.remove('nav-hide');
    searchBar.classList.add('show-search-bar');
})