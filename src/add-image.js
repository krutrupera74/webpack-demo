import sharingan from './Sharingan_Itachi.png';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Sharingan';
    img.width = 300;
    img.src = sharingan;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage();