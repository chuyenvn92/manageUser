import React, { Component } from 'react';

class SearchBar extends Component {

    // hàm chỉ giữ lại 1 button khi click thêm mới
    showButton = () => {
        if (this.props.showForm === true) {
            return (
                <div className="btn btn-outline-secondary" onClick={() => this.props.ketnoi()}>Đóng</div>
            )
        } else {
            return (
                <div className="btn btn-info" onClick={() => this.props.ketnoi()}>Thêm mới</div>
            )
        }
    }
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
                {this.showButton()}
            </div>

        );
    }
}

export default SearchBar;