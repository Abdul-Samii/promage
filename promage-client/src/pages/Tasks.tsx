import { useParams } from 'react-router-dom';
import { Table } from '../components';
import { useContext, useEffect, useState } from 'react';
import { TasksContext } from '../contexts/TasksContext';
import FormModal from '../components/modals/FormModal';

const Tasks = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpenModal = () => setShow(true);
  const { getProjectTasks, tasks } = useContext(TasksContext);
  const { id } = useParams();
  
  const handleGetAllTasks = async () => {
    if (id) {
      await getProjectTasks(+id);
    }
  }
  
  useEffect(() => {
    handleGetAllTasks()
  }, [id])

  return (
    <div>
      <FormModal
        isOpen={show}
        closeModal={handleClose}
        title='Create Task'
      />
      
      <div className='py-4 px-4 flex justify-between'>
        <h1 className='text-sm'>Project: <span className='font-bold'>{tasks[0].project.name}</span></h1>
        <button onClick={handleOpenModal} className='border-[1px] border-gray-700 rounded-md text-xs p-1.5'>
          New Task
        </button>
      </div>
      <Table tasks={tasks} type='tasks'  />
    </div>
  )
}
export default Tasks;
