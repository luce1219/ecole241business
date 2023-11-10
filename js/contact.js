let over = document.getElementById('over');
let croix = document.getElementById('croix');
let contact = document.getElementById('contact')

over.addEventListener('click', (e) => {
    if(e.target == over){
        setTimeout(() => {
            over.style.display = 'none'
        }, 500)
        
    }
})

croix.onclick = () => {
    over.style.display = 'none';
}

contact.onclick = () => {
    over.style.display ='flex'
}