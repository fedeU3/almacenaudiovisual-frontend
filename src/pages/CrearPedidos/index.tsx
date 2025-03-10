import React from 'react'
import { useCreateOrders } from '../../lib/hooks/useCreateOrders'


type Props = {}

const createOrder  = (props: Props) => {
  const {
    createOrder,
    isLoading,
    error,
  } = useCreateOrders();
  if(!error && createOrder && !isLoading){
    console.log(createOrder[0]);
  }
  return (
    <div>createOrder</div>
  )
}

export default createOrder