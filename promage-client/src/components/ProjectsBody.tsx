import { useNavigate } from 'react-router-dom';
import { formatDate } from '../helpers/DateFromater';
import { IProjects } from '../utils';
import { isDatePassed } from '../helpers/checkDatePassed';
import FormModal from './modals/FormModal';
import { useState } from 'react';

const ProjectsBody = ({ projects }: { projects: [IProjects] | undefined }) => {

  const [show, setShow] = useState(false);
  const [projectId, setProjectId] = useState(0);
  const handleClose = () => setShow(false);
  const handleOpenModal = (id: number) => {
    setProjectId(id);
    setShow(true);
  }
  const navigate = useNavigate();

  const showTasks = (project: IProjects) => {
    if (project?.tasks.length > 0) {
       navigate(`/tasks/${project?.id}`);
    } else {
      alert("No Tasks Found");
    }
  }

  return (
    <tbody>
      <FormModal
        isOpen={show}
        closeModal={handleClose}
        title='Create Task'
        projectId={projectId}
      />
  {
    projects?.map((project, index) => (
      <tr className="text-center text-xs cursor-pointer hover:bg-gray-200" onClick={() => showTasks(project)}>
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
        <td className="py-2 px-4" onClick={() => handleOpenModal(project.id)}>Create Task</td>
      </tr>
    ))
  }
  </tbody>
  )
}
export default ProjectsBody;
