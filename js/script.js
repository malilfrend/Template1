const article1 = document.querySelector('.content')
const location1 = document.querySelector('.main__sixcard')
const video1 = document.querySelector('.main__video')


document.addEventListener('click', function (event) {
    event.preventDefault()
    if (event.target.closest('.header__menu_item-location')) {
        setScrollIntoViewLocation()
    }
    if (event.target.closest('.header__menu_item-article')) {
        setScrollIntoViewArticle()
    }
    if (event.target.closest('.header__menu_item-video')) {
        setScrollIntoViewVideo()
    }
    if (event.target.closest('.video__item')) {
        setControlsToVideo()
    }
})

function setScrollIntoViewArticle() {
    article1.scrollIntoView({
        block: 'center',
        inline: 'nearest',
        behavior: 'smooth',
    })    
}
function setScrollIntoViewLocation() {
    location1.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
    })    
}
function setScrollIntoViewVideo() {
    video1.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
    })
}
function setControlsToVideo () {
    const videoItem = document.querySelector('.video__item')
    videoItem.setAttribute('controls', 'controls')
    videoItem.play()
}