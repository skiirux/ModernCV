
$(document).ready(function(){
    $('#profile__ripple').ripples({
        resolution: 512,
        dropRadius:10
    })
    const bars = document.querySelectorAll('.progress__bar');
    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    })


    //counter
const counters = document.querySelectorAll('.counter')
function runCounter(){
    counters.forEach(counter=>{
        counter.innerText = 0;
        let target = parseInt(counter.dataset.count);

        let countIt = function() {
            let displayedCount = parseInt(counter.innerText);
            let Increment = Math.ceil(target/1000);
            if(displayedCount < target){

                counter.innerText = displayedCount + Increment;
                // console.log(displayedCount)                 // Adjust the delay (in milliseconds) for the animation
                setTimeout(countIt, 20);                        //recursion
            }
            else{
                counter.innerText = target;
            }
        }
        countIt()
    })
}


let counterSection = document.querySelector('.counter__section');
let options = {
    rootMargin: '0px 0px -150px 0px'
}
let done =0;
const sectionObserver = new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting && done!=1){
        // console.log("Intersecting")
        // console.log(entries)
        done =1;
        runCounter();
    }

}, options)
sectionObserver.observe(counterSection);

// image filter

var $wrapper = $('.portfolio__wrapper');

//Initialize Plugin

$wrapper.isotope({
    filter : '*',
    layoutMode : 'masonry',
    animationOptions : {
        duration : 750,
        easing : 'linear'
    }
});

let links = document.querySelectorAll('.tabs a');
links.forEach(link =>{

    let selector = link.dataset.filter;
    link.addEventListener('click', function(e){
        e.preventDefault();

        $wrapper.isotope({
            filter : selector,
            layoutMode : 'masonry',
            animationOptions : {
                duration : 750,
                easing : 'linear'
            }
        });

        

        links.forEach(link =>{
            link.classList.remove('active');
        })
        e.target.classList.add('active');
    })
})

// Maginfy Popup
$('.magnify').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    },
    zoom: {
        enabled : true
    }
})

// Initialize slider
$('.slider').slick({
    arrows: false,
    autoplay: true
})
const print = document.querySelector('.container.inner button');
print.addEventListener('click', function(e){
    e.preventDefault();

    window.print()
})

const downloadCV = document.querySelector('section.about .content .left button');
downloadCV.addEventListener('click', function(){
    var cvUrl = './CV/mohit new resume.pdf'
    var fileName = 'mohit new resume.pdf';

    var a = document.createElement('a');
    a.href = cvUrl;
    a.download = fileName;

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
})
})