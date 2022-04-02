const CompositionTemplateFile = (frames: number) => {
    return "import {Composition} from 'remotion';\n" +
        "import {VideoPlayer} from './VideoPlayer/VideoPlayer';\n" +
        "export const RemotionVideo: React.FC = () => {\n" +
        "return" + "(\n" +
          "<>\n" +
          "<Composition\n" +
            "id='HelloWorld'\n" +
          "component=" + "{" + "VideoPlayer" + "}\n" +
          "durationInFrames=" + "{" + frames + "}\n" +
           "fps=" + "{" + 30 + "}\n" +
           "width=" + "{" + 1920 + "}\n" +
           "height=" + "{" + 1080 + "}\n" +
          "/>\n" +
        "</>\n" +
        ");\n" +
       "};\n"
}

export default CompositionTemplateFile;

