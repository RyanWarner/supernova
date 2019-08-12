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
