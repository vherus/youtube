import { FC } from 'react'
import './Styles/VideoCardList.css'
import VideoCard from './VideoCard'

const videos = [
    { author: 'Muse', title: 'Hysteria', length: '3:42', publishDateTime: 'Less than an hour ago' },
    { author: 'Muse', title: 'Hysteria', length: '3:42', publishDateTime: 'Less than an hour ago' },
    { author: 'Muse', title: 'Hysteria', length: '3:42', publishDateTime: 'Less than an hour ago' },
    { author: 'Muse', title: 'Hysteria', length: '3:42', publishDateTime: 'Less than an hour ago' },
    { author: 'Muse', title: 'Hysteria', length: '3:42', publishDateTime: 'Less than an hour ago' },
    { author: 'Muse', title: 'Hysteria', length: '3:42', publishDateTime: 'Less than an hour ago' },
    { author: 'Muse', title: 'Hysteria', length: '3:42', publishDateTime: 'Less than an hour ago' },
    { author: 'Muse', title: 'Hysteria', length: '3:42', publishDateTime: 'Less than an hour ago' }
]

const VideoCardList : FC = () => {
    return (
        <section>
            {videos.map(v => <VideoCard author={v.author} title={v.title} length={v.length} publishDateTime={v.publishDateTime} />)}
        </section>
    )
}

export default VideoCardList
