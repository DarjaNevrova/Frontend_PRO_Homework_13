import React from 'react'
import { useSelector } from 'react-redux'
import UsersItem from '../../components/UsersItem'
import style from './style.module.css';

export default function UsersPage() {

  const users = useSelector(({ users }) => users)

  return (
    <div className={style.card}>
      {
        users.map(user => <UsersItem key={user.id} {...user} />)
      }
    </div>
  )
}