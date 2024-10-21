import {differenceInDays, differenceInHours} from "date-fns";

export function getTimeRemaining({expirationDateTime}) {
    const date = new Date(expirationDateTime);
    const now = new Date();
    const days = Math.abs(differenceInDays(date, now));
    const hours = Math.abs(differenceInHours(date, now));
    if (days <= 0) {
        return `${hours} hour` + (hours === 1 ? '' : 's' + ' left')
    };
    return `${days} day` + (days === 1 ? '' : 's' + ' left');
}

export function getPostedTime({postedDateTime}) {
    const date = new Date(postedDateTime);
    const now = new Date();
    const hours = Math.abs(differenceInHours(date, now));
    const days = Math.abs(differenceInDays(date, now));
    if (days <= 0) {
        return `${hours} hr` + (hours === 1 ? '' : 's' + '')
    }
    return `${days} day` + (days === 1 ? '' : 's' + '')
}