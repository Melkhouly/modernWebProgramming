import { Component } from '@angular/core';
import { TaskService } from './task.service'
import { Task } from './task'
import {FormGroup} from  '@angular/forms'

@Component({
  selector: 'task-component',
  templateUrl: 'app/task/task.component.html'

})



export class TaskComponent {
  tasks: Task[];
  title: String;

  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe(tasks => {
      // console.log(tasks)
      this.tasks = tasks;
    });

  }
active=true;

  addTask(event) {
    event.preventDefault();
    var newTask = {
      title: this.title,
      isDone: false
      
    }
    this.active = false;
    setTimeout(() => this.active = true, 0);
    //this will not presiste to database 
    //this.tasks.push(newTask);
    this.taskService.addTask(newTask).subscribe(
      task => {
        this.tasks.push(task);
        this.title = '';
      });




  }

  deleteTask(id) {
    var tasks = this.tasks;
    this.taskService.deleteTask(id).subscribe(data => {
      if (data.n == 1) {
        for (var i = 0; i < tasks.length; i++) {
          if (tasks[i]._id == id) {
            tasks.splice(i, 1);
          }
        }
      }

    });


  }
  
updateStatus(task){
    alert("updated!");
    console.log("updated")
  var _task={
    _id:task._id,
    title:task.title,
    isDone:!task.isDone
  };
  this.taskService.updateStatus(_task).subscribe(data=>{
    task.isDone=!task.isDone;
  })

}
}