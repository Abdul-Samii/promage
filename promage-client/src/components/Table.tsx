import { FC } from 'react';

import { IProjects, ITasks } from '../utils';
import { formatDate } from '../helpers/DateFromater';
import { isDatePassed } from '../helpers/checkDatePassed';
import { useNavigate } from 'react-router-dom';
import TableHeader from './TableHeader';
import ProjectsBody from './ProjectsBody';
import TasksBody from './TasksBody';

export interface ITable {
  projects?: [IProjects],
  tasks?: [ITasks],
  type: string,
}

const Table: FC<ITable> = ({ projects, tasks, type }) => {
  
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-collapse border-gray-300">
        <TableHeader type={type} />
        {
          type === 'projects' ? 
            <ProjectsBody projects={projects} />
          : <TasksBody tasks={tasks}/>
        }
        
      </table>
    </div>
  );
};

export default Table;
