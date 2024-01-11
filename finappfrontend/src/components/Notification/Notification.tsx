import { MantineProvider } from '@mantine/core'
import React from 'react'
import NotifyTable from './notifytable'
import classes from './Notification.module.css'
function Notification() {
  return (
    <div>
      <div className={classes.table_container}>
        <MantineProvider>
          <NotifyTable></NotifyTable>
        </MantineProvider>
      </div>
    </div>
  )
}

export default Notification