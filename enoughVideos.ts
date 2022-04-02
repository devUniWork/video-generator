import getVideo from './getVideo';
import randomWords from "random-words";

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const enoughVideos = async (listVideos, durationOfAudio) => {
    let newList = listVideos;
    const t = await getVideo(randomWords())
    const duration = newList.reduce((currentValue, previousValue) => ({duration: currentValue.duration + previousValue.duration}));
    if(duration.duration > durationOfAudio) {
        if((duration.duration - durationOfAudio) < 40) {
          return newList
        }
          newList.pop();
          return enoughVideos(newList, durationOfAudio);
    }
    const c = [t[getRandomInt(t.length)], ...newList]

    // this is where we can do a call to get more video.
    return  enoughVideos(c, durationOfAudio);
}

export default enoughVideos;
