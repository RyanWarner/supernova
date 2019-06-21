import React, { Component } from 'react'
import isEmpty from 'lodash/isEmpty'
import { TextField } from 'app/ui-kit'

export default function withForm (fields) {
  return (WrappedComponent) => {
    return class AppFormHOC extends Component {
      constructor (props) {
        super(props)
        this.state = {}
        Object.keys(fields).forEach(key => {
          this.state[key] = { error: null, value: '' }
        })
      }

      resetState = () => {
        Object.keys(fields).forEach(key => {
          this.setState({ [key]: { error: null, value: '' } })
        })
      }

      validate (slug, value = this.state[slug].value) {
        if (fields[slug].required && isEmpty(value)) {
          return 'Required'
        }
        if (typeof fields[slug].validate !== 'function') return null
        return fields[slug].validate(value)
      }

      setError = (slug, error) => {
        this.setState({
          [slug]: {
            ...this.state[slug],
            error
          }
        })
      }

      setValue = (slug, value) => {
        this.setState({
          [slug]: {
            ...this.state[slug],
            value
          }
        })
      }

      onTextFieldChange = (slug) => ({ target }) => {
        const { value } = target
        this.setState({
          [slug]: {
            value,
            error: this.validate(slug, value)
          }
        })
      }

      allFieldsValid = () => {
        let fieldsValid = true
        Object.keys(fields).forEach((key) => {
          const error = this.validate(key)
          if (error) fieldsValid = false
          this.setState({ [key]: { ...this.state[key], error } })
        })
        return fieldsValid
      }

      renderTextField = ({ slug, label }) => {
        return <TextField
          key={slug}
          label={label}
          placeholder={label}
          onChange={this.onTextFieldChange(slug)}
          value={this.state[slug].value}
          error={this.state[slug].error != null}
          helperText={this.state[slug].error}
        />
      }

      submitOnEnter = (e) => (submitFunc) => { if (e.keyCode === 13) return submitFunc(e) }

      render () {
        return <WrappedComponent
          allFieldsValid={this.allFieldsValid}
          validate={this.validate}
          onTextFieldChange={this.onTextFieldChange}
          submitOnEnter={this.submitOnEnter}
          setError={this.setError}
          setValue={this.setValue}
          resetState={this.resetState}
          renderTextField={this.renderTextField}
          {...this.state}
          {...this.props}
        />
      }
    }
  }
}
