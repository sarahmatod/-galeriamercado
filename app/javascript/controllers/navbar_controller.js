import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  connect() {}

  updateLogo() {
    if (window.scrollY >= window.innerHeight) {
      this.element.classList.remove("hide-element")
    } else {
      this.element.classList.add("hide-element")
    }
  }

  updateNavbar() {
    if (window.scrollY >= window.innerHeight) {
      this.element.classList.add("nav-green")
    } else {
      this.element.classList.remove("nav-green")
    }
  }
}

  //updateTag() {
    //if (window.scrollY >= window.innerHeight) {
      //this.element.classList.remove("hide-element")
    //}
  //}
