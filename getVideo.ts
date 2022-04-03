import axios from 'axios';

const getVideo = async (videoName) => {
    console.log('search term:::-', videoName);
    // handle the undefined results here.. recursively poll until returning something.
    const req = await axios.get(`https://pixabay.com/api/videos/?key=21063902-7eaa7556445c3e0dd44c20488&q=${videoName}`)
    if (req.data.hits){
        return req.data.hits
    }
    return null;
}

export default getVideo;
