import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginFormContainer,
  FormContainer,
  LoginWebsiteLogo,
  InputContainer,
  LoginButton,
  UserNameInputField,
  PasswordInputField,
  InputLabel,
  ShowHideContainer,
  ErrorMessage,
  CheckboxInput,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    isCheckedPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onShowHidePassword = () => {
    this.setState(prev => ({isCheckedPassword: !prev.isCheckedPassword}))
  }

  renderPasswordField = () => {
    const {password, isCheckedPassword} = this.state
    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <PasswordInputField
          type={isCheckedPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
        <ShowHideContainer>
          <CheckboxInput
            type="checkbox"
            id="show-password"
            checked={isCheckedPassword}
            onChange={this.onShowHidePassword}
          />
          <InputLabel htmlFor="show-password">Show Password</InputLabel>
        </ShowHideContainer>
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <UserNameInputField
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginFormContainer>
        <FormContainer onSubmit={this.submitForm}>
          <LoginWebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
        </FormContainer>
      </LoginFormContainer>
    )
  }
}

export default LoginForm
