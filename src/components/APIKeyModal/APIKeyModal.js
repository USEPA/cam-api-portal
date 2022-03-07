import React from "react";
import { APIKeyRequestForm } from "./APIKeyRequestForm";
import {
  Modal,
  ModalHeading,
  ModalToggleButton,
} from "@trussworks/react-uswds";

export const APIKeyModal = () => {
  const buttonText = "Request an API Key";
  const modalHeading = "Generate an API Key";

  const modalRef = React.useRef(false);

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
        <APIKeyRequestForm />
      </Modal>
    </div>
  );
};
