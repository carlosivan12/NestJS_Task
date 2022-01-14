import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private tasksRepository: TaskRepository,
  ) {}

  getTasks(filterDto: GetTaskFilterDto): Promise<Task[]>{
    return this.tasksRepository.getTasks(filterDto);
  }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOne(id);
    if (!found) {
      throw new NotFoundException('Task with ID not found');
    }
    return found;
  }

  creareTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createtask(createTaskDto);
  }

  async deleteTask(id: string): Promise<void>{
    const result = await this.tasksRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Task With ID Not found');
    }
  }

  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task>{
    const task = await this.getTaskById(id);
    task.status = status;
    await this.tasksRepository.save(task);
    return task;
  }
  /*     getAllTasks() {
        return this.task;
    }
    
    getTaskById(id: string): Task{
        const found = this.task.find((task) => task.id === id);
        if(!found){
            throw new NotFoundException();
        }
        return found;
    }

    creareTask(createTaskDto: CreateTaskDto): Task {
        const {title, description} = createTaskDto
        const task: Task = {
            id: Id(),
            title,
            description,
            status: TaskStatus.OPEN
        };

        this.task.push(task)
        return task
    }

    deleteTask(id: string): void{
        const found = this.getTaskById(id);
        this.task = this.task.filter((task) => task.id !== found.id)
    }

    updateTaskStatus(id: string, status: TaskStatus){
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    } */
}
