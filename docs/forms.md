# Forms

Yawnch uses a fantastic library called [Informed](https://github.com/joepuzzo/informed) by Joe Puzzo as the foundation to build forms.
The boilerplate comes with some patterns and usage examples to make working with forms quick and easy.

## Creating a new form

1. ### Create a new component.

  ```
    $ npx plop Component.
    ? Name of your component: LoginForm.
    ? Do you want the component to be styled with Styled Components? Yes
  ```

2. ### Add form related Higher Order Components.


  _Note that Informed does support hooks, and a hooks example will be written in the future._
  
  `withFormState` is a HOC from `informed` that gives this component access to your form fields' values, errors, etc. [See the docs](https://joepuzzo.github.io/informed/?path=/story/high-order-components--withformstate).
  
  `withForm` simply wraps this component in a `Form` (an `informed` component).
  
  Order is important here. `informed` requires a component using `withFormState` to be a child of a `Form`.

  ```
  import React, { Component } from 'react'
  import { withFormState } from 'informed'

  import * as S from './styles'
  import { withForm } from 'app/components'

  @withForm
  @withFormState
  export default class LoginForm extends Component {
  	  render () {
        return <S.LoginFormComponent>🚀 LoginForm</S.LoginFormComponent>
  	  }
  }

  ```

1. ### Define your form fields.

  Yawnch includes examples of form field options declaration.

  `/src/shared/data/formFields.js`

  ```
  import { regex } from 'app/utilities'

  export default {
    email: {
      field: 'email',
      type: 'email',
      placeholder: 'you@email.com',
      label: 'Email',
      validateOnBlur: true,
      validate: value => {
        if (!value || !regex.EMAIL.test(value)) return 'Invalid email'
      }
    },
    password: {
      field: 'password',
      type: 'password',
      placeholder: 'At least 8 characters',
      label: 'Password',
      validateOnBlur: true,
      validate: value => {
        if (!value || value.length < 8) return 'Passwords must be at least 8 characters'
      }
    }
  }
  ```

  Each form field is an object containing values that eventually get passed down as props to your input component, `informed`, and the `input` DOM element.

  For example:

  - `label` is used by [`TextField.js`](https://github.com/yawnch/react-firebase-ssr-starter/blob/master/src/shared/components/AppUIKit/TextField/TextField.js)
  - `validateOnBlur` is used by `informed`
  - `placeholder` is written to the DOM on the `input` element.


1. ### Add the form fields to your component

  ```
  import React, { Component } from 'react'
  import { withFormState } from 'informed'

  import * as S from './styles'
  import { withForm } from 'app/components'
  import { TextField } from 'app/ui-kit'
  import { formFields } from 'app/data'

  @withForm
  @withFormState
  export default class LoginForm extends Component {
  	  render () {
        return <S.LoginFormComponent>
          <TextField {...formFields.email} />
          <TextField {...formFields.password} />
        </S.LoginFormComponent>
  	  }
  }

  ```

  [`TextField.js`](https://github.com/yawnch/react-firebase-ssr-starter/blob/master/src/shared/components/AppUIKit/TextField/TextField.js) is a boilerplate component that demonstrates a custom `informed` field that shows a form label and error message as well as visual indicators of form state.

1. ### Submission & loading behavior

    ```
    import React, { Component } from 'react'
    import { withFormState } from 'informed'

    import * as S from './styles'
    import { withForm } from 'app/components'
    import { TextField } from 'app/ui-kit'
    import { formFields } from 'app/data'

    @withForm
    @withFormState
    export default class LoginForm extends Component {
      state = { loading: false }

      componentDidMount = () => {
        this.props.setOnSubmit(this.submit)
      }

      submit = () => {
        const { formState, closeModal } = this.props
        const { loading } = this.state

        if (loading) return
        this.setState({ loading: true })
        const { email, password } = formState.values

        try {
          // Some async action
        } catch (error) {
          // Show error modal
        }
      }

      render () {
        const { loading } = this.state

        return <S.LoginFormComponent>
          <TextField {...formFields.email} />
          <TextField {...formFields.password} />

          <S.SignUpButton type='submit' loading={loading}>
            Sign Up
          </S.SignUpButton>
        </S.LoginFormComponent>
      }
    }

    ```
