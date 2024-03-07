import { FC } from 'react';

import { IProjects } from '../utils';
import { formatDate } from '../helpers/DateFromater';
import { isDatePassed } from '../helpers/checkDatePassed';
import { useNavigate } from 'react-router-dom';

export interface ITable {
  projects: [IProjects],
}

const Table: FC<ITable> = ({ projects }) => {
  
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-collapse border-gray-300">
        <thead className="bg-gray-700 text-white">
          <tr className="text-center text-sm">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Manager</th>
            <th className="py-2 px-4">Start Date</th>
            <th className="py-2 px-4">End Date</th>
            <th className="py-2 px-4">Is Running</th>
          </tr>
        </thead>
        <tbody>
          {
            projects.map((project, index) => (
              <tr className="text-center text-xs cursor-pointer hover:bg-gray-200" onClick={() => navigate(`/tasks/${project.id}`)}>
                <td className="py-2 px-4">{project.name}</td>
                <td className="py-2 px-4">
                {
                project.projectManagers.length > 0 ?
                  <select>
                    {
                      project.projectManagers.map((manager, index) => <option key={index}>{manager.name}</option> )
                    }
                    <option></option>
                  </select>
                  : <span className='text-red-600 font-bold'>not-assigned</span>
                }
                </td>
                <td className="py-2 px-4">{formatDate(project.startDate)}</td>
                <td className="py-2 px-4">{formatDate(project.endDate)}</td>
                <td className="py-2 px-4">
                  <input type='checkbox' className='bg-red-400 text-blue-500' disabled checked={!isDatePassed(project.endDate)} />
                </td>
              </tr>
            ))
          }
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
