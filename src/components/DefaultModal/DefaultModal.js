import React from "react";
import {
  Modal,
  ModalHeading,
  ModalToggleButton,
} from "@trussworks/react-uswds";

export const DefaultModal = ({
  buttonText,
  modalRef,
  modalHeading,
  modalBody,
}) => {
  const onToggle = () => {
    modalRef.current = !modalRef.current;
  };

  return (
    <div>
      <ModalToggleButton
        className="usa-button"
        modalRef={modalRef}
        opener={onToggle}
      >
        {buttonText}
      </ModalToggleButton>
      <Modal
        ref={modalRef}
        id="modal-component"
        aria-labelledby="modal-heading"
        aria-describedby="modal-decription"
      >
        <ModalHeading id="modal-heading">{modalHeading}</ModalHeading>
        {modalBody}
      </Modal>
    </div>
  );
};
