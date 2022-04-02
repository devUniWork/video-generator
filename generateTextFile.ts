import fs from "fs";
export default class GenerateTextFile {
    constructor() {
    }

    public splitTextFile(): string[] {
        const str = fs.readFileSync(`./whole-story-text/${this.getLatestStory()}/1.txt`);
        return this.yourSplit(10, str.toString().replace(/\'/g, ''))
    }

    public getLatestStory(): number {
        return fs.readdirSync('./whole-story-text').length;
    }

    public yourSplit (N,string) {
        var app=string.split(' '),
            arrayApp=[],
            stringApp="";
        app.forEach(function(sentence,index){
            stringApp+=sentence+' ';

            if((index+1)%N===0){
                arrayApp.push(stringApp);
                stringApp='';
            }else if(app.length===index+1 && stringApp!==''){
                arrayApp.push(stringApp);
                stringApp='';
            }
        });
        return arrayApp;

    };
}

