function videohover(){
    let video = Array.from(document.querySelectorAll('.myvideo'))
    let card = Array.from(document.querySelectorAll('.card'))
    card.forEach((e,index)=>{
        e.addEventListener('mouseenter',()=>{video[index].play()})
        e.addEventListener('mouseleave',()=>{video[index].pause() 
            video[index].load()})
    })}
function hamburgereffect() {
    let flag = 0
    let hamburger = document.querySelector('.hamburger');
    let pbox = document.querySelector('.box')
    let box = document.querySelector('.effect');
    let effect2 = document.querySelector('.effect2');
    hamburger.addEventListener('click', () => {
        if(flag==0){
            effect2.style.display='none'
            pbox.style.width='5%'  // Adjust the width of the box
            box.style.display = 'block' 
            let list = Array.from(box.getElementsByTagName('li'));
            list.forEach((e) => {
                e.style.display = 'flex';
                e.style.flexDirection = 'column';
                e.style.fontSize='10px'
                e.style.fontWeight=400
            });
        flag=1
        }else{
            effect2.style.display ='block'
            pbox.style.width='15%'
            box.style.display = 'none' 
            flag=0
        }
    })
}
function videoplayer(){
    
}
videohover()
hamburgereffect()
