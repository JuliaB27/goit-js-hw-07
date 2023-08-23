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

var lightbox = new SimpleLightbox('.gallery a', { 
    captionPosition: 'bottom',
    captionsData: 'alt',
    captionDelay: 250
 });

