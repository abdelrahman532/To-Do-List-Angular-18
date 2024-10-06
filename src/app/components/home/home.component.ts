import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  constructor (public tasksService: TasksService, private router: Router, private title: Title) {
    this.title.setTitle('Home Of Tasks');
   }

  deleteTask(i : number){
    this.tasksService.deleteTask(i);
  }

}
