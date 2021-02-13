import cvData from './resume';
import cvDataExt from './resume_extender';

function getObjKey(keyName) {
    let result = {};

    if (cvData[keyName]){
        result = {...cvData[keyName]};
    }

    if (cvDataExt[keyName]){
        result = {...result, ...cvDataExt[keyName]};
    }

    return result;
}

function getArrayKey(keyName) {
    let result = [];

    if (cvData[keyName]){
        result = result.concat(cvData[keyName]);
    }

    if (cvDataExt[keyName]){
        result = result.concat(cvDataExt[keyName]);
    }
    return result;
}

function getBasics() {
    let basics = getObjKey('basics');
    const additional = cvDataExt['additional'];
    const key = 'summary';

    if (additional){
        basics[key] = `${cvData['basics']['summary']}. ${cvDataExt['additional']}`;
    }
    return basics;
}

function getSkills() {
    return getArrayKey('skills');
}

function getLanguages() {
    return getArrayKey('languages');
}

function getExperience() {
    return getArrayKey('work');
}

function getEducation() {
    return getArrayKey('education');
}

function getTrainings() {
    return getArrayKey('trainings');
}

function getCodeSamples() {
    return getArrayKey('code_samples');
}

export default class DataSource {
    constructor() {
        this.basics = getBasics();
        this.skills = getSkills();
        this.languages = getLanguages();
        this.experience = getExperience();
        this.education = getEducation();
        this.trainings = getTrainings();
        this.codeSamples = getCodeSamples();
    }
}
