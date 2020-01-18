import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "source", "button" ]

  connect() {
    this.successMessage = this.data.get("successMessage") || "Copied"
  }

  copy() {
    this.sourceTarget.select()
    document.execCommand("copy")
    this.setMessage()
  }

  setMessage() {
    this.buttonTarget.textContent = this.successMessage
  }
}
