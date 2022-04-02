import {AbsoluteFill} from 'remotion';
import {Video} from 'remotion';
import TransitionSeries from 'remotion-transition-series';
import {TextRead} from './text';
export const VideoPlayer = () => {
return (
<>
<TextRead />
<TransitionSeries>

          <TransitionSeries.Sequence durationInFrames={1230}>
<AbsoluteFill>
<Video src='https://vod-progressive.akamaized.net/exp=1648820008~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1960%2F18%2F459802291%2F2032938392.mp4~hmac=bd7525fd9ed0a6c7a9ae7c5da0b3fb7763672c022748ede110a344958b0406a0/vimeo-prod-skyfire-std-us/01/1960/18/459802291/2032938392.mp4?filename=Forest+-+49981.mp4'/>
</AbsoluteFill>
</TransitionSeries.Sequence>
<TransitionSeries.Transition 
durationInFrames={10}
/>
<TransitionSeries.Sequence durationInFrames={390}>
<AbsoluteFill>
<Video src='https://vod-progressive.akamaized.net/exp=1648978877~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2594%2F13%2F337972830%2F1342197473.mp4~hmac=5d484ce70954e7fbcdba5fc4dc7c33800530c4197818d2599ce8b0811efb11af/vimeo-prod-skyfire-std-us/01/2594/13/337972830/1342197473.mp4'/>
</AbsoluteFill>
</TransitionSeries.Sequence>
<TransitionSeries.Transition 
durationInFrames={10}
/>
<TransitionSeries.Sequence durationInFrames={300}>
<AbsoluteFill>
<Video src='https://vod-progressive.akamaized.net/exp=1648820049~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1105%2F8%2F205529295%2F699644825.mp4~hmac=198270fbd387dae6479c5505768e8f24fe3d5005e3a443f809286d5024dcd38a/vimeo-prod-skyfire-std-us/01/1105/8/205529295/699644825.mp4?filename=Flowers+-+7924.mp4'/>
</AbsoluteFill>
</TransitionSeries.Sequence>
<TransitionSeries.Transition 
durationInFrames={10}
/>
<TransitionSeries.Sequence durationInFrames={480}>
<AbsoluteFill>
<Video src='https://vod-progressive.akamaized.net/exp=1648978856~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F834%2F25%2F629172467%2F2897777806.mp4~hmac=5c9f879abaddb2660de403b8d6928164d3c7f917f7ed17a578615f636f677848/vimeo-prod-skyfire-std-us/01/834/25/629172467/2897777806.mp4'/>
</AbsoluteFill>
</TransitionSeries.Sequence>
<TransitionSeries.Transition 
durationInFrames={10}
/>
<TransitionSeries.Sequence durationInFrames={210}>
<AbsoluteFill>
<Video src='https://vod-progressive.akamaized.net/exp=1648978898~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3690%2F13%2F343454476%2F1375555680.mp4~hmac=d889041395663a3675e623c4dfbefef8ecb1b871e6f9a4167070469952826f85/vimeo-prod-skyfire-std-us/01/3690/13/343454476/1375555680.mp4'/>
</AbsoluteFill>
</TransitionSeries.Sequence>
<TransitionSeries.Transition 
durationInFrames={10}
/>
<TransitionSeries.Sequence durationInFrames={1320}>
<AbsoluteFill>
<Video src='https://vod-progressive.akamaized.net/exp=1648820076~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F279%2F19%2F476396201%2F2126680881.mp4~hmac=14a065ee8554a657f4c92368afba6c564707788ee4aea4bc8e8be86077513970/vimeo-prod-skyfire-std-us/01/279/19/476396201/2126680881.mp4?filename=Forest+-+53890.mp4'/>
</AbsoluteFill>
</TransitionSeries.Sequence>
<TransitionSeries.Transition 
durationInFrames={10}
/>
<TransitionSeries.Sequence durationInFrames={330}>
<AbsoluteFill>
<Video src='https://vod-progressive.akamaized.net/exp=1648820095~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1488%2F10%2F257440717%2F943298278.mp4~hmac=c09a2f844fb312f300ea263855d87e98f6651c5c616e81390cd5869767aa916a/vimeo-prod-skyfire-std-us/01/1488/10/257440717/943298278.mp4?filename=Succulent+-+14467.mp4'/>
</AbsoluteFill>
</TransitionSeries.Sequence>
<TransitionSeries.Transition 
durationInFrames={10}
/>
<TransitionSeries.Sequence durationInFrames={300}>
<AbsoluteFill>
<Video src='https://vod-progressive.akamaized.net/exp=1648820101~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4269%2F14%2F371345147%2F1541376466.mp4~hmac=a690ba2c3880ea0d6efb6f7dd609709a8328bab093d6842cfa52cdf0092f20d1/vimeo-prod-skyfire-std-us/01/4269/14/371345147/1541376466.mp4?filename=Fall+-+28746.mp4'/>
</AbsoluteFill>
</TransitionSeries.Sequence>
<TransitionSeries.Transition 
durationInFrames={10}
/>

    </TransitionSeries>
</>
);
};
