import { getAudioDurationInSeconds } from 'get-audio-duration';
const durationOfFile = async (audioFilePath: string) => {
   return getAudioDurationInSeconds(audioFilePath)
}

export default durationOfFile
