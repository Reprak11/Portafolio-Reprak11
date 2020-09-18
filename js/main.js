window.onload = () => {
    const navMenu = document.getElementById("nav-menu");
    const menuButton = document.getElementById("menu-button")
    menuButton.addEventListener('click', () =>{
        navMenu.classList.toggle('show')
    })

    const example1 = document.getElementById("example-1");
    const info1 = document.getElementById("info-1");
    const example2 = document.getElementById("example-2");
    const info2 = document.getElementById("info-2");
    const example3 = document.getElementById("example-3");
    const info3 = document.getElementById("info-3");
    const example4 = document.getElementById("example-4");
    const info4 = document.getElementById("info-4");
    const example5 = document.getElementById("example-5");
    const info5 = document.getElementById("info-5");

    function removeShow(){
        info1.classList.remove('show-info');
        info2.classList.remove('show-info');
        info3.classList.remove('show-info');
        info4.classList.remove('show-info');
        info5.classList.remove('show-info');
    }

    example1.addEventListener('click',()=>{
        if(info1.classList.contains('show-info')){
            removeShow();
        } else{
            removeShow();
            info1.classList.add('show-info')
        } 
    })

    
    example2.addEventListener('click',()=>{
        if(info2.classList.contains('show-info')){
            removeShow();
        } else{
            removeShow();
            info2.classList.add('show-info')
        }
        
    })

    example3.addEventListener('click',()=>{
    if(info3.classList.contains('show-info')){
                removeShow();
            } else{
                removeShow();
                info3.classList.add('show-info')
            }
        })

    example4.addEventListener('click',()=>{
    if(info4.classList.contains('show-info')){
                removeShow();
            } else{
                removeShow();
                info4.classList.add('show-info')
            }
        })

    example5.addEventListener('click',()=>{
    if(info5.classList.contains('show-info')){
                removeShow();
            } else{
                removeShow();
                info5.classList.add('show-info')
            }
    })

}
