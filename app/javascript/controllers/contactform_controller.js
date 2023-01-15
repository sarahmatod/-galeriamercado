import { Controller } from "@hotwired/stimulus"

  const abaForm = document.querySelector(".form-contact")
  const buttonForm = document.querySelector(".btn-form")
  const shutForm = document.querySelector(".shut-form")
  const submitForm = document.querySelector(".form-contact-btn")
  const thankForm = document.querySelector(".thank")

  //buttonForm.addEventListener("click", openForm)
  //shutForm.addEventListener("click", closeForm)
  //submitForm.addEventListener("click", sentForm)


// Connects to data-controller="contactform"
export default class extends Controller {
  connect() {
  }

 openForm () {
  abaForm.classList.add("open-form")
 }

 closeForm () {
  abaForm.classList.remove("open-form")
 }


 sentForm () {
  abaForm.classList.remove("open-form")
  thankForm.classList.add("show-thankyou")
 }

 closeThank () {
  thankForm.classList.remove("show-thankyou")
 }

}
