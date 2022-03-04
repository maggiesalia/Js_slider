let data = [
    {
        id: 1,
        imageUrl: 'https://wallpapercave.com/wp/wp4847478.jpg',
        url: 'https://www.netflix.com/ge/title/80174608'
    },
    {
        id: 2,
        imageUrl: 'https://wallpapercave.com/wp/wp4598787.jpg',
        url: 'https://www.netflix.com/ge/title/80174608'
    },
    {
        id: 3,
        imageUrl: 'https://images8.alphacoders.com/999/999446.png',
        url: 'https://www.netflix.com/ge/title/80174608'
    }
]

let previous = document.getElementById('arrow-previous-button');
let next = document.getElementById('arrow-next-button');
let sliderContent = document.getElementById('slider-content');
let dotsList = document.getElementsByClassName('dot');


let sliderIndex = 0;

function createAtag(item) {
    let tag = document.createElement('a');
    tag.setAttribute('href', item.url);
    tag.setAttribute('class', 'slide');

    return tag;
}

function createImgtag(item) {
    let tagImage = document.createElement('img');
    tagImage.setAttribute('src',  item.imageUrl);

    return tagImage;
}

function createDots(item) {
    let dots = document.createElement('div');
    dots.setAttribute('class', 'dots');

    data.forEach( (element) => {
        let dotElement = document.createElement('div');
        dotElement.setAttribute('class', 'dot');
        dotElement.setAttribute('data-id', element.id - 1);

        dotElement.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlide();
        }

        dots.appendChild(dotElement);
    });

    console.log(dots);

    return dots;
}

function CurrentDotActive() {
    dotsList[sliderIndex].classList.add('active');
}

function setSlide() {
    sliderContent.innerHTML = ' ';
    let slideItem = createAtag(data[sliderIndex]);
    let imgTag = createImgtag(data[sliderIndex]);
    let dots = createDots();

    slideItem.appendChild(imgTag);

    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);

    CurrentDotActive();

    console.log(slideItem);
}

function arrowleftClick() {
    if (sliderIndex <= 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }

    sliderIndex--;
    setSlide();
}

function arrowRightClick() {
    if (sliderIndex >= data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
    }

    sliderIndex++;
    setSlide();
}

previous.addEventListener('click', arrowleftClick);
next.addEventListener('click', arrowRightClick);


setSlide();
