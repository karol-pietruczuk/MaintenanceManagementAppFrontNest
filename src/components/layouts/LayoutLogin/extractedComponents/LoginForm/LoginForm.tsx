import { Input, Button, useToast, ToastId } from "@chakra-ui/react";
import { useLogin } from "../../../../../hooks/useLogin";
import './LoginForm.css';
import { CommonLoadingBox } from "../../../../common/CommonLoadingBox/CommonLoadingBox";
import { useEffect, useRef, useState } from "react";

export const LoginForm = () => {
  const {loginData, setEmail, setPwd, submitLogin, loading, error, setError} = useLogin();
  const [visible, setVisible] = useState(false);
  const toast = useToast()
  const toastIdRef = useRef<ToastId>()

  useEffect(() => {
    if (error) {
      toastIdRef.current = toast({ description: error, isClosable: true, status: "error" });
      setError('');
    }
  },[error])

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