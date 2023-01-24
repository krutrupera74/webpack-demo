import Sharingan from './sharingan-image.png';
import './sharingan-image.scss';

class SharinganImage {
    render(pageName) {
        const h1 = document.createElement('h1');
        const body = document.querySelector('body');

        h1.innerHTML = `${pageName}`;
        body.appendChild(h1);
        const img = document.createElement('img');
        img.src = Sharingan;
        img.alt = 'Sharingan';
        img.classList.add('sharingan-image');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);
    }
}

export default SharinganImage;