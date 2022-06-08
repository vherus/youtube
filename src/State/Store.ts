import create from 'zustand'

interface Video {
    title: string,
    author: string,
    length: string,
    publishDateTime: string
}

interface VideoState {
    videos: Video[]
}

const useStore = create<VideoState>(() => ({
    videos: [
        { author: 'Muse', title: 'Darkshines', length: '3:42', publishDateTime: 'Less than an hour ago' },
        { author: 'Muse', title: 'Plug In Baby', length: '3:42', publishDateTime: 'Less than an hour ago' },
        { author: 'Muse', title: 'Hyper Music', length: '3:42', publishDateTime: 'Less than an hour ago' },
        { author: 'Muse', title: 'Bliss', length: '3:42', publishDateTime: 'Less than an hour ago' },
        { author: 'Muse', title: 'New Born', length: '3:42', publishDateTime: 'Less than an hour ago' },
        { author: 'Muse', title: 'Citizen Erased', length: '3:42', publishDateTime: 'Less than an hour ago' },
        { author: 'Muse', title: 'Feeling Good', length: '3:42', publishDateTime: 'Less than an hour ago' },
        { author: 'Muse', title: 'Futurism', length: '3:42', publishDateTime: 'Less than an hour ago' }
    ]
}))

export default useStore