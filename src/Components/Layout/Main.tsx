import { FC, HTMLProps } from 'react'
import VideoCardList from '../Video/VideoCardList'
import './Styles/Main.css'

interface Props extends HTMLProps<HTMLDivElement> {}

const Main : FC<Props> = ({ children }) => {
    return (
        <main>

            {children}
            
            <VideoCardList />

        </main>
    )
}

export default Main
