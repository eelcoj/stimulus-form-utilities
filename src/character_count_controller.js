import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "input", "countValue" ]

  initialize() {
    this.maxValue     = this.data.get("max-value")     || "140"
    this.warningClass = this.data.get("warning-class") || "text-red"
    this.update()
  }

  update() {
    var count = this.inputTarget.value.length

    if (count > 0) {
      var message = `${count}/${this.maxValue}`
    }

    this.setMessage(message)

    count > this.maxValue ? this.addWarningClass() : this.removeWarningClass()
  }

  setMessage(message) {
    this.countValueTarget.textContent = message
  }

  addWarningClass() {
    this.countValueTarget.classList.add(this.warningClass)
  }

  removeWarningClass() {
    this.countValueTarget.classList.remove(this.warningClass)
  }
}
