import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "source", "button" ]

  connect() {
    this.successMessage = this.data.get("successMessage") || "Copied"
    this.errorMessage   = this.data.get("errorMessage")   || "Error copying"
  }

  copy() {
    navigator.clipboard.writeText(this.sourceTarget.value)
    .then(() => {
      this.setMessage(this.successMessage)
    })
    .catch(err => {
      this.setMessage(this.errorMessage)
    })
  }

  setMessage(label) {
    this.buttonTarget.textContent = label
  }
}
