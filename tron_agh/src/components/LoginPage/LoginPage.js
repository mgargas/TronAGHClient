import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './LoginPage.css';


//  login    : accounts/username/password
//  register : accounts/
// {
//     username :
//     password :
// }
export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            login: "",
            password: ""
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('login = '+this.state.login);
        console.log('password = '+this.state.password);
    };

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    validateForm() {
        return this.state.login.length > 0 && this.state.password.length > 0;
    }

    render(){
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="login">
                        <Form.Control
                            autoFocus
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Control
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </Form.Group>
                    <div className="buttons-panel">
                        <Button
                            block
                            className="login-button"
                            disabled={!this.validateForm()}
                            type="submit">LOGIN</Button>
                        <Button
                            block
                            className="register-button"
                            disabled={!this.validateForm()}
                            type="submit">REGISTER</Button>
                    </div>
                </Form>
            </div>
        )};
}