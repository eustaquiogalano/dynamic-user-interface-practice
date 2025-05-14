import {
  changeToImage1,
  changeToImage2,
  changeToImage3,
  changeToImage4,
  changeToImage5,
} from './image-navigator';

export function attachNavButtonClickEvent() {
  // Get a reference of menu button
  document
    .querySelector('#nav-toggler-button')
    // Then add a click event to toggle the toggle-display class
    .addEventListener('click', () => {
      document.querySelector('.nav-main').classList.toggle('toggle-display');
    });
}

export function attachCircleButtonClickEvent() {
  document.querySelector('#circle-1').addEventListener('click', changeToImage1);
  document.querySelector('#circle-2').addEventListener('click', changeToImage2);
  document.querySelector('#circle-3').addEventListener('click', changeToImage3);
  document.querySelector('#circle-4').addEventListener('click', changeToImage4);
  document.querySelector('#circle-5').addEventListener('click', changeToImage5);
}
