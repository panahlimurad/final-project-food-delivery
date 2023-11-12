import React from 'react'
import spinner from '../../../../public/svg/Spinners.gif'
import Image from 'next/image'
import styles from './Loader.module.css'
const LoaderClient = () => {
  return (
    <div className={styles.loader}>

       <Image src={spinner} alt="Example GIF" />
    </div>
    
  )
}

export default LoaderClient