import axios, { setInterceptors } from '../helpers/AxiosConfig';

setInterceptors();
export const getAllProjects = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'api/projects',
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createProject = async (data: { name: string, startDate: string, endDate: string}) => {
  try {
    const response = await axios({
      method: 'POST',
      url: 'api/projects',
      data: { newProject: data },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
