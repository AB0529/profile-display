import React, { FormEvent } from 'react';
import { Redirect } from 'react-router-dom'
import { Button, Card, Elevation, FormGroup, InputGroup, Icon } from '@blueprintjs/core';

import '../css/main.css';
import '../css/register.css';

interface IProps {};
interface IResponse {
    status?: number,
    state?: string,
    result?: string | any,
    error?: {
        type: string,
        error: string
    }
};
interface IState {
    response: IResponse,
    email?: string,
    name?: string,
    username?: string,
    password?: string,
    registerd: boolean,
};

class Register extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        const response: IResponse = {}; 

        this.state = {
            response,
            email: '',
            name: '',
            username: '',
            password: '',
            registerd: false
        };

    }

    handle_submit = (e: FormEvent<HTMLFormElement>) => {
        fetch(`http://vps.anishb.net:3001/gamer_hideout/api/register`, {
            method: 'POST',
            body: JSON.stringify({username: this.state.username, password: this.state.password})
        }).then((resp: IResponse) => {
            if (resp.state == 'fail')
                return this.setState({ response: resp });
            
            this.setState({ registerd: true });
        });
    }

    render() {
        return (
            <div className="outer">
                <div className="register-inner">
                    <Card className="register-card dark-mode" interactive={true} elevation={Elevation.TWO}>
                        <FormGroup  className="bp3-inline bp3-intent-primary" labelFor="text-input">
                            <h1 className="register-title">Register User</h1>
                            <form onSubmit={this.handle_submit}>
                                <Icon icon="mugshot" /> Name
                                <InputGroup className="pad-down" id="text-input" placeholder="Ben Dover" type="name" intent={this.state.response.error?.type === "name" ? "danger" : "none"} />
                                <Icon icon="user" /> Username
                                <InputGroup className="pad-down" id="text-input" placeholder="Username" type="username" intent={this.state.response.error?.type === "username" ? "danger" : "none"}/>
                                <Icon icon="lock" /> Password
                                <InputGroup className="pad-down" id="text-input" placeholder="********" type="password" intent={this.state.response.error?.type === "password" ? "danger" : "none"}/>
                                <Icon icon="envelope" /> Email
                                <InputGroup className="pad-down" id="text-input" placeholder="email@example.com" type="email" intent={this.state.response.error?.type === "email" ? "danger" : "none"}/>
                                {
                                    this.state.response.error ? (
                                        <h3>
                                        <li>
                                            <a style={{color: "red"}}>
                                                {this.state.response.error?.error}
                                            </a>
                                        </li>
                                    </h3>
                                    ) : null
                                }
                                <Button className="register-button" alignText="center" icon="arrow-right" type="submit">Register</Button>
                            </form>
                        </FormGroup>
                    </Card>
                </div>
            </div>

        );
    }
}

export default Register;
