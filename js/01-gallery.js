import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".gallery");

const markup = createMarkup(galleryItems)

function createMarkup(array) {
    return array.map((preview, original, description) => {
        return `<li> <img src = "${preview}" alt = "${description}"/>
        </li>`
    }).join('');
}