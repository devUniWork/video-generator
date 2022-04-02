export interface TextString {
    text: string;
}
const TextTemplate = (text: string[]) => {
    return "import {useCallback} from 'react';\n" +
           "import {Sequence, spring} from 'remotion';\n" +
           "import {useCurrentFrame} from 'remotion';\n" +
"export const TextRead = () => {\n" +
        "const frame = useCurrentFrame();\n" +
        `${text.map((line, i) => {
            return "const lineVal" + i + "=" + "'" + line + "'" +"\n"
        }).join('')}`+
        `
        ${text.map((textLine, z) => {
            return "const " + "val"+z + "= useCallback(\n" +
                "() => {\n" +
                "return (\n" +
                   "<div style={{\n" +
                   "display: 'flex',\n" +
                   "alignItems: 'end',\n" +
                   "marginLeft: 20,\n" +
                   "marginRight: 20,\n" +
                "}}\n" +
                '>' +
                "{" + "lineVal" + z +".split(' ').map((word, i) => (\n" +
                        "<div\n" +
                        "key=" + "{" + z + "}\n" +
                        "style=" + "{{" + "\n" +
                          "color:" + "'#e0b717'," + "\n" +
                          "fontSize: 82,\n"+
                          "zIndex: 10100,\n"+
                          "background: '#413f3f',\n" +
                          "paddingLeft: 10,\n" +
                          "paddingRight: 10,\n" +
                          "transform:" + "`" + "scale(" + "$" + "{" + "spring" + "({\n" +
                            "fps: 30,\n" +
                            "frame: -1* (" + `${z * 100}` + "- (frame - i * 5)),\n" +
                            "config: {\n" +
                            "damping: 100,\n" +
                            "stiffness: 200,\n" +
                            "mass: 0.5,\n" +
                              "}\n" +
                            "})})" + "`,\n" +
                            "marginBottom: 25,\n" +
                            "display: 'inline-block'\n" +
                            "}}\n" +
                              '>' +
                              '{' + "word" + '}' +
                            "</div>" +
                             ")\n" +
                            ")}\n" +
                            "</div>\n" +
                            "); \n" +
                        "}, \n" +
                        "[frame]\n" +
                        ");\n"
                }).join('')
        }\n` +
        "return " + "(\n" +
                "<>\n" +
            `${text.map((textLine, i) => {
                return "<Sequence from={" + i * 100 +"} durationInFrames={100}>" +
                "{" + "val"+i + "(" + ")" + "}" + "\n" +
                "</Sequence>\n"
            }).join('')}\n` +
            "</>\n" +
           ");\n" +
        "}"

}

export default TextTemplate;
