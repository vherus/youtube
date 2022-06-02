import { FC } from 'react'
import Header from '../Layout/Header'
import Main from '../Layout/Main'
import Sidebar from '../Layout/Sidebar'
import './Styles/App.css'

const App : FC = () => {
  return (
    <>
        <Header />

        <Main>
            <Sidebar />
        </Main>
    </>
  )
}

export default App
