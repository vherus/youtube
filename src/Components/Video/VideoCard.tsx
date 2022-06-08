import { FC } from 'react'
import './Styles/VideoCard.css'
import thumbnail from '../../Assets/Thumbnails/muse.png'
import icon from '../../Assets/Images/muse-profile.jpg'

interface Props {
    length: string,
    title: string,
    author: string,
    publishDateTime: string
}

const VideoCard : FC<Props> = ({ length, title, author, publishDateTime }) => {
    return (
        <article>

            <section className='thumbnail'>
                <img src={thumbnail} alt='Muse thumbnail' />
                
                <div className='timestamp'>
                    <p>{length}</p>
                </div>
            </section>

            <section className='video-info'>
                <div className='profile-icon'>
                    <img src={icon} alt='Muse profile icon' />
                </div>

                <div className='info'>
                    <div className='title'>
                        <h3>{title}</h3>
                    </div>

                    <div className='meta'>
                        <small>{author}</small>
                        <span>
                            <small>152M views • {publishDateTime}</small>
                        </span>
                    </div>
                </div>
            </section>

        </article>
    )
}

export default VideoCard
