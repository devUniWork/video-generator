import gTTS from "gtts";
import {getPost} from 'random-reddit';
import fs from 'fs';

const getStory = async (directory, fileName) => {
    const post = await getPost('AmItheAsshole');
    return new Promise((resolve, reject) => {
        const gtts = new gTTS(post['selftext'], 'en');
        fs.writeFileSync(`./story-text/${directory}/${fileName}.txt`, post['selftext'].replace(/\n/g, ''));
        gtts.save(`./stories/${directory}/${fileName}.mp3`, function (err, result) {
            if (err) {
                throw new Error(err)
            }
            resolve(true)
        });
    });
}

export default getStory;
