import ProjectsController from '../controllers/projects.controller';
import TasksController from '../controllers/tasks.controller';
import type { Route } from '../utils/types';

export const TasksRoutes: Array<Route> = [
  {
    method: 'get',
    route: '/api/tasks',
    middlewares: [],
    controller: TasksController,
    action: 'GetAllProjectTasks',
  },
  {
    method: 'patch',
    route: '/api/tasks',
    middlewares: [],
    controller: TasksController,
    action: 'UpdateTask',
  },
  {
    method: 'post',
    route: '/api/tasks',
    middlewares: [],
    controller: TasksController,
    action: 'CreateTask',
  },
];
