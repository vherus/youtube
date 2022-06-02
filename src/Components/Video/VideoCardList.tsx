import { FC } from 'react'
import './Styles/VideoCardList.css'
import VideoCard from './VideoCard'
import useStore from '../../State/Store'

const VideoCardList : FC = () => {
    const videos = useStore((state) => state.videos);

    return (
        <section>
            {videos.map(v => <VideoCard author={v.author} title={v.title} length={v.length} publishDateTime={v.publishDateTime} />)}
        </section>
    )
}

export default VideoCardList
