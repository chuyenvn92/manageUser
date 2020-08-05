import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="form-group">
                <div className="btn-group">
                    <input placeholder="Search Tên ..." style={{ width: "500px" }} />
                    <div className="btn btn-info" >
                        Search</div>
                </div>
            </div>
        );
    }
}

export default SearchBar;