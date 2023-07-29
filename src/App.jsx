import React from 'react'
import { Post } from './Post'
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

export default function App(){
  return(
     <div>
      <Header/>
      
      <div className={styles.wrapper}>
          <Sidebar/>
          <main>
              <Post author="Eduardo" content="sedadasdaaeddae"/>
          </main>
      </div>

     </div>

  )
}