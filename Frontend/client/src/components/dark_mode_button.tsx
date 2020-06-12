import React, { MouseEvent } from 'react';
import { Helmet } from 'react-helmet';

import { AnchorButton } from '@blueprintjs/core'
import '../css/main.css';

interface IProps {};
interface IState {
    dark_mode?: boolean;
};

class DarkModeButton extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            dark_mode: true
        }

    }

    toggle_dark_mode = (e: MouseEvent) => {
        this.setState({dark_mode: !this.state.dark_mode});
    }

    render() {
        return (
            <div className={this.state.dark_mode ? 'bp3-dark' : 'bp3-light'}>
                <AnchorButton className="floating-button" icon={this.state.dark_mode ? 'flash' : 'moon'} onClick={this.toggle_dark_mode}>
                    {/* {this.state.dark_mode ? 'Light Mode' : 'Dark Mode'} */}
                </AnchorButton>
                {this.state.dark_mode ? (
                    <Helmet>
                        <style>{'body {background-color: #293742; color: white} .nav-color {background-color: #3a4f5e; color: white}'}</style>
                    </Helmet>
                ) : null}
            </div>   
        )
    }
}

export default DarkModeButton;