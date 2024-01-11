import React from 'react'
import { useParams } from 'react-router-dom'
import classes from './Notification.module.css'
import { useStore } from '../../store/store'
import { Button } from '@mantine/core';
import { MantineProvider } from '@mantine/core'
import { UserCardImage } from './UserCardImage'
import { FileUploadComponent } from './FileUpload'
function NotifySpace() {
    const { id } = useParams()
    const { notification, setNotification } = useStore()
    const Data = notification.filter((data) => data.id === id)[0]
    console.log("notificaiton spaced detected!!", id, Data)
    const RequestHandler: () => void = () => {
        Data.requested = true;
        let updatedRequestkey = notification.map((data) => {
            if (data.id == id) {
                return Data
            }
            else return data
        })
        setNotification(updatedRequestkey)
        console.log(notification)
    };

    return (
        <>
            <MantineProvider>

                <div className={classes.notifyspace}>
                    <div className={classes.body}>
                        <div className={classes.profile}>
                            <div className={classes.profilecard}>
                                {
                                    <UserCardImage name={Data.name} />
                                }
                            </div>
                            <div className={classes.pricecard}>
                                <p>Total Amount : {String(Data.amount)}</p>
                                <p>Monthly pay: {((Data.amount as number) / (Data.interest as number))}</p>
                            </div>
                        </div>
                        <div className={classes.request}>
                            <div className={classes.upload}>
                                <FileUploadComponent />
                            </div>
                            <div className={classes.submitrequest}>
                                <Button variant='filed' onClick={RequestHandler}>Request</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </MantineProvider>

        </>
    )
}

export default NotifySpace