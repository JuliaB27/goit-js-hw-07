import { galleryItems } from './gallery-items.js';




const gallery = document.querySelector('.gallery');
const createMarkup = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item">
  <a class="gallery_link" href="${original}">
    <img
      class="gallery_image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
).join('');

gallery.insertAdjacentHTML('beforeend', createMarkup);

const links = document.querySelectorAll('.gallery_image');
links.forEach((link) => {
    link.addEventListener('click', (event) => event.preventDefault())
});

gallery.addEventListener('click', handlerClick);

function handlerClick(evt) {
    if(evt.target.classList.contains("gallery_image")) {
        const imageUrl = evt.target.dataset.sourse;
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