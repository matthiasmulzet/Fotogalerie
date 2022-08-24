let images = ['img/img1.JPG', 'img/img2.JPG', 'img/img3.JPG', 'img/img4.JPG',
    'img/img5.JPG', 'img/img6.JPG', 'img/img7.JPG', 'img/img8.JPG', 'img/img9.JPG',
    'img/img10.JPG', 'img/img11.JPG', 'img/img12.JPG', 'img/img13.JPG', 'img/img14.JPG',
    'img/img15.JPG', 'img/img16.JPG', 'img/img17.JPG', 'img/img18.JPG', 'img/img19.JPG',
    'img/img20.JPG', 'img/img21.JPG', 'img/img22.JPG', 'img/img23.JPG', 'img/img24.JPG',
    'img/img25.JPG', 'img/img26.JPG', 'img/img27.JPG', 'img/img28.JPG', 'img/img29.JPG',
    'img/img30.JPG', 'img/img31.JPG', 'img/img32.JPG', 'img/img33.JPG',]

let currentImage;


//this function load all pictures an showed them on the page
function loadPictures() {
    document.getElementById('pictures').innerHTML = '';

    for (i = 0; i < images.length; i++) {
        const img = images[i];

        document.getElementById('pictures').innerHTML += /*html*/ `
            <img onclick='showPictureBig(${i})' id='picture' src="${img}" alt="images">`;
    }
}


//if you click on a Picture this function is running. The header an all Pictures 
//disappear and the Picture you clicked on gets big. Then you can skip forward to see
//the next Picture or skip back to see the previous Picture
function showPictureBig(i) {
    const img = images[i];
    currentImage = i;

    headerAndPicturesDisappear();

    document.getElementById('body').innerHTML = /*html*/ `
    <div id="black-side" class="whole-side-black">
        <img onclick="closeBlackSide()" id="close-image" src="img/close.svg" alt="close-image">
        <img onclick="previousPicture()" id="arrow-left" src="img/chevron-left-solid.svg" alt="arrow-left">
        <div id="container-with-big-image" class="container-big-image">
            <img class="image-on-black-background" src="${img}">
        </div>
        <img onclick="nextPicture()" id="arrow-right" src="img/chevron-right-solid.svg" alt="arrow-rigth">
    </div>`;
}



//the big Picture gets closed and the header an all Pictures appears
function closeBlackSide() {
    document.getElementById('body').innerHTML = '';

    bodyAppears();

    loadPictures();
}


//this function generates the header
function bodyAppears() {
    document.getElementById('body').innerHTML =  /*html*/`
    <div id="whole-side">
        <div id="header-main" class="header">
            <span id="header-text">Mallorca 2022</span>
            <div id="header-img">
                <img class="spain-flag" src="img/spain-flag.png" alt="spain-flag">
            </div>
        </div>

        <div id="pictures" class="pictures-container">

        </div>

    </div>`;
}


//this function deletes the header and the pictures from the side
function headerAndPicturesDisappear() {
    document.getElementById('header-text').classList.add('d-none');
    document.getElementById('header-img').classList.add('d-none');
    document.getElementById('header-main').classList.remove('header');

    document.getElementById('pictures').classList.add('d-none');
    document.getElementById('pictures').classList.remove('pictures-container');
}


//if the Picture is big and you click on the left arrow, you get to the previous Picture
function previousPicture() {
    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length-1;
    }

    let imgMinusOne = images[currentImage];

    document.getElementById('container-with-big-image').innerHTML = /*html*/ `
    <img class="image-on-black-background" src="${imgMinusOne}"> `;
}


//If the Picture is big and you click on the right arrow, you get to the next picture
function nextPicture() {
    currentImage++;
    
    if (currentImage == images.length) {
        currentImage = 0;
    }

    let imgPlusOne = images[currentImage];

    document.getElementById('container-with-big-image').innerHTML = /*html*/`
    <img class="image-on-black-background" src="${imgPlusOne}">
    `;
}




