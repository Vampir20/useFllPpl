import '../../assets/main-page/nav-bar/nav-bar.sass'
import React from 'react';


class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <div className="nav-bar-wrapper">
                <div className="left">
                    <a href="mainpage">
                        <img src="" alt="logo" />
                    </a>
                </div>
                <div className="right">
                    <a href="/support">support</a>
                    <a href="/about">about</a>
                    <a href="/profile">
                        <img src="" alt="profilepic" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar;