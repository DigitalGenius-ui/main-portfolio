const toggle = document.querySelector('.fa-stream');
const overFlow = document.querySelector(".overflow");
const times = document.querySelector(".fa-times");
const nav = document.querySelector('nav');
const li = document.querySelectorAll('nav li');

toggle.addEventListener('click',function(){
    nav.classList.add('open');
    overFlow.classList.add("open");
    times.style.visibility = 'visible';
    li.forEach(function(link){
        link.classList.toggle('hide');
    })
})

times.addEventListener('click', function(){
    nav.classList.remove('open');
    overFlow.classList.remove("open");
    times.style.visibility = 'hidden';
    li.forEach(function(link){
        link.classList.toggle('fade');
    })
})

overFlow.addEventListener('click', function(){
    nav.classList.remove('open');
    overFlow.classList.remove("open");
    times.style.visibility = 'hidden';
    li.forEach(function(link){
        link.classList.toggle('hide');
    })
})

li.forEach(function(list){
    list.addEventListener('click',function(){
        nav.classList.remove('open');
        overFlow.classList.remove("open");
        times.style.visibility = 'hidden';
        li.forEach(function(link){
            link.classList.toggle('hide');
        })
    })
})
