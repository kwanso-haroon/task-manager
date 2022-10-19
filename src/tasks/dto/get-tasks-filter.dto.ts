import { IsIn, IsOptional, IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../task,model';

export class GetTasksFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;

  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status: TaskStatus;
}
