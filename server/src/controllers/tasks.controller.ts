import { Request, Response } from 'express';
import { TasksService } from '../services';

export class TasksController {

  private readonly taskService = new TasksService();

  async GetAllProjectTasks(request: Request, response: Response) {
    const allProjectTasks = this.taskService.GetAllProjectTasks();
    return allProjectTasks;
  }

  async CreateTask(request: Request, response: Response) {
    const { newTask } = request.body;
    const createdTask = this.taskService.CreateTask(newTask);
    return createdTask;
  }

  async UpdateTask(request: Request, response: Response) {
    const { taskId, taskData } = request.body;
    const task = this.taskService.UpdateTask(taskId, taskData);
    return task;
  }
}

export default TasksController;
