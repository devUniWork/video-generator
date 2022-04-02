import {useCallback} from 'react';
import {Sequence, spring} from 'remotion';
import {useCurrentFrame} from 'remotion';
export const TextRead = () => {
const frame = useCurrentFrame();
const lineVal0='The title without context sounds kinda bad but at least '
const lineVal1='read what happened. I (21M) was walking into a supermarket '
const lineVal2='the other day and there was a guy in a '
const lineVal3='wheelchair coming in behind me and I held the door '
const lineVal4='for him. I was just trying to be polite I '
const lineVal5='would’ve held the door for anyone. Anyway he says something '
const lineVal6='to the affect of “wow dude you’re just holding the '
const lineVal7='door because I’m in a wheelchair I could’ve done it '
const lineVal8='myself”. I thought this was a pretty rude response to '
const lineVal9='someone trying to be polite but whatever. Then once he’s '
const lineVal10='in the store he follows me and goes on and '
const lineVal11='on about how just because he’s in a wheelchair doesn’t '
const lineVal12='mean I need to “infantilize” him or something like that. '
const lineVal13='I just ignored him at first but then he wouldn’t '
const lineVal14='stop talking about it so I kinda snapped and said '
const lineVal15='“I was just trying to be nice man, fuck off”. '
const lineVal16='He looked all taken back and just gave me a '
const lineVal17='scowl and left. I told my mom the story later '
const lineVal18='and she said I overreacted.AITA '

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
const val4= useCallback(
() => {
return (
<div style={{
display: 'flex',
alignItems: 'end',
marginLeft: 20,
marginRight: 20,
}}
>{lineVal4.split(' ').map((word, i) => (
<div
key={4}
style={{
color:'#e0b717',
fontSize: 82,
zIndex: 10100,
background: '#413f3f',
paddingLeft: 10,
paddingRight: 10,
transform:`scale(${spring({
fps: 30,
frame: -1* (400- (frame - i * 5)),
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
const val5= useCallback(
() => {
return (
<div style={{
display: 'flex',
alignItems: 'end',
marginLeft: 20,
marginRight: 20,
}}
>{lineVal5.split(' ').map((word, i) => (
<div
key={5}
style={{
color:'#e0b717',
fontSize: 82,
zIndex: 10100,
background: '#413f3f',
paddingLeft: 10,
paddingRight: 10,
transform:`scale(${spring({
fps: 30,
frame: -1* (500- (frame - i * 5)),
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
const val6= useCallback(
() => {
return (
<div style={{
display: 'flex',
alignItems: 'end',
marginLeft: 20,
marginRight: 20,
}}
>{lineVal6.split(' ').map((word, i) => (
<div
key={6}
style={{
color:'#e0b717',
fontSize: 82,
zIndex: 10100,
background: '#413f3f',
paddingLeft: 10,
paddingRight: 10,
transform:`scale(${spring({
fps: 30,
frame: -1* (600- (frame - i * 5)),
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
const val7= useCallback(
() => {
return (
<div style={{
display: 'flex',
alignItems: 'end',
marginLeft: 20,
marginRight: 20,
}}
>{lineVal7.split(' ').map((word, i) => (
<div
key={7}
style={{
color:'#e0b717',
fontSize: 82,
zIndex: 10100,
background: '#413f3f',
paddingLeft: 10,
paddingRight: 10,
transform:`scale(${spring({
fps: 30,
frame: -1* (700- (frame - i * 5)),
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
const val8= useCallback(
() => {
return (
<div style={{
display: 'flex',
alignItems: 'end',
marginLeft: 20,
marginRight: 20,
}}
>{lineVal8.split(' ').map((word, i) => (
<div
key={8}
style={{
color:'#e0b717',
fontSize: 82,
zIndex: 10100,
background: '#413f3f',
paddingLeft: 10,
paddingRight: 10,
transform:`scale(${spring({
fps: 30,
frame: -1* (800- (frame - i * 5)),
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
const val9= useCallback(
() => {
return (
<div style={{
display: 'flex',
alignItems: 'end',
marginLeft: 20,
marginRight: 20,
}}
>{lineVal9.split(' ').map((word, i) => (
<div
key={9}
style={{
color:'#e0b717',
fontSize: 82,
zIndex: 10100,
background: '#413f3f',
paddingLeft: 10,
paddingRight: 10,
transform:`scale(${spring({
fps: 30,
frame: -1* (900- (frame - i * 5)),
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
const val10= useCallback(
() => {
return (
<div style={{
display: 'flex',
alignItems: 'end',
marginLeft: 20,
marginRight: 20,
}}
>{lineVal10.split(' ').map((word, i) => (
<div
key={10}
style={{
color:'#e0b717',
fontSize: 82,
zIndex: 10100,
background: '#413f3f',
paddingLeft: 10,
paddingRight: 10,
transform:`scale(${spring({
fps: 30,
frame: -1* (1000- (frame - i * 5)),
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
const val11= useCallback(
() => {
return (
<div style={{
display: 'flex',
alignItems: 'end',
marginLeft: 20,
marginRight: 20,
}}
>{lineVal11.split(' ').map((word, i) => (
<div
key={11}
style={{
color:'#e0b717',
fontSize: 82,
zIndex: 10100,
background: '#413f3f',
paddingLeft: 10,
paddingRight: 10,
transform:`scale(${spring({
fps: 30,
frame: -1* (1100- (frame - i * 5)),
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
const val12= useCallback(
() => {
return (
<div style={{
display: 'flex',
alignItems: 'end',
marginLeft: 20,
marginRight: 20,
}}
>{lineVal12.split(' ').map((word, i) => (
<div
key={12}
style={{
color:'#e0b717',
fontSize: 82,
zIndex: 10100,
background: '#413f3f',
paddingLeft: 10,
paddingRight: 10,
transform:`scale(${spring({
fps: 30,
frame: -1* (1200- (frame - i * 5)),
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
const val13= useCallback(
() => {
return (
<div style={{
display: 'flex',
alignItems: 'end',
marginLeft: 20,
marginRight: 20,
}}
>{lineVal13.split(' ').map((word, i) => (
<div
key={13}
style={{
color:'#e0b717',
fontSize: 82,
zIndex: 10100,
background: '#413f3f',
paddingLeft: 10,
paddingRight: 10,
transform:`scale(${spring({
fps: 30,
frame: -1* (1300- (frame - i * 5)),
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
const val14= useCallback(
() => {
return (
<div style={{
display: 'flex',
alignItems: 'end',
marginLeft: 20,
marginRight: 20,
}}
>{lineVal14.split(' ').map((word, i) => (
<div
key={14}
style={{
color:'#e0b717',
fontSize: 82,
zIndex: 10100,
background: '#413f3f',
paddingLeft: 10,
paddingRight: 10,
transform:`scale(${spring({
fps: 30,
frame: -1* (1400- (frame - i * 5)),
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
const val15= useCallback(
() => {
return (
<div style={{
display: 'flex',
alignItems: 'end',
marginLeft: 20,
marginRight: 20,
}}
>{lineVal15.split(' ').map((word, i) => (
<div
key={15}
style={{
color:'#e0b717',
fontSize: 82,
zIndex: 10100,
background: '#413f3f',
paddingLeft: 10,
paddingRight: 10,
transform:`scale(${spring({
fps: 30,
frame: -1* (1500- (frame - i * 5)),
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
const val16= useCallback(
() => {
return (
<div style={{
display: 'flex',
alignItems: 'end',
marginLeft: 20,
marginRight: 20,
}}
>{lineVal16.split(' ').map((word, i) => (
<div
key={16}
style={{
color:'#e0b717',
fontSize: 82,
zIndex: 10100,
background: '#413f3f',
paddingLeft: 10,
paddingRight: 10,
transform:`scale(${spring({
fps: 30,
frame: -1* (1600- (frame - i * 5)),
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
const val17= useCallback(
() => {
return (
<div style={{
display: 'flex',
alignItems: 'end',
marginLeft: 20,
marginRight: 20,
}}
>{lineVal17.split(' ').map((word, i) => (
<div
key={17}
style={{
color:'#e0b717',
fontSize: 82,
zIndex: 10100,
background: '#413f3f',
paddingLeft: 10,
paddingRight: 10,
transform:`scale(${spring({
fps: 30,
frame: -1* (1700- (frame - i * 5)),
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
const val18= useCallback(
() => {
return (
<div style={{
display: 'flex',
alignItems: 'end',
marginLeft: 20,
marginRight: 20,
}}
>{lineVal18.split(' ').map((word, i) => (
<div
key={18}
style={{
color:'#e0b717',
fontSize: 82,
zIndex: 10100,
background: '#413f3f',
paddingLeft: 10,
paddingRight: 10,
transform:`scale(${spring({
fps: 30,
frame: -1* (1800- (frame - i * 5)),
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
<Sequence from={400} durationInFrames={100}>{val4()}
</Sequence>
<Sequence from={500} durationInFrames={100}>{val5()}
</Sequence>
<Sequence from={600} durationInFrames={100}>{val6()}
</Sequence>
<Sequence from={700} durationInFrames={100}>{val7()}
</Sequence>
<Sequence from={800} durationInFrames={100}>{val8()}
</Sequence>
<Sequence from={900} durationInFrames={100}>{val9()}
</Sequence>
<Sequence from={1000} durationInFrames={100}>{val10()}
</Sequence>
<Sequence from={1100} durationInFrames={100}>{val11()}
</Sequence>
<Sequence from={1200} durationInFrames={100}>{val12()}
</Sequence>
<Sequence from={1300} durationInFrames={100}>{val13()}
</Sequence>
<Sequence from={1400} durationInFrames={100}>{val14()}
</Sequence>
<Sequence from={1500} durationInFrames={100}>{val15()}
</Sequence>
<Sequence from={1600} durationInFrames={100}>{val16()}
</Sequence>
<Sequence from={1700} durationInFrames={100}>{val17()}
</Sequence>
<Sequence from={1800} durationInFrames={100}>{val18()}
</Sequence>

</>
);
}