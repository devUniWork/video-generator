import getVideo from './getVideo';
import randomWords from "random-words";

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}
let listVids = [];
const enoughVideos = async (listVideos, durationOfAudio) => {
    const t = await getVideo(randomWords())
    if(listVideos) {
        let newList = listVideos;
        if(t !== undefined) {
            listVids = [...listVideos, ...t];
        } else {
            const y = await getVideo(randomWords())
            enoughVideos(y, durationOfAudio)
        }


        console.log(listVids)
        const duration = listVids.reduce((currentValue, previousValue) => ({duration: currentValue?.duration + previousValue?.duration}), {duration: 0});
        console.log('below')
        console.log(duration.duration)
        console.log(durationOfAudio);
        console.log('above')

        if(duration.duration > durationOfAudio) {
            if((duration.duration - durationOfAudio) < 220) {
                return listVids
            }
            listVids.pop();
            return enoughVideos(newList, durationOfAudio);
        }
        const c = [t[getRandomInt(t.length)], ...newList]
        listVids = [...listVideos, ...c];
        // this is where we can do a call to get more video.
        return  enoughVideos(c, durationOfAudio);
    } else {
        const t = await getVideo(randomWords())
        listVids = [...listVideos, ...t];
        enoughVideos(t, durationOfAudio);
    }

}

export default enoughVideos;
