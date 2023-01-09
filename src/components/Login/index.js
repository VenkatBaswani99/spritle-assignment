import {useState} from 'react'

import './index.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeEmail = event => {
    setEmail(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  // function to log the user in
  const submitForm = event => {
    event.preventDefault()
  }

  // function to render the password input element
  const renderPasswordField = () => (
    <>
      <label className="input-label" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        className="password-input-field"
        value={password}
        onChange={onChangePassword}
        placeholder="Password"
      />
    </>
  )

  // function to render the username input element
  const renderEmailField = () => (
    <>
      <label className="input-label" htmlFor="email">
        EMAIL
      </label>
      <input
        type="email"
        id="email"
        className="email-input-field"
        value={email}
        onChange={onChangeEmail}
        placeholder="Email"
      />
    </>
  )

  // displaying the login form
  return (
    <div className="login-container">
      <form className="form-container" onSubmit={submitForm}>
        <div className="input-container">{renderEmailField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
