import './styles.css';
import {
  attachArrowButtonClickEvent,
  attachCircleButtonClickEvent,
  attachNavButtonClickEvent,
} from './modules/events';
import { automaticNavigator } from './modules/image-navigator';

// Initializes the click event for menu button
attachNavButtonClickEvent();

// Initializes the click event for circle buttons
attachCircleButtonClickEvent();

// Initialize the click event for arrow buttons
attachArrowButtonClickEvent();

// Initializes the slideshow effect
automaticNavigator.automaticImageSwapping();
