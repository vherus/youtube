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
        { author: 'Muse', title: 'Hysteria', length: '3:42', publishDateTime: 'Less than an hour ago' },
        { author: 'Muse', title: 'Hysteria', length: '3:42', publishDateTime: 'Less than an hour ago' },
        { author: 'Muse', title: 'Hysteria', length: '3:42', publishDateTime: 'Less than an hour ago' },
        { author: 'Muse', title: 'Hysteria', length: '3:42', publishDateTime: 'Less than an hour ago' },
        { author: 'Muse', title: 'Hysteria', length: '3:42', publishDateTime: 'Less than an hour ago' },
        { author: 'Muse', title: 'Hysteria', length: '3:42', publishDateTime: 'Less than an hour ago' },
        { author: 'Muse', title: 'Hysteria', length: '3:42', publishDateTime: 'Less than an hour ago' },
        { author: 'Muse', title: 'Hysteria', length: '3:42', publishDateTime: 'Less than an hour ago' }
    ]
}))

export default useStore