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

const automaticNavigator = {
  // Currently this object only has 1 method inside it
  // but adding additional one in the future is not a problem

  // This method is responsible for slideshow effect
  automaticImageSwapping() {
    // Direction variable will tell if the
    // count is ascending or descending
    // 1 is ascending, -1 is descending
    let direction = 1;

    // This function will run every 5 seconds
    setInterval(() => {
      // Evaluate the tracker
      if (imageNumberTracker === 5) {
        // If tracker reaches 5
        // set the counting to descending order
        direction = -1;
      } else if (imageNumberTracker === 1 && direction === -1) {
        // If tracker reaches back to 1
        // set the counting back to ascending order
        direction = 1;
      }

      // Evaluate the direction
      if (direction === 1) {
        // If direction is 1
        // run this method
        arrowButtonNavigator.moveImageToRight();
      } else if (direction === -1) {
        // If direction is -1
        // run this one
        arrowButtonNavigator.moveImageToLeft();
      }

      // Logging the current value for
      // debugging purposes
      console.log(imageNumberTracker);
    }, 5000);
  },
};

export { circleButtonNavigator, automaticNavigator, arrowButtonNavigator };
