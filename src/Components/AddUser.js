import React, { Component } from 'react';

class AddUser extends Component {
    // xử lí logic cho nút thêm mới và đóng, chỉ xuất hiện 1 trong 2 nút
    // dùng state để lưu trạng thái của 2 nút
    constructor(props, context) {
        super(props, context);
        this.state = {
            trangthaiChinhsua: true
        }
    }
    // hàm để hiển thị nút, khi đnag chỉnh sửa thì sẽ đóng lại và ngược lại
    showButton = () => {
        if (this.state.trangthaiChinhsua === true) {
            return (
                <div className="btn btn-outline-secondary">Đóng</div>
            )
        } else {
            return (
                <div className="btn btn-info">Thêm mới</div>
            )
        }
    }

    render() {
        return (
            <div className="col-3">
                {this.showButton()}
                <form>
                    <div className="card text-left mt-2">
                        <div className="card text-white bg-outline-success mb-3">
                            <div className="card-header">Thêm mới User</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Tên User"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Điện thoại"
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="input-group mb-3">
                                        <select
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
                                        type="reset"
                                        className="btn btn-block btn-primary"
                                        value="Thêm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddUser;