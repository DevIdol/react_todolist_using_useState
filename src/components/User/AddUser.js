import React, { Fragment, useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorMessage from '../UI/ErrorModel'
import classes from './AddUser.module.css'

const AddUser = (props) => {
  const [enterUserName, setEnterUserName] = useState('')
  const [enterAge, setEnterAge] = useState('')
  const [error, setError] = useState()
  const userNameHandler = (event) => {
    setEnterUserName(event.target.value)
  }
  const ageHandler = (event) => {
    setEnterAge(event.target.value)
  }
  const addUserHandler = (event) => {
    event.preventDefault()
    if (enterUserName.length === 0 || enterAge.length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter your name and age.',
      })
      return
    }
    if (+enterAge < 1) {
      setError({
        title: 'Invalid Input',
        message: "Age can't be less than 0.",
      })
      return
    }
    props.onAddUser(enterUserName, enterAge)
    setEnterUserName('')
    setEnterAge('')
  }
  const errorHandler = () => {
    setError(null);
  }
  return (
    <Fragment>
      {error && <ErrorMessage title={error.title} message={error.message} onConfirm={errorHandler}/>}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            onChange={userNameHandler}
            value={enterUserName}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            onChange={ageHandler}
            value={enterAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  )
}

export default AddUser;
