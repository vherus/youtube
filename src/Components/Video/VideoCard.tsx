import { FC } from 'react'
import './Styles/VideoCard.css'
import thumbnail from '../../Assets/Thumbnails/muse.png'

interface Props {
    length: string,
    title: string,
    author: string,
    publishDateTime: string
}

const VideoCard : FC<Props> = ({ length, title, author, publishDateTime }) => {
    return (
        <article>

            <section>
                <img src={thumbnail} alt='Muse thumbnail' />
                
                <span className='timestamp-container'>
                <p className='timestamp'>{length}</p>
                </span>
            </section>

            <section>
                <div className='profile-icon'>&nbsp;</div>

                <div className='info'>
                <div className='title'>
                    <h3>{title}</h3>
                </div>

                <div className='meta'>
                    <small>{author} - </small>
                    <small>{publishDateTime}</small>
                </div>
                </div>
            </section>

        </article>
    )
}

export default VideoCard
