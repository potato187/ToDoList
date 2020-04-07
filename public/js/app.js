const checked = document.querySelectorAll('input.check');

// task checked
const arrChecked = [...checked].map((input) =>{
    input.addEventListener('click', (event) =>{        
        let lastChild = input.parentNode.lastChild;
        if(event.target.checked){

        lastChild.classList.remove('not-checked');
        lastChild.classList.add('checked');
        }else{

        lastChild.classList.remove('checked');
        lastChild.classList.add('not-checked');
        }
    });
});


[...document.querySelectorAll('button.btn-remove')].map((btn) =>{
    btn.addEventListener('click', (event) =>{
        const id = event.target.parentNode.id;
        event.target.parentNode.parentNode.classList.add('task-remove');
        fetch(`/api/delete/${id}`, {
            method: 'DELETE',
            headers: {
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        });
    });
});


const btnClear = document.querySelector('a.btn-clear');
btnClear.addEventListener('click', () =>{
    fetch('/api/delete', {
        method : 'DELETE',
        headers:{                
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"}
    });
});