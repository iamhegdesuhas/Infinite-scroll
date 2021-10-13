import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "../Contacts/css/Styles";
import { ContactCard } from "./ContactCard";
import { useGetContacts } from "../../hooks/useGetContacts";
import { useCallback, useRef, useState } from "react";

export const ContactList = () => {
  const classes = useStyles();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { contacts, loading, error, hasMore } = useGetContacts(pageNumber);
  const lastContact = useRef<any>();
  const lastContactCallBack = useCallback(ele=>{
      if(loading) return

      if(lastContact.current) lastContact.current.disconnect()

      lastContact.current=new IntersectionObserver(entry=>{
          if(entry[0].isIntersecting&&hasMore){
            setPageNumber(prevPage=>prevPage+1)
          }
      })

      if(ele) lastContact.current.observe(ele)
  },[loading,hasMore]);

  return (
    <>
      <Grid className={`${classes.centerDiv} ${classes.contactListHeading}`}>
        <Typography className={classes.f24}>Contact List</Typography>
      </Grid>
      <Grid container>
        {contacts.map((ele: any, index: number) => {
          return (
            <Grid item xs={12} md={4} sm={6} key={ele.login.uuid}>
              {index === contacts.length - 1 ? (
                <div ref={lastContactCallBack}>
                  <ContactCard
                    id={ele.login.uuid}
                    name={ele.name}
                    phoneNumber={ele.cell}
                    imageUrl={ele.picture.thumbnail}
                  />
                </div>
              ) : (
                <ContactCard
                  id={ele.login.uuid}
                  name={ele.name}
                  phoneNumber={ele.cell}
                  imageUrl={ele.picture.thumbnail}
                />
              )}
            </Grid>
          );
        })}
      </Grid>
      <Grid className={`${classes.centerDiv} ${classes.loadingInfo}`}>
      {loading && <Typography className={classes.f24}>Loading contacts...</Typography>}
      {error && <Typography className={classes.f24}>Failed to load contacts!</Typography>}
      </Grid>
    </>
  );
};
