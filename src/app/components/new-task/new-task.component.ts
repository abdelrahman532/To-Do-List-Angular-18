import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  constructor(private tasksService: TasksService, private router: Router, private title: Title) {
    this.title.setTitle('Add New Task');
   }

  saveTask(title: any, description: any){
    this.tasksService.saveTask(title.value, description.value);
    this.router.navigate(['/']);
    alert("Task Added Successfully.")
  }

}
