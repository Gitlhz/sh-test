"use client";
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import styles from './form.module.css'
import Image from 'next/image';
const Loading = () => {

  return (<>
    <div className={styles.loading}>
      <p>loading....</p>
    </div>
  </>

  );
};

Loading.propTypes = {
  className: PropTypes.string
};

export default Loading;
