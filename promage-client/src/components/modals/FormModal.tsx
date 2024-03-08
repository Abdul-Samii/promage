import React, { FormEvent, useState } from "react";
import Modal from "react-modal";

import ModalHeader from "./ModalHeader";
import CreateProjectForm from "./CreateProjectFields";
import { IProjectModal } from "../../utils";
import CreateTaskForm from "./CreateTaskFields";


const FormModal = ({
  isOpen,
  closeModal,
  title,
  projectId = 0,
}: IProjectModal) => {
  const initialFormValues = {
    title: "",
  };
  

  const fileNameModalCustomStyles = {
    content: {
      top: "50%",
      left: "50%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "35%",
      minHeight: "fit-content",
    },
    overlay: {
      background: "rgba(71,84,93,0.8)",
      zIndex: 1,
    },
  };

  const submitData = async (e: FormEvent) => {
    alert("here")
    e.preventDefault();
    
    closeModal();
  };
  
  

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={fileNameModalCustomStyles}
      ariaHideApp={false}
    >
      <div className="space-y-4 sm:p-8">
        <ModalHeader
          title={title}
          closeModal={closeModal}
        />
        <div className="space-y-4">
          {
            title === 'Create Task' ?
              <CreateTaskForm closeModal={closeModal} projectId={projectId} />
            :
            <CreateProjectForm submitData={submitData} closeModal={closeModal} />
          }
          {/* <div className="flex justify-between">
            <button
              type="submit"
              onClick={closeModal}
              title="Cancel"
              className="text-white bg-gray-500 hover:bg-gray-600 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={submitData}
              title="Validate"
              className='text-white bg-gray-700
              font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-secondary_bg_color'
            >
              Submit
            </button>
          </div> */}
        </div>
      </div>
    </Modal>
  );
};

export default FormModal;
