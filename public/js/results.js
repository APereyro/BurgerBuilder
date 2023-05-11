const container = document.getElementById('resultsContainer');



const findFavorite = (e)=>{

 let selectedBurger = e.target.getAttribute('name');
 console.log(selectedBurger);
};

container.addEventListener('click',findFavorite);