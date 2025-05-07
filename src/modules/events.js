export function attachNavButtonClickEvent() {
  // Get a reference of menu button
  document
    .querySelector('#nav-toggler-button')
    // Then add a click event to toggle the toggle-display class
    .addEventListener('click', () => {
      document.querySelector('.nav-main').classList.toggle('toggle-display');
    });
}
