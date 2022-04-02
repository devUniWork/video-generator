import fs from 'fs';
import ffmpeg from "fluent-ffmpeg";

const combinedStreams = (dir, latestFile, feature) => {
    return new Promise((resolve, reject) => {
        let files = []
        fs.readdirSync(`${dir}`).forEach(file => {
            files.push(`${dir}/${file}`)
        });
        const combiner = ffmpeg().on("error", err => {
            console.error("An error occurred: " + err.message);
        })
            .on("end", () => {
                console.log('Merge complete');
                resolve(true)
            });

        files.forEach(file => {
            combiner.input(file)
        });

        combiner.mergeToFile(`./combined/${feature}/amiasshole-${latestFile}.mp3`);
    })

}

export default combinedStreams;
