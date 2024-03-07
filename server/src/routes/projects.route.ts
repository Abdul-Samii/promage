import ProjectsController from '../controllers/projects.controller';
import type { Route } from '../utils/types';

export const ProjectsRoutes: Array<Route> = [
  {
    method: 'get',
    route: '/api/projects',
    middlewares: [],
    controller: ProjectsController,
    action: 'GetAllProjects',
  },
  {
    method: 'get',
    route: '/api/projects/:id',
    middlewares: [],
    controller: ProjectsController,
    action: 'GetProjectById',
  },
  {
    method: 'post',
    route: '/api/projects',
    middlewares: [],
    controller: ProjectsController,
    action: 'CreateProject',
  },
];
