import { Alert, Button, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../firebase";

function Register() {
  //states
  const [error, setEror] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
  const handleCreateUser = (e) => {
    e.preventDefault();
    setEror(false);
    setErrorMessage("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //set user state
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setEror(true);
      });
  };

  return (
    <>
      <Container
        maxWidth="xs"
        sx={{ pt: "2rem", minHeight: "calc(100vh - 250px)" }}
      >
        <form onSubmit={handleCreateUser}>
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
              Register
            </Button>
          </Stack>
        </form>
      </Container>
    </>
  );
}

export default Register;
