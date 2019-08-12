# Text Area

Text area docs

<!-- STORY -->

```js
import { withInformed } from 'app/components'
import { TextArea } from 'app/ui-kit'

const fieldConfig = {
  message: {
    label: 'Message',
    field: 'message',
    placeholder: 'Type your message',
    validate: (value) => {
      if (!value || value.length < 1) return 'Required'
      return null
    }
  }
}

@withInformed
class FormWrap extends React.Component {
  render = () => {
    return <TextArea {...fieldConfig.message} />
  }
}
```
