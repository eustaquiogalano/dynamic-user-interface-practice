import './styles.css';
import {
  attachCircleButtonClickEvent,
  attachNavButtonClickEvent,
} from './modules/events';

// Initializes the click event for menu button
attachNavButtonClickEvent();

// Initializes the click event for circle button
attachCircleButtonClickEvent();
