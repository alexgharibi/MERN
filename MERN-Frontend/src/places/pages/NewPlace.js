import React from "react";
import "./NewPlace.css";
import Input from "../../shared/components/FormsElements/Input";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        type="text"
        label="Title"
        element="input"
        validators={[]}
        errorText="Please enter valid title"
      />
    </form>
  );
};

export default NewPlace;
