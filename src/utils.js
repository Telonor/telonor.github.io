export function getAge(dateString) {
    const today = new Date();
    const birthDate = pareISODate(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export function pareISODate(dateString) {
    const dateParts = dateString.split('-');
    return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
}

export function getHumanMonth(date) {
    return date.getMonth() + 1;
}

export function getZeroPaddedMonthStr(monthNum) {
    return monthNum > 10 ? String(monthNum) : `0${monthNum}`;
}