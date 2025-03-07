import React from 'react'
import { useMyOrders } from '../../lib/hooks/useMyOrders'

type Props = {}

const MyOrders = (props: Props) => {
  const {
    myOrders,
    isLoading,
    error,
  } = useMyOrders();
  if(!error && myOrders && !isLoading){
    console.log(myOrders[0]);
  }
  return (
    <div>myOrders</div>
  )
}

export default MyOrders