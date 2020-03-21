# Stimulus form utilities
A set of small form utility helpers:

- characters count for any input field
- auto-resize height of a textarea
- copy to clipboard
- cmd-/ctrl + enter to submit form

## Install

Assuming [StimulusJS](https://stimulusjs.org) is already installed. Add the `stimulus-form-utilities` module:

```bash
$ yarn add stimulus-form-utilities
```

or

```bash
$ npm install stimulus-form-utilities
```

Initialise all form utilites.
```javascript
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start();
const context = require.context("controllers", true, /.js$/);
application.load(definitionsFromContext(context));

import { CharacterCount, AutoResizeHeight, Clipboard, CommandEnter } from "stimulus-form-utilities"
application.register('character_count', CharacterCount)
application.register('auto_resize_height', AutoResizeHeight)
application.register('clipboard', Clipboard)
application.register('command_enter', CommandEnter)
```

### CharacterCount
```javascript
import { CharacterCount } from "stimulus-form-utilities"
application.register('character_count', CharacterCount)
```

```html
<form data-controller="character-count" data-character-count-max-value="10" data-character-count-warning-class="text-red">
  <textarea data-target="character-count.input" data-action="keyup->character-count#update"></textarea>
  <span data-target="character-count.countValue"></span>
</form>
```
You can change the maximum allowed characters by changing `data-character-count-max-value`. Furthermore `data-character-count-warning-class` is the value for the Css class added to count value element if the maximum count is exceeded.

### Auto-resize height of textarea
```javascript
import { AutoResizeHeight } from "stimulus-form-utilities"
application.register('auto_resize_height', AutoResizeHeight)
```

```html
<form data-controller="auto-resize-height">
  <textarea data-target="auto-resize-height.input" data-action="keyup->auto-resize-height#update"></textarea>
</form>
```

### Copy contents of field
```javascript
import { Clipboard } from "stimulus-form-utilities"
application.register('clipboard', Clipboard)
```

```html
<form data-controller="clipboard" data-clipboard-success-message="copied" data-clipboard-error-message="error">
  <textarea row="1" data-target="clipboard.source"></textarea>
  <button data-target="clipboard.button" data-action="click->clipboard#copy">copy</button>
</form>
```

You can change the success message by changing the value of `data-clipboard-success-message`.

### Cmd-/Ctrl + Enter to submit
```javascript
import { CommandEnter } from "stimulus-form-utilities"
application.register('command_enter', CommandEnter)
```

```html
<form data-controller="command-enter" action="https://www.getsjabloon.com">
  <textarea data-target="command-enter.input" data-action="keydown->command-enter#submit"></textarea>
  <input type="submit">
</form>
```

## Contributing

Bug reports and pull requests are welcome on GitHub at <https://github.com/eelcoj/stimulus-form-utilities>.

## License

This package is available as open source under the terms of the MIT License.
