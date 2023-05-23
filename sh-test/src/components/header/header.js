import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './header.module.css'
import { Button} from '@mui/material';
import logo from '/src/static/images/mhlogo.png';
import Avatar from "@mui/material/Avatar";

const Header = () => {
  const [date, setDate] = useState((new Date()).getFullYear())
  const router = useRouter();
  const isLogin=true
  return (<div className={styles.wrap}>
    <div className={styles.header}>
      <Image className={styles.logo} src={logo}
        alt="logo show" />
      <div style={{display:'flex'}}>
        {/*<Button className={styles.btn} variant="outlined" size="small"*/}
        {/*        onClick={() => { router.push("/about/result");console.log(123) }}>*/}
        {/*  收藏*/}
        {/*</Button>*/}
        <Button className={styles.btn} variant="text" size="small"
                onClick={() => { router.push("/donor/list")}}>
          筛选
        </Button>
        {/*<Button className={styles.btn} variant="outlined" size="small"*/}
        {/*        onClick={() => { router.push("/favor/list")}}>*/}
        {/*  收藏*/}
        {/*</Button>*/}
        <Button className={styles.btn} variant="text" size="small"
                onClick={() => { router.push("/order/list") }}>
          订单
        </Button>
        {
          isLogin?<Avatar></Avatar>
            :<>
              <Button className={styles.btn} variant="outlined" size="small"
                      onClick={() => { router.push("/login") }}>
                Sign In
              </Button>
              <Button className={styles.btn} variant="outlined" size="small"
                      onClick={() => { router.push("/register") }}>
                Sign Up
              </Button>
            </>
        }


      </div>
    </div>
  </div>
  );
};



export default Header;
