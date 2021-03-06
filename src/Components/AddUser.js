import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // tạo state để lưu giữu liệu nhập vào rồi chuyển qua nút lưu
            id: '',
            name: '',
            phone: '',
            permission: ''
        }
    }

    // // xử lí logic cho nút thêm mới và đóng, chỉ xuất hiện 1 trong 2 nút
    // // dùng state để lưu trạng thái của 2 nút
    // constructor(props, context) {
    //     super(props, context);
    //     this.state = {
    //         trangthaiChinhsua: true
    //     }
    // }
    // // hàm để hiển thị nút, khi đnag chỉnh sửa thì sẽ đóng lại và ngược lại
    // showButton = () => {
    //     if (this.state.trangthaiChinhsua === true) {
    //         return (
    //             // use onClick de goi den ham changeTrangthai, dung arrow function de goi ham
    //             // khong thi se bi loi xay ra thay doi state nhieu lan
    //             // viet theo kieu arrow function thi click vao moi chay, khong bi loi lap vo so lan
    //             <div className="btn btn-outline-secondary" onClick={() => this.changeTrangthai()}>Đóng</div>
    //         )
    //     } else {
    //         return (
    //             <div className="btn btn-info" onClick={() => this.changeTrangthai()}>Thêm mới</div>
    //         )
    //     }
    // }

    // // hàm thay đổi trạng thái, khi ấn button thì ẩn hiển form thêm mới
    // // sử dụng setState để thay đổi trạng thái
    // changeTrangthai = () => {
    //     this.setState({
    //         trangthaiChinhsua: !this.state.trangthaiChinhsua
    //     });
    // }
    // hàm kiểm tra props truyền từ cha sang, có thể truyền state dưới dạng props nên ta check logic
    // bên form con như bình thường
    checkStateForm = () => {
        if (this.props.showForm === true) {
            return (
                <form>
                    <div className="card text-left">
                        <div className="card text-white bg-outline-success mb-3">
                            <div className="card-header">Thêm mới User</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input
                                        onChange={(event) => { this.isChange(event) }}
                                        name="name"
                                        type="text"
                                        className="form-control"
                                        placeholder="Tên User"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        onChange={(event) => { this.isChange(event) }}
                                        name="phone"
                                        type="text"
                                        className="form-control"
                                        placeholder="Điện thoại"
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="input-group mb-3">
                                        <select
                                            onChange={(event) => { this.isChange(event) }}
                                            name="permission"
                                            className="custom-select"
                                            id="inputGroupSelect02"
                                            defaultValue={"DEFAULT"}
                                        >
                                            <option value="DEFAULT" disabled>
                                                Chọn quyền
                      </option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>Mod</option>
                                            <option value={3}>Member</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input
                                        onClick={(name, phone, permission) => this.props.getNewUserData(this.state.name,this.state.phone, this.state.permission)}
                                        type="reset"
                                        className="btn btn-block btn-primary"
                                        value="Thêm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )
        }
    }
    // hàm lấy dữ liệu từ các ô input
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
        // sau khi lấy được dữ liệu là 1 mảng, đóng gói lại để gửi lên App.js
        var item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.phone = this.state.phone;
        item.permission = this.state.permission;
    }

    render() {
        return (
            <div>
                {/* {this.showButton()} */}
                {this.checkStateForm()}
            </div>
        );
    }
}

export default AddUser;