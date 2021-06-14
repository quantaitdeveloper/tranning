import React from 'react';
class TaskItem extends React.Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id)
    }
    onDelete = () => {
        this.props.onDelete(this.props.task.id)

    }
    onUpdate =() =>{
        this.props.onUpdate(this.props.task.id)
    }
    render() {
        var task = this.props.task;
        var index = this.props.index;
        return (
            <tr>
                <td scope="row">{index + 1}</td>
                <td>{task.name}</td>
                <td>
                    <span className={task.status ? 'badge badge-success' : 'badge badge-danger'} onClick={this.onUpdateStatus}>
                        {task.status ? 'Kích Hoạt' : 'Ẩn'}
                    </span>

                </td>
                <td>
                    <button type="button" class="btn btn-warning" onClick={this.onUpdate}><i class="fas fa-pencil-alt"></i> Sửa</button>
                    <button type="button" class="btn btn-warning ml-5" onClick={this.onDelete}><i class="fas fa-trash-alt"></i> Xóa</button>
                </td>
            </tr>

        )
    }
}

export default TaskItem;