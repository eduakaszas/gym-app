import React from 'react';
import { Route, Routes } from 'react-router-dom';

import History from '../History';
import Home from '../Home';
import Workout from '../Workout';

import useStyles from './useStyles';

export default function Entry() {
  const css = useStyles();

  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/workout" element={ <Workout /> } />
        <Route path="/history" element={ <History /> } />
      </Routes>
    </div>
  );
}
