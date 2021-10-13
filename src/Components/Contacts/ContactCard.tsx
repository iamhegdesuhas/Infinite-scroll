import { Avatar, Grid, Typography } from "@material-ui/core"
import { useStyles } from "./css/Styles"
export interface ContactCardProps{
id: string,
name:{
    title: string,
    first: string,
    last: string,
},
phoneNumber:string,
imageUrl: string
}
export const ContactCard=(props:ContactCardProps)=>{
    const classes=useStyles()
    const {id,name,phoneNumber,imageUrl}=props
    return(
        <Grid className={classes.contactCardWrapper} key={`${id}-card`}>
            <Grid container className={classes.verticalCenter}>
            <Avatar alt="Remy Sharp" src={imageUrl}/>
            <Grid className={classes.infoContainer}>
                <Typography className={classes.f18}>{name.first} {name.last}</Typography>
                <Typography className={classes.f18}>{phoneNumber}</Typography>
            </Grid>
            </Grid>
        </Grid>
    )
}