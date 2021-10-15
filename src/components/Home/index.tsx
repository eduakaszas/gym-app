import React from 'react';

import Navbar from '../Navbar';

import useStyles from './useStyles';

export default function Home() {
  const css = useStyles();

  return (
    <div className={css.container}>
      <Navbar />
    </div>
  );
}