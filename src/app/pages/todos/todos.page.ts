import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/todos.service';
import { Todo } from 'src/app/models/todo';

@Component({
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss']
})

export class TodosPage implements OnInit {

  nomeTask!: string
  listaTask: Todo[] = []

  constructor (private taskService: TaskService){}

  getTask(){
    setTimeout(() =>{
      this.listaTask = this.taskService.getTask()
    }, 2000)
  }

  addTask(nomeTask: string){
    setTimeout(()=> {
      this.taskService.addTask(nomeTask)
    }, 10)
  }

  completedTask(id: number) {
    setTimeout(() => {
      this.taskService.completedTask(id)
    }, 10)
  }

  ngOnInit(){
    this.getTask()
  }
}

