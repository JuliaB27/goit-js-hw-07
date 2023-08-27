import { galleryItems } from './gallery-items.js';




const gallery = document.querySelector('.gallery');
const createMarkup = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
).join('');

gallery.insertAdjacentHTML('beforeend', createMarkup);



gallery.addEventListener('click', handlerClick);

function handlerClick(evt) {
  evt.preventDefault();
    if(evt.target.classList.contains("gallery__image")) {
        const imageUrl = evt.target.dataset.source;
        openModal(imageUrl);
    }
};

function openModal(imageUrl) {
    const instance = basicLightbox.create(
        `<img
        src="${imageUrl}"
      />`
    );
    instance.show();

}