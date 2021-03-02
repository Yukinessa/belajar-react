import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import fetchAPI from './fetchAPI'

const { REACT_APP_BASE_URL } = process.env
const Login = () => {

    const history = useHistory()
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleSubmit = async () => {
        try {
            const response = await fetchAPI('POST', `auth/login`, { email, password })
            console.log(response)
            history.push("/dashboard")
        } catch (error) {
            console.log({ ...error })
        }
    }
    return (
        <div>
            <h1>login</h1>
            <input value={email} placeholder="email" onChange={(event) => setEmail(event.target.value)} />
            <input value={password} placeholder="password" onChange={(event) => setPassword(event.target.value)} />
            <button onClick={handleSubmit}>login</button>
        </div>
    )

}

export default Login;