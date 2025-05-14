import image1 from '../images/image-1.jpg';
import image2 from '../images/image-2.jpg';
import image3 from '../images/image-3.jpg';
import image4 from '../images/image-4.jpg';
import image5 from '../images/image-5.jpg';

export function changeToImage1() {
  document.querySelector('.image').src = image1;
}

export function changeToImage2() {
  document.querySelector('.image').src = image2;
}

export function changeToImage3() {
  document.querySelector('.image').src = image3;
}

export function changeToImage4() {
  document.querySelector('.image').src = image4;
}

export function changeToImage5() {
  document.querySelector('.image').src = image5;
}
