import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   centerDiv:{
       display:"flex",
       justifyContent: "center"
   },
   verticalCenter:{
    alignItems: "center"
   },
   contactListHeading:{
    padding:10
   },
   f24:{
     fontSize:24
   },
   f18:{
    fontSize:18
  },
   contactCardWrapper:{
     backgroundColor: "#ffffff",
     zIndex:1,
     boxShadow:"0 3px 10px rgb(0 0 0 / 0.2)",
     padding: 25,
     margin:25
   },
   infoContainer:{
     paddingLeft: 25
   },
   loadingInfo:{
     padding: 25
   },
   margin15:{
     margin:"15px 0px 15px 0px"
   },
   loginContainer:{
    backgroundColor: "#ffffff",
    zIndex:1,
    boxShadow:"0 3px 10px rgb(0 0 0 / 0.2)",
    padding: 25,
   },
   blackBg:{
     backgroundColor:"black"
   },
   loginCenter:{
    alignItems:"center",
    height:"100vh"
   },
   error:{
     color:"red",
     fontSize:14
   },
   header:{
    backgroundColor: "blue",
    padding:10,
    position: "sticky",
    top:0,
    zIndex:2
   }
}));
