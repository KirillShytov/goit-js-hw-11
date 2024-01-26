import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42038034-2f13ad7c323f856cf793448ff';

const container = document.querySelector('.gallery');
const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const startBtn = document.querySelector('.search-button');
const loader = document.querySelector('.loader');

function createMarkup(arr) {
  return arr.map(
    ({ webformatURL, largeImage, URLtags, likesviews, comments, downloads }) =>
      ``
  );
}
