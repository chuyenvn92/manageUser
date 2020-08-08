import React, { Component } from 'react';

class TableDataRow extends Component {

    permission = () => {
        if (this.props.permission === '1') {
            return "Admin"
        } else if (this.props.permission === '2') {
            return "Mod"
        } else {
            return "Member"
        }
    }

    // hàm nhận props truyền từ App.js xuống TableData.js
    editUser = () => {
        this.props.editUser();
        this.props.changeEditUserStatus()
    }
    deleteButon = (id) => {
        this.props.deleteButon(id)
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.permission()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua">
                            <i className="fa fa-edit" onClick={() => this.editUser()}>Sửa</i>
                        </div>
                        <div className="btn btn-danger xoa">
                            <i className="fa fa-trash" onClick={(id) => this.deleteButon(this.props.id)}>Xóa</i>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;