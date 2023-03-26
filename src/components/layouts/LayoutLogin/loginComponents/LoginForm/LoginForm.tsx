import React from "react";
import { Input, Button } from "@chakra-ui/react";
import { useLogin } from "../../../../../hooks/useLogin";
import { useAppSelector } from "../../../../../redux-toolkit/redux-hooks";
import { selectLoading } from "../../../../../redux-toolkit/features/loading/loadingSlice";
import './LoginForm.css';

export const LoginForm = () => {
  const {visible} = useAppSelector(selectLoading);
  const {loginData, setEmail, setPwd, submitLogin} = useLogin();

  return (
    <form
      className={"login_form-form"}
      onSubmit={submitLogin}
    >
      <label><p>email</p>
        <Input
          placeholder='write email...'
          type="email"
          width={200}
          required
          value={loginData.email}
          onChange={(e) => {setEmail(e.target.value)}}
        />
      </label>
      <label><p>password</p>
        <Input
          placeholder='write password...'
          type="password"
          width={200}
          required
          value={loginData.pwd}
          onChange={(e) => {setPwd(e.target.value)}}
        />
      </label>
      <Button
        colorScheme='blue'
        type={"submit"}
        disabled={visible}
        style={visible ? {cursor: 'default'} : {cursor: 'pointer'}}
      >
        login
      </Button>
    </form>
  )
}