import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {

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
