import {Composition} from 'remotion';
import {VideoPlayer} from './VideoPlayer/VideoPlayer';
export const RemotionVideo: React.FC = () => {
return(
<>
<Composition
id='HelloWorld'
component={VideoPlayer}
durationInFrames={2610}
fps={30}
width={1920}
height={1080}
/>
</>
);
};
