import { Alert, Button, Container, Stack, TextField } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../firebase";

function Login() {
  //states
  const [error, setEror] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErorMessage] = useState("");

  // dispatch and navigation
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  //handlers
  const emailHandler = (e) => {
    setEmail(e.target.value.trim());
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value.trim());
  };
  const handlelogin = (e) => {
    e.preventDefault();
    setEror(false);
    setErorMessage("");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //set user state
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        setErorMessage(error.message);
        setEror(true);
      });
  };

  return (
    <>
      <Container
        maxWidth="xs"
        sx={{ pt: "2rem", minHeight: "calc(100vh - 250px)" }}
      >
        <form onSubmit={handlelogin}>
          <Stack gap={3}>
            <TextField label="Email" type="email" onChange={emailHandler} />
            <TextField
              label="Password"
              type="password"
              onChange={passwordHandler}
            />
            {error && <Alert severity="error">{errorMessage}</Alert>}
            <Button
              size="medium"
              variant="contained"
              color="secondary"
              type="submit"
            >
              Login
            </Button>
          </Stack>
        </form>
      </Container>
    </>
  );
}

export default Login;
