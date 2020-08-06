import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // khởi tạo state để lưu giá trị người dùng nhập vào ô search, mặc định là null
            tempValue: ''
        }
    }


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

    // hàm check sự thay đổi khi nhập trong ô input, sử dụng tham số truyền vào để lấy giá trị người dùng nhập vào
    // sau đó gán lại vào biển tempValue giá trị người dùng nhập
    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        this.props.getTextSearch(this.state.tempValue);
    }
    render() {
        return (
            <div>
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" placeholder="Search Tên ..." style={{ width: "500px" }}
                            // onchange để kiểm tra người dùng nhập vào là gì, rồi lấy giá trị đó ra
                            onChange={(event) => this.isChange(event)} />
                        <div className="btn btn-info"
                            // từ đây đẩy dữ liêu lấy được từ ô input qua Component cha(App.js) tham số truyền vào là dl
                            onClick={(dl) => this.props.getTextSearch(this.state.tempValue)}>
                            Search Name ...</div>
                    </div>
                </div>
                {this.showButton()}
            </div>
        );
    }
}

export default SearchBar;