import React, { Component } from 'react'
import TableDataRow from './TableDataRow'

class TableData extends Component {
    render() {
        return (
            <div className="col">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>SĐT</th>
                            <th>Quyền</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableDataRow />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;