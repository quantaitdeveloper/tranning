
import './App.css';
import React from 'react';
import TaskForm from './components/taskForm.js';
import FormControl from './components/managerment'
import TaskList from './components/taskList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [

      ],
      isdisplayForm: false,
      taskEditing : null 
    }
  }
  generateID() {
    return Math.random(100);
  }

  onGenerateData = () => {           /*chuyển về arrow function */
    var tasks = [
      {
        id: this.generateID(),
        name: 'Học HTML CSS',
        status: true

      }
      , {
        id: this.generateID(),
        name: 'Học JavaScript',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Học ReactJS',
        status: false
      },
      {
        id: this.generateID(),
        name: 'Học MongoDB',
        status: false
      }
    ]/*Tạo 1 Mảng gồm các công việc khác nhau */
    /*setSate cho cái state khởi tạo bên trên */
    var a = localStorage.getItem('tasks');
    var b = JSON.parse(a)
    if (b != null) { /*kiem tra b co khac null hay ko ? neu khac null */
      this.setState({
        tasks: b /*this.state.tasks = b , b la 1 mang gom 5 object(trong local)  */
      })
    }
    else {
      this.setState({
        tasks: tasks /*this.state.tasks = var tasks */
      })
      localStorage.setItem('tasks', JSON.stringify(tasks)); /* setItem (key ,value)*/
    }
    // this.setState({
    //   tasks: tasks /*this.state.tasks = var tasks */
    // })
    // localStorage.setItem('tasks', JSON.stringify(tasks)); /* setItem (key ,value)*/
  }
  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"))
      this.setState({
        tasks: tasks
      })
    }

  }
  

  onshowDisplay = () => {
    this.setState({
      isdisplayForm: true,

    })
    
  }
  onhideDisplay = () => {
    this.setState({
      isdisplayForm: false,
      taskEditing : null
    })
  }
  /* Bắt sự kiện cho form */
  onSubmit = (data) => {
    var tasks = this.state.tasks;
    if(data.id ===""){
      data.id = this.generateID(); /* co duoc data la 1 cai state (object) , push no vao cai mang object cua state APP.js la xong*/
      /* lay tasks tu state cua APP.js */
      tasks.push(data);  
    }
    else{
      var index = this.findIndex(data.id)
      tasks[index] = data
    }
            /**push vao cai mang tasks  */
    this.setState({           /**Gan cai tasks cu = task moi ( sau khi push) */
      tasks: tasks,
      taskEditing :null
    })
 
    localStorage.setItem('tasks', JSON.stringify(tasks)) /* luwu vao local storage */
   
  }
  /*CLick vào ô kích hoạt */
  onUpdateStatus = (id) => {
    var tasks = this.state.tasks;
    var index = this.findIndex(id);

    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      })
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }
  /*tìm index thông qua id  */
  findIndex = (id) => {
    var tasks = this.state.tasks;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    })
    return result
  }

  onDelete = (id) => {
    var check = window.confirm("Xác Nhận Xóa ?");
    if (check === true) {
      var tasks = this.state.tasks;
      var index = this.findIndex(id);

      if (index !== -1) {
        tasks.splice(index, 1);
        this.setState({
          tasks: tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
      }
    }
  }
  onUpdate =(id)=>{
    var tasks = this.state.tasks;
    var index = this.findIndex(id);
    var taskEditing = tasks[index]; 
    this.setState({
      taskEditing : taskEditing 
    })
  
    this.onshowDisplay();
  }
  render() {
    var tasks = this.state.tasks; /* khởi tạo 1 biến tasks lưu giá trị của state 
    
    mục đích để truyền cho mấy thằng con taskList*/
    var taskEditing = this.state.taskEditing;
    var display = this.state.isdisplayForm ? <TaskForm  close ={this.onhideDisplay} onSubmit={this.onSubmit} onhideDisplay={this.onhideDisplay} task={taskEditing}></TaskForm> : '';
    return (
      <div>
        <div class="container">
          <h1>Quản Lý Công Việc</h1>
          <hr></hr>
          <div class="row">
            <div className={this.state.isdisplayForm ? "col-lg-4 col-md-4 col-sm-4 col-xs-4 col-12 taskform" : "col-lg-0 col-md-0 col-sm-0 col-xs-0 col-0 taskform"} >
              {display}
            </div>
            <div className={this.state.isdisplayForm ? "col-lg-8 col-md-8 col-sm-8 col-xs-8 col-12 managerment" : "col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 managerment"} >
              <button type="button" className="btn btn-primary" onClick={this.onshowDisplay} ><i className="fas fa-plus" /> Thêm Công Việc</button>
              <button type="button" className="btn btn-danger ml-5" onClick={this.onGenerateData}>Generate Data</button>
              <FormControl></FormControl>
              <div class="row">
                <TaskList
                  tasks={tasks}
                  onUpdateStatus={this.onUpdateStatus}
                  onDelete={this.onDelete}
                  onUpdate ={this.onUpdate}
                >

                </TaskList> {/*truyền prop cho thằng con , với giá trị của props là các giá trị của state */}
              </div>
            </div>

          </div>

        </div>
      </div>

    )
  }
}

export default App;