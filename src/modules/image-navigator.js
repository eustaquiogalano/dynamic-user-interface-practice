import image1 from '../images/image-1.jpg';
import image2 from '../images/image-2.jpg';
import image3 from '../images/image-3.jpg';
import image4 from '../images/image-4.jpg';
import image5 from '../images/image-5.jpg';

let imageNumberTracker = 1;

const circleButtonNavigator = {
  changeToImage1() {
    document.querySelector('.image').src = image1;
    imageNumberTracker = 1;
  },
  changeToImage2() {
    document.querySelector('.image').src = image2;
    imageNumberTracker = 2;
  },
  changeToImage3() {
    document.querySelector('.image').src = image3;
    imageNumberTracker = 3;
  },
  changeToImage4() {
    document.querySelector('.image').src = image4;
    imageNumberTracker = 4;
  },
  changeToImage5() {
    document.querySelector('.image').src = image5;
    imageNumberTracker = 5;
  },
};

const arrowButtonNavigator = {
  moveImageToLeft() {
    imageNumberTracker =
      imageNumberTracker === 1 ? 1 : (imageNumberTracker -= 1);

    switch (imageNumberTracker) {
      case 1:
        circleButtonNavigator.changeToImage1();
        break;
      case 2:
        circleButtonNavigator.changeToImage2();
        break;
      case 3:
        circleButtonNavigator.changeToImage3();
        break;
      case 4:
        circleButtonNavigator.changeToImage4();
        break;
      case 5:
        circleButtonNavigator.changeToImage5();
        break;
    }
  },
  moveImageToRight() {
    imageNumberTracker =
      imageNumberTracker === 5 ? 5 : (imageNumberTracker += 1);

    switch (imageNumberTracker) {
      case 1:
        circleButtonNavigator.changeToImage1();
        break;
      case 2:
        circleButtonNavigator.changeToImage2();
        break;
      case 3:
        circleButtonNavigator.changeToImage3();
        break;
      case 4:
        circleButtonNavigator.changeToImage4();
        break;
      case 5:
        circleButtonNavigator.changeToImage5();
        break;
    }
  },
};

export { circleButtonNavigator, arrowButtonNavigator };
