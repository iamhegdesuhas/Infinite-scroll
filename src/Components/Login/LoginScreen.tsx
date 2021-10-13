import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "../Contacts/css/Styles";

const fieldInfo = [
  {
    label: "User Name",
    id: "userName",
    type: "text",
  },
  {
    label: "Password",
    id: "password",
    type: "password",
  },
];
export const LoginScreen = (props:{setLoggedIn:(val:boolean)=>void}) => {
  const history = useHistory();
  const {setLoggedIn}=props
  const classes = useStyles();
  const [inputs, setInputs] = useState<{ [index: string]: string }>({});
  const [error, setError] = useState<string>("");
  const handleChange = (value: any, id: string) => {
    setInputs((prevVal) => {
      return { ...prevVal, [id]: value };
    });
  };
  const handleLogin = () => {
    const isEmpty=Object.keys(inputs).some((key) => {
      if (!inputs[key]) {
        setError("Please enter User Name and Password") 
        return true
      }
      return false
    });
    if(isEmpty) return

    if(inputs.userName!=="foo" ||inputs.password!=="bar") {
        setError("Invalid Credentials") 
        return  
    }
    sessionStorage.setItem("loggedIn", "true");
    setLoggedIn(true)
    history.push("/home")
  };
  return (
    <Grid
      className={`${classes.centerDiv} ${classes.blackBg} ${classes.loginCenter}`}
    >
      <Grid className={classes.loginContainer} xs={8} sm={4}>
        <Typography className={classes.margin15}>Please Login</Typography>
        <Grid container direction="column">
          {fieldInfo.map((ele) => {
            return (
              <Grid item className={classes.margin15}>
                <TextField
                  fullWidth
                  id={ele.id}
                  label={ele.label}
                  variant="outlined"
                  value={inputs[ele.id]}
                  onChange={(e) => {
                    handleChange(e.target.value, ele.id);
                  }}
                  type={ele.type}
                />
              </Grid>
            );
          })}
        </Grid>
        <Button
          variant="contained"
          className={classes.margin15}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Grid>{error && <Typography className={classes.error}>{error}</Typography>}</Grid>
      </Grid>
    </Grid>
  );
};
