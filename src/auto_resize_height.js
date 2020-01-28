import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "input" ]

  initialize() {
    this.setInputAttributes()
    this.update()
  }

  update() {
    this.inputTarget.style.height = "auto"
    this.inputTarget.style.height = `${this.inputTarget.scrollHeight}px`
  }

  setInputAttributes() {
    this.inputTarget.setAttribute("style", `height: ${this.inputTarget.scrollHeight}px; overflow-y: hidden;`)
  }
}
