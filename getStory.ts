import gTTS from "gtts";
import {getPost} from 'random-reddit';
import fs from 'fs';

const getStory = async (directory, fileName, wholeStoryNumber) => {
    const post = await getPost('AmItheAsshole');
    return new Promise((resolve, reject) => {
        const gtts = new gTTS(post['selftext'], 'en');
        console.log('below is file name')
        console.log(fileName)
        console.log(wholeStoryNumber)
        console.log('above is file name')
        // we write each post to its own directory AND append to the same file
        // because gtts could be run on separate threads... so future proofing parallel processing speed.
        // fs.writeFileSync(`./story-text/${directory}/${fileName}.txt`, post['selftext'].replace(/\n/g, ''));
        fs.writeFileSync(`./whole-story-text/${wholeStoryNumber}/1.txt`, post['selftext'].replace(/\n/g, ''), {flag: 'a+'} )
        gtts.save(`./stories/${directory}/${fileName}.mp3`, function (err, result) {
            if (err) {
                throw new Error(err)
            }
            resolve(true)
        });
    });
}

export default getStory;
