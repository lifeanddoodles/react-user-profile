/**
 * Cheap and dirty mobile navigation.
 * don't do this at home!
 */
export default class MobileNav {
  constructor(btn, navigation) {
    this.openButton = btn;
    this.navigation = navigation;
    this.isOpen = false;

    this.openButton.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(event) {
    if (this.isOpen) {
      this.navigation.classList.remove('main-navigation--open');
      this.isOpen = false;
    } else {
      this.navigation.classList.add('main-navigation--open');
      this.isOpen = true;
    }
  }
}
