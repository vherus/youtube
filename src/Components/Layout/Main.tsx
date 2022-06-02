import { FC, HTMLProps } from 'react'
import './Styles/Main.css'

interface Props extends HTMLProps<HTMLDivElement> {}

const Main : FC<Props> = ({ children }) => {
    return (
        <main>
            {children}
            
            <h1>Main</h1>
        </main>
    )
}

export default Main
