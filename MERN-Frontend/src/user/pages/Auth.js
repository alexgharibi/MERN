import React from "react";
import "./Auth.css";
import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormsElements/Input";
import Button from "../../shared/components/FormsElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card className="authentication">
      <h2>Login required</h2>
      <hr />
      <form>
        <Input
          id="email"
          element="input"
          type="email"
          label="E-Mail"
          onInput={inputHandler}
          validators={[VALIDATOR_EMAIL()]}
          errorText=" Please enter a valid email address"
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText=" Please enter a valid password"
        />
        <Button type="submit" disabled={!formState.isValid}>
          LOGIN
        </Button>
      </form>
    </Card>
  );
};

export default Auth;