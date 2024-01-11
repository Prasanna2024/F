import React from 'react'
import classes from './auth.module.css'
import { InputTooltip } from './InputTooltip'
import { MantineProvider } from '@mantine/core';

function Login() {
  return (
    <div className={classes.login}>
      <div className={classes.login_container}>
      <MantineProvider>
      <InputTooltip/>
      </MantineProvider>
      </div>
    </div>
  )
}

export default Login