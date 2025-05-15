import './styles.css';
import {
  attachArrowButtonClickEvent,
  attachCircleButtonClickEvent,
  attachNavButtonClickEvent,
} from './modules/events';

// Initializes the click event for menu button
attachNavButtonClickEvent();

// Initializes the click event for circle buttons
attachCircleButtonClickEvent();

// Initialize the click event for arrow buttons
attachArrowButtonClickEvent();
