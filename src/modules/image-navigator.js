import image1 from '../images/image-1.jpg';
import image2 from '../images/image-2.jpg';
import image3 from '../images/image-3.jpg';
import image4 from '../images/image-4.jpg';
import image5 from '../images/image-5.jpg';

const circleButtonNavigator = {
  changeToImage1() {
    document.querySelector('.image').src = image1;
  },
  changeToImage2() {
    document.querySelector('.image').src = image2;
  },
  changeToImage3() {
    document.querySelector('.image').src = image3;
  },
  changeToImage4() {
    document.querySelector('.image').src = image4;
  },
  changeToImage5() {
    document.querySelector('.image').src = image5;
  },
};

export { circleButtonNavigator };
