import { Dispatch, SetStateAction } from 'react';

export interface IProjects {
  id: number;
  name: string;
  projectManagers: [IProjectManager],
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProjectManager {
  id: number;
  name: string;
  age: number;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProjectsContext {
  projects: [IProjects];
  setProjects: Dispatch<SetStateAction<[IProjects]>>;
  pagination: IPagination;
  setPagination: Dispatch<SetStateAction<IPagination>>;
  resetPagination: () => void;
}

export interface IPagination {
  page: number;
  perPage: number;
  total: number;
}

export interface ModalHeaderProps {
  title: string;
  closeModal: () => void;
  parentBoxStyle?: string;
}

export interface IProjectModal {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
}