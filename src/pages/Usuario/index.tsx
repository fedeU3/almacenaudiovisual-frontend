import React from 'react'
import { useUser } from '../../lib/hooks/useUser'

type Props = {}

const Books = (props: Props) => {
  const {
    books,
    isLoading,
    error,
  } = useUser();
  if(!error && books && !isLoading){
    console.log(books[0]);
  }
  return (
    <div>Books</div>
  )
}

export default <User></User>