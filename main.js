const galleries = [
    {
        id: 1,
        src1: '/img/rose-1.jpg',
        src2: '/img/rose-2.jpg',
        src3: '/img/rose-3.jpg' 
    },
    {
        id: 2,
        src1: '/img/tulip-1.jpg',
        src2: '/img/tulip-2.jpg',
        src3: '/img/tulip-3.jpg' 
    },
    {
        id: 3,
        src1: '/img/sunflower-1.jpg',
        src2: '/img/sunflower-2.jpg',
        src3: '/img/sunflower-3.jpg' 
    }
];

let fImage = document.querySelector('#first-img');
let sImage = document.querySelector('#second-img');
let tImage = document.querySelector('#third-img');

let roses = document.querySelector('.roses')
let tulips = document.querySelector('.tulips')
let sunflowers = document.querySelector('.sunflowers')

const corpadrao = '#92E3A9'
const corselecionado = '#A2F0B8'


const ulist = document.querySelector('#flower-select');

ulist.addEventListener('click', showEvent)

function showEvent(e){
    if(e.target.id === 'roses'){
        e.target.style.backgroundColor = corselecionado;
        tulips.style.backgroundColor = corpadrao
        sunflowers.style.backgroundColor = corpadrao
        fImage.style.backgroundImage = `url(${galleries[0].src1})`
        sImage.style.backgroundImage = `url(${galleries[0].src2})`
        tImage.style.backgroundImage = `url(${galleries[0].src3})`
    }
    else if(e.target.id === 'tulips'){
        e.target.style.backgroundColor = corselecionado;
        roses.style.backgroundColor = corpadrao
        sunflowers.style.backgroundColor = corpadrao
        fImage.style.backgroundImage = `url(${galleries[1].src1})`
        sImage.style.backgroundImage = `url(${galleries[1].src2})`
        tImage.style.backgroundImage = `url(${galleries[1].src3})`
    }
    else if(e.target.id === 'sunflowers'){
        e.target.style.backgroundColor = corselecionado;
        tulips.style.backgroundColor = corpadrao
        roses.style.backgroundColor = corpadrao
        fImage.style.backgroundImage = `url(${galleries[2].src1})`
        sImage.style.backgroundImage = `url(${galleries[2].src2})`
        tImage.style.backgroundImage = `url(${galleries[2].src3})`
    }
}