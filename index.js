let changes = document.querySelectorAll('.checked')
let button1 = document.querySelector('input[id="v1"]');
let button2 = document.querySelector('input[id="v2"]');
let button3 = document.querySelector('input[id="v3"]');
button1.addEventListener('change',()=>{
    if(button1.checked){
        changes.forEach((change)=>{
            change.classList.toggle("gradient-background")
        })
    }
})
button2.addEventListener('change',()=>{
    if(button1.checked){
        changes.forEach((change)=>{
            change.classList.toggle("gradient-background-clip")
        })
    }
})
button3.addEventListener('change',()=>{
    if(button1.checked){
        changes.forEach((change)=>{
            change.classList.toggle("gradient-text")
        })
    }
})