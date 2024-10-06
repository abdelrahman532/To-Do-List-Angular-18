import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component'; 
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TaskInfoComponent } from './components/task-info/task-info.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home Page',
        component: HomeComponent,
    },

    {
        path: 'new-task',
        title: 'New Task',
        component: NewTaskComponent,
    },

    {
        path: 'task-info/:id',
        title: 'Task Info',
        component: TaskInfoComponent,
    },

    {
        path: 'task-info',
        title: 'Task Info',
        component: TaskInfoComponent,
    },

    {
        path: '**',
        title: 'Not Found',
        component: NotFoundComponent,
    },
];
