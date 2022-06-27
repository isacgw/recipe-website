import Veggie from '../Veggie'
import Popular from '../Popular'
import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
        <Veggie/>
        <Popular/>
    </motion.div>
  )
}

export default Home