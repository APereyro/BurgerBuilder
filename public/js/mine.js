const updateBurger = async (e) => {
    const {dataset} = e.target;
    try {
    console.log(dataset.id);
        document.location.replace(`/update/${dataset.id}`)
    } catch (error) {
        
    }
}

const updates = document.querySelectorAll('button[data-id]')
// .addEventListener('click', updateBurger)
console.log(updates);
updates.forEach(update => {
    update.addEventListener('click', updateBurger);
});
