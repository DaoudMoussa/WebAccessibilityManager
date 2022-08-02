import { useSelect } from '@mui/base'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const Home: NextPage = () => {
  const counter = useSelector((store: RootState) => store.counter);
  console.log(counter);
  
  return (
    <div>
      Homepage
    </div>
  )
}

export default Home
