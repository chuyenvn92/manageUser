import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" placeholder="Search Tên ..." style={{ width: "500px" }} />
                        <div className="btn btn-info" >
                            Search</div>
                    </div>
                </div>
                <div className="btn btn-outline-secondary" onClick={() => this.props.ketnoi()}>Đóng</div>
                <div className="btn btn-info" onClick={() => this.props.ketnoi()}>Thêm mới</div>
            </div>

        );
    }
}

export default SearchBar;