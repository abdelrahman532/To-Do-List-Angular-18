import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task-info',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, FormsModule],
  templateUrl: './task-info.component.html',
  styleUrl: './task-info.component.css'
})
export class TaskInfoComponent implements OnInit{
  
  taskId: any;
  task: any;

  constructor(private title: Title,private router: Router ,private route: ActivatedRoute, private tasksService: TasksService) {
    this.title.setTitle('Task Information');
   }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.task = this.tasksService.tasks[this.taskId];
  }

  updateTask() {
    this.tasksService.updateTask(this.taskId, this.task);
    this.router.navigate(['/']);
    alert('Task Updated Successfully');
  }

  deleteTask() {
    this.tasksService.deleteTask(this.taskId);
    this.router.navigate(['/']);
    alert('Task Deleted Successfully');
  }
}