import * as React from 'react';

import Paper from '@mui/material/Paper';

import Avatar from "@mui/material/Avatar";
import {Button, Card, Checkbox, FormControlLabel, Grid, TextField} from "@mui/material";
import styles from "./Favor.module.css";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import {list} from "@/data/donor/list";
import Image from "next/image";
import avatarGirl1 from "@/static/images/avatar/girl1.png";
import avatarGirl2 from "@/static/images/avatar/girl2.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Favor() {
  const handleSubmit=()=>{

  }
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  return (
    <Paper sx={{ width: '100%', p: 4 }} elevation={0}>
      <div style={{fontSize:'20px',fontWeight:'500',padding:'10px 0 10px 0'}}>
        Favorites
      </div>
      {/*<Paper sx={{ width: '100%', p: 4 }} elevation={1}>*/}
        <div className={styles.listWrap}>
          {list.map((a,i)=>{
            return <Card className={styles.donorItem} key={a.name}>
              <div className={styles.donorBasic}>
                <div>
                  <Image className={styles.donorAvatar} alt="Remy Sharp" src={i?avatarGirl1:avatarGirl2}/>
                  <div style={{textAlign:'center'}}>
                    Sara
                  </div>
                </div>
                <div className={styles.donorBasic}>
                  <div className={styles.basicWrap}>
                    <div className={styles.basicItem}>
                      Height: <span>{a.height}</span>
                    </div>
                    <div className={styles.basicItem}>
                      Weight: <span>{a.weight}</span>
                    </div>
                    <div className={styles.basicItem}>
                      Eye Color: <span>{a.eye_color}</span>
                    </div>
                    <div className={styles.basicItem}>
                      Hair Color: <span>{a.hair_color}</span>
                    </div>
                  </div>
                  <div className={styles.basicWrap}>
                    <div className={styles.basicItem}>
                      Blood Type: <span>{a.blood_type||'A'}</span>
                    </div>
                    <div className={styles.basicItem}>
                      Ethnicity: <span>{a.ethnicity||'African'}</span>
                    </div>
                    <div className={styles.basicItem}>
                      Marriage status: <span>{a.marriage_status||'Single'}</span>
                    </div>
                    <div className={styles.basicItem}>
                      Education: <span>{a.highest_education||'GED'}</span>
                    </div>
                  </div>
                </div>

              </div>
              <div className={styles.btnWrap}>
                <Button variant={"text"} className={styles.btn}>
                  <FavoriteBorderIcon></FavoriteBorderIcon>
                </Button>
                <div>
                  <Button variant={"outlined"} className={styles.btn} onClick={handleClickOpen('paper')}>Detail</Button>
                  <Button variant={"contained"} className={styles.btn}>Purchase</Button>
                </div>
              </div>
            </Card>
          })}
        </div>

      {/*</Paper>*/}

    </Paper>

  );
}
