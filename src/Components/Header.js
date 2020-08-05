import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-10">
                        Quản lí thành viên bằng ReactJS
            </h1>
                    <p>với Json</p>
                    <hr />
                </div>
            </div>
        );
    }
}

export default Header;