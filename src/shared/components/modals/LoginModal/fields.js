import { regex } from 'app/utilities'

export default {
  email: {
    label: 'Email',
    slug: 'email',
    inputType: 'email',
    required: true,
    validate: (value) => {
      if (!regex.EMAIL.test(value)) return 'Invalid email'
      return null
    }
  },
  password: {
    label: 'Password',
    slug: 'password',
    inputType: 'password',
    required: true,
    validate: (value) => {
      if (value.length < 8) return 'Passwords must be at least 8 characters'
      return null
    }
  }
}
