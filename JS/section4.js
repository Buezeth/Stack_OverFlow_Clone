const tools = document.querySelectorAll('.tool');

tools.forEach(element => {
    element.addEventListener('click', ()=>{
        console.log(element);
        
        tools.forEach(item => {
            item.classList.remove('selected-tool');
            item.querySelector('p').classList.add('hidden-text');
            item.querySelector('svg').classList.remove('svg-fill');
        })
        
        element.classList.add('selected-tool');
        element.querySelector('p').classList.remove('hidden-text');
        element.querySelector('svg').classList.add('svg-fill');
        
    })
});