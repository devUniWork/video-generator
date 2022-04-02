import {useCallback} from 'react';
import {Sequence, spring} from 'remotion';
import {useCurrentFrame} from 'remotion';
export const TextRead = () => {
const frame = useCurrentFrame();
const lineVal0='Well, a lot has happened since I made the post'
const lineVal1='here. First I want to thank you all for giving'
const lineVal2='an honest opinion. One thing that I noticed, all the'
const lineVal3='Indians who commented on my post told'

        const val0= useCallback(
() => {
return (
<div style={{
display: 'flex',
alignItems: 'end',
marginLeft: 20,
marginRight: 20,
}}
>{lineVal0.split(' ').map((word, i) => (
<div
key={0}
style={{
color:'#e0b717',
fontSize: 82,
zIndex: 10100,
background: '#413f3f',
paddingLeft: 10,
paddingRight: 10,
transform:`scale(${spring({
fps: 30,
frame: -1* (0- (frame - i * 5)),
config: {
damping: 100,
stiffness: 200,
mass: 0.5,
}
})})`,
marginBottom: 25,
display: 'inline-block'
}}
>{word}</div>)
)}
</div>
); 
}, 
[frame]
);
const val1= useCallback(
() => {
return (
<div style={{
display: 'flex',
alignItems: 'end',
marginLeft: 20,
marginRight: 20,
}}
>{lineVal1.split(' ').map((word, i) => (
<div
key={1}
style={{
color:'#e0b717',
fontSize: 82,
zIndex: 10100,
background: '#413f3f',
paddingLeft: 10,
paddingRight: 10,
transform:`scale(${spring({
fps: 30,
frame: -1* (100- (frame - i * 5)),
config: {
damping: 100,
stiffness: 200,
mass: 0.5,
}
})})`,
marginBottom: 25,
display: 'inline-block'
}}
>{word}</div>)
)}
</div>
); 
}, 
[frame]
);
const val2= useCallback(
() => {
return (
<div style={{
display: 'flex',
alignItems: 'end',
marginLeft: 20,
marginRight: 20,
}}
>{lineVal2.split(' ').map((word, i) => (
<div
key={2}
style={{
color:'#e0b717',
fontSize: 82,
zIndex: 10100,
background: '#413f3f',
paddingLeft: 10,
paddingRight: 10,
transform:`scale(${spring({
fps: 30,
frame: -1* (200- (frame - i * 5)),
config: {
damping: 100,
stiffness: 200,
mass: 0.5,
}
})})`,
marginBottom: 25,
display: 'inline-block'
}}
>{word}</div>)
)}
</div>
); 
}, 
[frame]
);
const val3= useCallback(
() => {
return (
<div style={{
display: 'flex',
alignItems: 'end',
marginLeft: 20,
marginRight: 20,
}}
>{lineVal3.split(' ').map((word, i) => (
<div
key={3}
style={{
color:'#e0b717',
fontSize: 82,
zIndex: 10100,
background: '#413f3f',
paddingLeft: 10,
paddingRight: 10,
transform:`scale(${spring({
fps: 30,
frame: -1* (300- (frame - i * 5)),
config: {
damping: 100,
stiffness: 200,
mass: 0.5,
}
})})`,
marginBottom: 25,
display: 'inline-block'
}}
>{word}</div>)
)}
</div>
); 
}, 
[frame]
);

return (
<>
<Sequence from={0} durationInFrames={100}>{val0()}
</Sequence>
<Sequence from={100} durationInFrames={100}>{val1()}
</Sequence>
<Sequence from={200} durationInFrames={100}>{val2()}
</Sequence>
<Sequence from={300} durationInFrames={100}>{val3()}
</Sequence>

</>
);
}