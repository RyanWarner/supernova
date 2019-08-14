# Text Field

- Form state is handled by [informed](https://github.com/joepuzzo/informed).
- `TextField` is a custom `informed` element, using the `asField` decorator. Read the [Informed Custom Input docs](https://joepuzzo.github.io/informed/?path=/story/custominputs--creating-custom-inputs).
- `TextField` must be a child of `informed.Form`. Use the `withInformed` HOC to wrap your component in a `Form`.

<!-- STORY -->

## Usage example

```jsx
const fieldConfig = {
  name: {
    label: 'Name',
    field: 'name',
    placeholder: 'First and last',
    required: true,
    validate: (value) => {
      if (!value || value.length < 1) return 'Required'
      return null
    }
  }
}

@withInformed
class FormWrap extends React.Component {
  render = () => {
    return <TextField {...fieldConfig.name} />
  }
}
```
