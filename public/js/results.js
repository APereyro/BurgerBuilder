const container = document.getElementById('resultsContainer');

console.log('connected');

const findFavorite = async (e)=>{
    console.log('clicking')
 let selectedBurger = e.target.getAttribute('name');
 console.log(selectedBurger);
 if(selectedBurger){
    const response = await fetch("api/users/favorite",{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({"burgerId":selectedBurger})
    });
    console.log(response);
 }


   
};

container.addEventListener('click',findFavorite);