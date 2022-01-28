import { Test } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TaskRepository } from './task.repository';

const mockTasksRepository = () => ({
  getTasks: jest.fn()
});

describe('TasksService', () => {
  let tasksService: TasksService;
  let tasksRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: TaskRepository, useFactory: mockTasksRepository },
      ],
    }).compile();

    tasksService = module.get(TasksService);
    tasksRepository = module.get(TaskRepository);
  });

  describe('gestTask', () =>{
    it('Calls TasksRepository.getTasks and retusns the result', async () =>{
      tasksRepository.getTasks.mockResolvedValue('SomeValue');
      const result = await tasksService.getTasks(null);
      expect(result).toEqual('SomeValue');
    })
  })
  
});
