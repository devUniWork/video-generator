import fs from "fs";
import CompositionTemplateFile from './template-writer/composition-template-file';
import VideoTemplate from './template-writer/video-template-file';
import GenerateTextFile from './generateTextFile';
import TextTemplate from './template-writer/text-template-file';
class GenerateTemplates {

    constructor() {
        this.generateCompositionTemplate();
        this.generateVideoTemplate();
        this.generateTextTemplate();
    }

    public getDuration(): number {
        return parseInt(process.argv.slice(2).toString(), 10);
    }

    public generateCompositionTemplate(){
        const compositionTemplate = CompositionTemplateFile(this.getDuration());
        fs.writeFileSync('./output-video-template/composition-files.tsx', compositionTemplate);
    }

    public generateVideoTemplate() {
        const procesedVideoLinks = fs.readFileSync('./random-video-links/te.txt')
        let vidTemplates = [];

        procesedVideoLinks.toString().split('\n').forEach((line) => {
            if(line.split(',')[1]) {
               let template = {duration: 30 * parseInt(line.split(',')[1], 10),  url: line.split(',')[0] }
               vidTemplates.push(template)
            }
        });

        // cp audio file into src folder, read file name and pass into VideoTemplate method.
        const videoTemplates = VideoTemplate(vidTemplates, './');
        fs.writeFileSync('./output-video-template/video-files.tsx', videoTemplates);
    }

    public generateTextTemplate(){
        const text = new GenerateTextFile();
        const template = TextTemplate(text.splitTextFile());
        fs.writeFileSync('./output-video-template/text-files.tsx', template)
    }


}

new GenerateTemplates()
