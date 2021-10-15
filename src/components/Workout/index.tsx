import React from 'react';

import useStyles from './useStyles';

export default function Home() {
  const css = useStyles();

  return (
    <div className={css.container}>
      Workout
    </div>
  );
}