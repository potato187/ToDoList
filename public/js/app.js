const checked = document.querySelectorAll('input.check');

// task checked
const arrChecked = [...checked].map((input) =>{
    input.addEventListener('click', (event) =>{        
        let lastChild = input.parentNode.lastChild;
        if(event.target.checked){
        lastChild.style.textDecoration  = "line-through";
        lastChild.style.color = "#ff0000"
        }else{
            lastChild.style.textDecoration  = "none";
            lastChild.style.color = "#2F4F4F" 
        }
    });
});