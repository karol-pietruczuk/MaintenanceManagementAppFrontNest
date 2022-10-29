import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import { useLogin } from "../../../../../hooks/useLogin";
import { CommonLoadingBox } from "../../../../common/CommonLoadingBox/CommonLoadingBox";
import './LoginForm.css';

export const LoginForm = () => {
  const {loginData, setEmail, setPwd, submitLogin, loading} = useLogin();
  const [visible, setVisible] = useState(false);

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
        disabled={visible || loading}
        style={visible || loading ? {cursor: 'default'} : {cursor: 'pointer'}}
      >
        login
      </Button>
      <CommonLoadingBox loading={loading} visible={visible} setVisible={setVisible}/>
    </form>
  )
}