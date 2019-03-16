import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "input" ]

  submit(event) {
    if (!((event.metaKey || event.ctrlKey || event.keyCode == 91 || event.keyCode == 93) && (event.keyCode == 13))) return

    this.inputTarget.form.submit()
  }
}
