import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");

const markup = createMarkup(galleryItems)

container.insertAdjacentHTML('beforeend', markup);

container.addEventListener('click', handleImageClick);

function createMarkup(array) {
    return array.map(({ preview, original, description }) => {
        return  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join('');
}

function handleImageClick(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
        return;
    }
    
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt = "${event.target.alt}">
`)

    instance.show();

document.addEventListener('keydown', handleKeyClick);

function handleKeyClick(event) {
    if (event.code === "Escape") {
        instance.close();
        document.removeEventListener('keydown', handleKeyClick);
    }
}

};

