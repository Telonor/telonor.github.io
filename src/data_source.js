import cvDataExt from './resume_extender';


export default class DataSource {
    getObjKey(keyName) {
        let result = {};

        if (keyName in this.cvData && this.cvData[keyName]){
            result = {...this.cvData[keyName]};
        }

        if (keyName in cvDataExt && cvDataExt[keyName]){
            result = {...result, ...cvDataExt[keyName]};
        }

        return result;
    }

    getArrayKey(keyName) {
        let result = [];

        if (keyName in this.cvData && this.cvData[keyName]){
            result = result.concat(this.cvData[keyName]);
        }

        if (keyName in cvDataExt && cvDataExt[keyName]){
            result = result.concat(cvDataExt[keyName]);
        }
        return result;
    }

    getBasics() {
        let basics = this.getObjKey('basics');
        const additional = cvDataExt['additional'];
        const key = 'summary';

        if (Object.keys(this.cvData).length && additional){
            basics[key] = `${this.cvData['basics']['summary']}. ${cvDataExt['additional']}`;
        }
        return basics;
    }

    getSkills() {
        return this.getArrayKey('skills');
    }

    getLanguages() {
        return this.getArrayKey('languages');
    }

    getExperience() {
        return this.getArrayKey('work');
    }

    getEducation() {
        return this.getArrayKey('education');
    }

    getTrainings() {
        return this.getArrayKey('trainings');
    }

    getCodeSamples() {
        return this.getArrayKey('code_samples');
    }

    constructor(cvData = {}) {
        this.cvData = cvData;

        this.isFilled = Boolean(Object.keys(cvData).length)

        this.basics = this.getBasics();
        this.skills = this.getSkills();
        this.languages = this.getLanguages();
        this.experience = this.getExperience();
        this.education = this.getEducation();
        this.trainings = this.getTrainings();
        this.codeSamples = this.getCodeSamples();
    }
}
