import React from 'react'
import { useUsers } from '../../lib/hooks/useUsers'

type Props = {}

const Users  = (props: Props) => {
  const {
    users,
    isLoading,
    error,
  } = useUsers();
  
  if(!error && users && !isLoading){
    console.log(users[0]);
  }
  return (
    <div>Usuarios</div>
  )
}

export default Users