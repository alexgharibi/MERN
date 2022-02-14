import React from "react";
import { useParams } from "react-router-dom";
import { DUMMY } from "./UserPlaces";
import Input from "../../shared/components/FormsElements/Input";
import Button from "../../shared/components/FormsElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return <h2>Could not find anything</h2>;
  }

  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter valid title"
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter valid description"
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        Update Pkace
      </Button>
    </form>
  );
};

export default UpdatePlace;
