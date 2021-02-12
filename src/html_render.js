import data from './resume.json';

export function get_resume_data() {
    resume_data = JSON.parse(data);
    console.log(resume_data);
}
