import { EMAIL } from 'app/utilities/regex'

export default {
  email: {
    field: 'email',
    label: 'Email',
    placeholder: 'you@email.com',
    type: 'email',
    required: true,
    validateOnBlur: true,
    validate: (value) => {
      if (!EMAIL.test(value)) return 'Invalid email'
    }
  },
  password: {
    field: 'password',
    label: 'Password',
    placeholder: '8 character minimum',
    type: 'password',
    required: true,
    validateOnBlur: true,
    validate: (value) => {
      if (!value || value.length < 8) return 'Passwords must be at least 8 characters'
    }
  }
}
