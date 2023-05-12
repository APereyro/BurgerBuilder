const deleteBurger = async (e) => {
    const {dataset} = e.target;
    console.log("This is the:", dataset);
    try {
        console.log("deleted");
        const response = await fetch(`/api/recipe/${dataset.id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        
    }
}

const deleteButton = document.getElementById('delete')
deleteButton.addEventListener('click',deleteBurger)