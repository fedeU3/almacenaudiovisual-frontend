import React from 'react'
import { useMyOrders } from '../../lib/hooks/useMyOrders'

type Props = {}

const MyOrders = (props: Props) => {
  const {
    books,
    isLoading,
    error,
  } = useMyOrders();
  if(!error && books && !isLoading){
    console.log(books[0]);
  }
  return (
    <div>Books</div>
  )
}

export default MyOrders