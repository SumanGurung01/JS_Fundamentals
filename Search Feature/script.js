const search = document.querySelector('input') 

search.addEventListener("input",(e)=>{   
    
    const inputText = e.target.value.toLowerCase();

    const list = document.querySelectorAll('li');

    list.forEach((item)=>{

        // if input text is not present in item.textContent.tolowerCase
        if(item.textContent.toLowerCase().indexOf(inputText)==-1)  
        {
            item.style.display="none";
        }
        else
        {
            item.style.display="";
        }
    })
})