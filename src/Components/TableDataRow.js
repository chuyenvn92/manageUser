import React, { Component } from 'react';

class TableDataRow extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>Mai Công Chuyên</td>
                <td>0349982248</td>
                <td>Admin</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua">
                            <i className="fa fa-edit">Sửa</i>
                        </div>
                        <div className="btn btn-danger xoa">
                            <i className="fa fa-trash">Xóa</i>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;