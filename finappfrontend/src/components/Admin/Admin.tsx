import React, { useState } from 'react';
import { Fieldset, MantineProvider, TextInput, Button, NumberInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import classes from './admin.module.css';
import { useStore } from '../../store/store';
import { ProgressCardColored } from '../progressCard/ProgressCardColored';
import { TiTick } from "react-icons/ti";
import { MdCancel, MdOutlineClear } from "react-icons/md";
import { CloseButton } from '@mantine/core';

function Admin() {
  const { setNotification, notification } = useStore();
  const { setBittingAmount, bittingAmount } = useStore();
  const [formValues, setFormValues] = useState({
    id: '',
    name: '',
    amount: 0,
    email: '',
    Date_in: null,
    Date_out: null,
    interest: 0,
    requested: false
  });

  const handleSubmit = () => {
    formValues.id = (notification.length + 1).toString();
    notification.push(formValues)
    setNotification(notification);
    console.log(notification)
    setFormValues({
      id: '',
      name: '',
      amount: 0,
      email: '',
      Date_in: null,
      Date_out: null,
      interest: 0,
      requested: false
    });
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const removeHandler = (id: string, name: string) => {
    let filterdNotification = notification.filter((data) => data.id != id);
    if (name == 'tick') {
      let filterdNotification = notification.filter((data) => data.id == id);
      setBittingAmount(Number(bittingAmount) - Number(filterdNotification[0].amount))
    }
    setNotification(filterdNotification)
    console.log(filterdNotification)
  }

  return (
    <>
      <MantineProvider>
        <div className={classes.progress_container}>
          <div className={classes.progresscard}>
            <MantineProvider>
              <ProgressCardColored />
            </MantineProvider>
          </div>
        </div>
        <div className={classes.adminform_container}>
          <div className={classes.adminform}>
            <MantineProvider>
              <Fieldset legend="Personal information">
                <TextInput
                  label="Finance name"
                  placeholder="Your name"
                  value={formValues.name}
                  onChange={(event) => handleInputChange('name', event.currentTarget.value)}
                />
                <TextInput
                  label="Amount to Spend"
                  placeholder="Amount"
                  value={formValues.amount}
                  onChange={(event) => handleInputChange('amount', event.currentTarget.value)}
                  mt="md"
                />
                <TextInput
                  label="Email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={(event) => handleInputChange('email', event.currentTarget.value)}
                  mt="md"
                />
                <DatePickerInput
                  dropdownType="modal"
                  label="Pick from date"
                  value={formValues.Date_in}
                  onChange={(date) => {
                    setFormValues((prevValues: any) => ({ ...prevValues, Date_in: date }));
                  }}
                />
                <DatePickerInput
                  dropdownType="modal"
                  label="Pick from date"
                  value={formValues.Date_out}
                  onChange={(date) => {
                    setFormValues((prevValues: any) => ({ ...prevValues, Date_out: date }));
                  }}
                />
                <NumberInput
                  label="Interest in percentage"
                  placeholder="Amount"
                  value={formValues.interest}
                  min={0}
                  max={99}
                  onChange={(event) => handleInputChange('interest', event.toString())}
                  mt="md"
                />
                <Button onClick={handleSubmit} mt="md">
                  Submit
                </Button>
              </Fieldset>
            </MantineProvider>
          </div>
          <div className={classes.access}>
            <p>Finace Notification</p>
            <div className={classes.access_container}>
              {
                notification.map((data) => (
                  data.requested ?
                    <div className={classes.access_card}>
                      <div className={classes.details}>
                        {data.name}
                      </div>
                      <div className={classes.functions}>
                        <TiTick size={30} color='green' onClick={() => removeHandler(data.id, "tick")} style={{ cursor: 'pointer' }} />
                        <CloseButton onClick={() => removeHandler(data.id, "close")} />
                      </div>
                    </div> : <></>
                ))
              }
            </div>
          </div>
        </div>
      </MantineProvider>
    </>
  );
}

export default Admin;
