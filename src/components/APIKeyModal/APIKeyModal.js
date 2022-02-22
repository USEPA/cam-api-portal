import React from "react";
import {
  ButtonGroup,
  Button,
  ModalToggleButton,
  Form,
  Fieldset,
  Label,
  TextInput,
  Textarea,
} from "@trussworks/react-uswds";
import { DefaultModal } from "../DefaultModal/DefaultModal";

function APIGenerationForm({ handleSubmit, state, handleChange, modalRef }) {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Fieldset legend="Sign up for an application programming interface (API) key to access and use web services available on the Data.gov developer network.">
          <p>
            <abbr title="required" className="usa-hint usa-hint--required">
              *
            </abbr>{" "}
            Required fields
          </p>
          <Label htmlFor="first-name">
            First name{" "}
            <abbr title="required" className="usa-label--required">
              *
            </abbr>
          </Label>
          <TextInput
            id="first-name"
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
            autoCapitalize="off"
            autoCorrect="off"
            required={true}
          />
          <Label htmlFor="last-name">
            Last name{" "}
            <abbr title="required" className="usa-label--required">
              *
            </abbr>
          </Label>
          <TextInput
            id="last-name"
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
            autoCapitalize="off"
            autoCorrect="off"
            required={true}
          />
          <Label htmlFor="email">
            Email address{" "}
            <abbr title="required" className="usa-label--required">
              *
            </abbr>
          </Label>
          <TextInput
            id="email"
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
            inputMode="email"
            autoCapitalize="off"
            autoCorrect="off"
            required={true}
          />
          <Label htmlFor="api-use" hint="(optional)">
            How will you use the APIs?
          </Label>
          <Textarea id="api-use" name="api-use" />
          <ButtonGroup>
            <Button type="submit">Sign up</Button>
            <ModalToggleButton
              modalRef={modalRef}
              closer
              unstyled
              className="padding-105 text-center"
            >
              Cancel
            </ModalToggleButton>
          </ButtonGroup>
        </Fieldset>
      </Form>
    </div>
  );
}

export const APIKeyModal = () => {
  const buttonText = "Request an API Key";
  const modalHeading = "Generate an API Key";

  let modalRef = React.useRef(false);

  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    apiUse: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(
      "Hello, " + state.firstName + " " + state.lastName + " @" + state.email
    );
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setState({
      itemvalues: [{}],
    });
  }

  return (
    <div>
      <DefaultModal
        buttonText={buttonText}
        modalRef={modalRef}
        modalHeading={modalHeading}
        modalBody={
          <APIGenerationForm
            handleSubmit={handleSubmit}
            state={state}
            handleChange={handleChange}
            modalRef={modalRef}
          />
        }
      />
    </div>
  );
};
