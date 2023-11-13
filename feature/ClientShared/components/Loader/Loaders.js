import React from 'react'
import loading from '../../../../public/svg/Loader.gif'
import Image from 'next/image'
import styles from './Loader.module.css'
const LoaderClient = () => {
  return (
    <div className={styles.loader}>

       <Image src={loading} alt="Example GIF" />
    </div>
    
  )
}

export default LoaderClient