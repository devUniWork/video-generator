export interface VideoList {
    duration: number;
    url: string;
    audioUrl: string;
}

const VideoTemplate = (videoList: VideoList[], audioFilePath: string) => {
    return "import {AbsoluteFill} from 'remotion';\n" +
    "import {Video, Audio} from 'remotion';\n" +
    "import TransitionSeries from 'remotion-transition-series';\n" +
    "import {TextRead} from './text';\n" +
     `import audio from '${audioFilePath}'\n`   +

"export const VideoPlayer = () => {\n" +
 "return (\n" +
      "<>\n"+
      "<TextRead />\n"+
      "<Audio src=" + "{" + "audio" + "}" + "/>\n" +
      "<TransitionSeries>\n" + `
          ${videoList.map((videoUrl: VideoList) => {
              return "<TransitionSeries.Sequence" + " durationInFrames=" + '{' + `${videoUrl.duration}` + '}' + '>' + '\n' +
                  "<AbsoluteFill>" + '\n' +
                  "<Video volume=" + "{" + 0 + "} " + "src=" + "'" + `${videoUrl.url}` + "'" + "/>" + '\n' +
                  "</AbsoluteFill>" + '\n' +
              "</TransitionSeries.Sequence>" + '\n' +
              "<TransitionSeries.Transition " + '\n' +
              "durationInFrames="+ '{' + 10 + '}' + '\n' +
              "/>" + '\n'   
        }).join('')}
    `
    +
    "</TransitionSeries>\n" +
   "</>\n" +
 ");\n"+
"};\n"
}
export default VideoTemplate;
