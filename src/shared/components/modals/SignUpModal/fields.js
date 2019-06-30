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
  username: {
    label: 'Username',
    slug: 'username',
    inputType: 'text',
    required: true,
    validate: (value) => {
      if (!regex.USERNAME.test(value)) return 'Usernames can only contain letters, numbers, and underscores'
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
