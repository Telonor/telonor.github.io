export function getAge(dateString) {
    const today = new Date();
    const birthDate = parseISODate(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export function parseISODate(dateString) {
    const dateParts = dateString.split('-');
    return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
}

export function getHumanMonth(date) {
    return date.getMonth() + 1;
}

export function getZeroPaddedMonthStr(monthNum) {
    return monthNum > 10 ? String(monthNum) : `0${monthNum}`;
}

function getDateBetweenMYStr(startDateStr, endDateStr) {
    const startDate = parseISODate(startDateStr);
    const endDate = endDateStr? parseISODate(endDateStr) : null;

    const startStr = `${getZeroPaddedMonthStr(getHumanMonth(startDate))}.${startDate.getFullYear()}`;
    const endStr = endDate ? `${getZeroPaddedMonthStr(getHumanMonth(endDate))}.${endDate.getFullYear()}` : 'present';
    return `${startStr} - ${endStr}`;
}

function getDateBetweenYStr(startDateStr, endDateStr, format) {
    const startDate = parseISODate(startDateStr);
	const endDate = endDateStr ? parseISODate(endDateStr) : null;
    const endStr = endDate ? endDate.getFullYear() : 'present';
    return `${startDate.getFullYear()} - ${endStr}`;
}

export const DBY = 'YYYY-YYYY';
export const DBMY = 'MM.YYYY-MM.YYYY';

export function getDateBetweenStr(startDateStr, endDateStr, format) {
    switch (format) {
        case DBY:
            return getDateBetweenYStr(startDateStr, endDateStr);
        case DBMY:
            return getDateBetweenMYStr(startDateStr, endDateStr);
    }
}
