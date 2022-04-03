import randomWords from "random-words";
import getVideo from "./getVideo";
import organiseVideoByRating from "./organiseVideo";
import enoughVideos from './enoughVideos';
import getStory from './getStory';
import fs from 'fs';
import VideoTemplate from './template-writer/video-template-file';
import TextTemplate from './template-writer/text-template-file';
import getDuration from './getDuration';
import combinedStreams from './combineStream';
import CompositionTemplateFile from './template-writer/composition-template-file';

import GenerateTextFile from './generateTextFile';

const {exec} = require('child_process');
const feature: number = fs.readdirSync('./stories').length;
async function loopStories() {
    /** below **/
    let listOfVideos = []
    // // loop new stories
    const fileName = Date.now();


    const numberOfPosts = 3;

    fs.mkdirSync(`./curated-list/${feature}`)
    fs.mkdirSync(`./whole-story-text/${feature}`)
    // console.log('number of posts, ', numberOfPosts)
    fs.mkdirSync(`./combined/${feature}`)
    fs.mkdirSync(`./stories/${feature}`)
    fs.mkdirSync(`./random-video-links/${feature}`)

    for (let i = 0; i < numberOfPosts; i++) {
    //
    //     // join into one file... so we can generate the text file.
        await getStory(feature, i, feature)
    }

    const latestFile = Date.now();
     await combinedStreams(`./stories/${feature}`, latestFile, feature, numberOfPosts)
    //
    //
    // // used combined audio
   const featureAudioFile =  fs.readdirSync(`./combined/${feature}`);
    //
    // // should only have one feature audio track per folder.
    // copy this to the src folder.
   const audioFileDuration = await getDuration(`./combined/${feature}/${featureAudioFile[0]}`);
   //
   const videoList = await getVideo(randomWords())
   //
    const organisedList = organiseVideoByRating(videoList);
    listOfVideos.push(organisedList);

    console.log(audioFileDuration)

    // handle if list of video is shorter than audio length...
    const curatedList = await enoughVideos(organisedList, audioFileDuration);
    //console.log(curatedList)
    const curatedListDuration = curatedList.reduce((currentValue, previousValue) => ({duration: currentValue.duration + previousValue.duration}), {duration: 0});
    console.log(`should be ${audioFileDuration} but is actually:: `, curatedListDuration);




    fs.writeFileSync(`./curated-list/${feature}/1.txt`, '');
    curatedList.forEach((videoUrls) => {
        if(videoUrls.videos.large.url){
            console.log(videoUrls.videos.large.url)
            fs.appendFileSync(`./curated-list/${feature}/1.txt`, videoUrls.videos.large.url + ',' + videoUrls.duration + '\n');
        }
    })




    // * fps substitude the 30
   exec(`node_modules/.bin/cypress run --env duration=${curatedListDuration.duration * 30},fileUpto=${feature}`)

    /** above is all good **/



    /** above **/



    /** NOTES BELOW **/
    // could potentially skip the step where we write it to file.
    // - only if I can figure out how to pass the file paths as args into cypress... need to write those to file.


    // currently we can get a reddit post, combined audio into one file, get video, of enough duration and get links to that video.

    //TOD
    // have a script run cypress (after writing the intermediate video file links to file)
    // have cypress write the finalized links to file.
    // next we need to generate the file using remotion... bring that package into here.
    // generate a video template file in remotion... looping through the list of videos.
    // look into reading the text file in... and playing as part of the sequence (sync to the audio).



    /** NOTES ABOVE **/




}

loopStories();

//
// loopStories();





