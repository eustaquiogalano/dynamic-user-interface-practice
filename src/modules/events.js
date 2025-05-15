import { arrowButtonNavigator, circleButtonNavigator } from './image-navigator';

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
  document
    .querySelector('#circle-1')
    .addEventListener('click', circleButtonNavigator.changeToImage1);
  document
    .querySelector('#circle-2')
    .addEventListener('click', circleButtonNavigator.changeToImage2);
  document
    .querySelector('#circle-3')
    .addEventListener('click', circleButtonNavigator.changeToImage3);
  document
    .querySelector('#circle-4')
    .addEventListener('click', circleButtonNavigator.changeToImage4);
  document
    .querySelector('#circle-5')
    .addEventListener('click', circleButtonNavigator.changeToImage5);
}

export function attachArrowButtonClickEvent() {
  document
    .querySelector('#left-arrow')
    .addEventListener('click', arrowButtonNavigator.moveImageToLeft);

  document
    .querySelector('#right-arrow')
    .addEventListener('click', arrowButtonNavigator.moveImageToRight);
}
