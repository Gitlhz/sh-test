import React, { useEffect, useState } from 'react';
import styles from './footer.module.css'
import Link from 'next/link';

const Footer = () => {
  const [date, setDate] = useState((new Date()).getFullYear())
  return (<>
    <div className={styles.footer}>
      <span>Copyright © {date} | </span>
      <span>morehealth.com </span>
      <Link href="/policy">Terms of Use Privacy Policy</Link>
      {/*<span onClick={() => { router.push("/policy") }}>Terms of Use Privacy Policy</span>*/}
    </div>
  </>

  );
};

export default Footer;
