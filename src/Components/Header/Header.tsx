import { Button, Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import { useStyles } from "../Contacts/css/Styles";

export const Header = (props: { setLoggedIn: (val: boolean) => void }) => {
  const { setLoggedIn } = props;
  const classes=useStyles()
  const history = useHistory();
  return (
    <Grid
    container
    direction="row"
    justifyContent="flex-end"
    alignItems="center" className={classes.header}>
      <Button
        variant="contained"
        onClick={() => {
            sessionStorage.clear()
          history.push("/")
          setLoggedIn(false);
        }}
      >
        Log Out
      </Button>
    </Grid>
  );
};
