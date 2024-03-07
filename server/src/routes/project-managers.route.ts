import ProjectManagersController from '../controllers/project-managers.controller';
import type { Route } from '../utils/types';

export const ProjectManagersRoutes: Array<Route> = [
  {
    method: 'post',
    route: '/api/project-managers',
    middlewares: [],
    controller: ProjectManagersController,
    action: 'CreateProjectManager',
  },
  {
    method: 'patch',
    route: '/api/project-managers',
    middlewares: [],
    controller: ProjectManagersController,
    action: 'AssignProject',
  },
];
