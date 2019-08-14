# Select

We use [informed](https://github.com/joepuzzo/informed) to handle forms. `Select` is a custom `informed` element, using the `asField` decorator. [Read the Custom Input docs](https://joepuzzo.github.io/informed/?path=/story/custominputs--creating-custom-inputs).

`Select` must be a child of `informed.Form`. Use the `withInformed` HOC to wrap your component in a `Form`.

Yawnch uses [react-select](https://github.com/JedWatson/react-select) to power our select component.

<!-- STORY -->

## Usage example

```js
import { withInformed } from 'app/components'
import { Select } from 'app/ui-kit'

const fieldConfig = {
  color: {
    label: 'Pick a Color',
    field: 'color',
    defaultValue: { value: 'red', label: 'Cyan' },
    options: [{
      value: 'red', label: 'Cyan'
    }, {
      value: 'magenta', label: 'Magenta'
    }, {
      value: 'yellow', label: 'Yellow'
    }, {
      value: 'black', label: 'Black'
    }]
  }
}

@withInformed
class FormWrap extends React.Component {
  render = () => {
    return <Select {...fieldConfig.message} />
  }
}
```
