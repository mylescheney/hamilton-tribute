import React, { Component } from 'react';
import Header from './HeaderComponent';
import MainContent from './MainContentComponent';
import Footer from './FooterComponent';
import { LIFE } from '../shared/lifeContent';
import { LEGACY } from '../shared/legacyContent'

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            life: LIFE,
            legacy: LEGACY
        }
    }

    render() {
        console.log(this.state.life);
        return (
            <React.Fragment>
                <Header />
                <MainContent lifeContent={this.state.life} legacyContent={this.state.legacy} />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Main;