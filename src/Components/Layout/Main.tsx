import { FC, HTMLProps } from 'react'
import VideoCardList from '../Video/VideoCardList'
import './Styles/Main.css'

interface Props extends HTMLProps<HTMLDivElement> {}

const Main : FC<Props> = ({ children }) => {
    return (
        <main>

            {children}

            {/* <video id="player" width="650" controls controlsList="nodownload">
                <source src="http://localhost:4000/api/video-test" type="video/mp4" />
            </video> */}
            
            <VideoCardList />

        </main>
    )
}

export default Main
