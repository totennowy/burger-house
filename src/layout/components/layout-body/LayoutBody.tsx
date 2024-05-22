import React, { FC } from 'react'
import styles from './styles/layoutBody.module.scss'
import { ModelLayoutBody } from './types/modelLayoutBody'

const LayoutBody:FC<ModelLayoutBody> = ({children}) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}

export default LayoutBody