import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './useStyles';

export default function Home() {
  const css = useStyles();

  return (
    <div className={css.container}>
      <Link to="workout">
        Workout
      </Link>
      <Link to="history">
        History
      </Link>
    </div>
  );
}