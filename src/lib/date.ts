export function getRelativeDate(date: Date): string {
    const now = new Date();
    let relativeDate = '';
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const totalDays = Math.floor(hours / 24);
    const years = Math.floor(totalDays / 365);
    const remainingDaysAfterYrs = totalDays % 365;
    const months = Math.floor(remainingDaysAfterYrs / 30);
    const remainingDays = remainingDaysAfterYrs % 30;


    if(years>0){
        relativeDate = relativeDate + years + ' year' + (years>1?'s':'');
    }
    if(months>0){
        relativeDate = relativeDate + (relativeDate.length>0?', ':'') + months + ' month' + (months>1?'s':'');
    }
    if(remainingDays>0){
        relativeDate = relativeDate + (relativeDate.length>0?', ':'') + remainingDays + ' day' + (remainingDays>1?'s':'');
    }
    return relativeDate;
}