export function getRelativeDate(date: Date, short = false): string {
    const now = new Date();
    
    let years = now.getFullYear() - date.getFullYear();
    let months = now.getMonth() - date.getMonth();
    let days = now.getDate() - date.getDate();

    if (days < 0) {
        months -= 1;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    const parts: string[] = [];

    if (years > 0) {
        parts.push(`${years} year${years > 1 ? 's' : ''}`);
    }
    if (months > 0) {
        parts.push(`${months} month${months > 1 ? 's' : ''}`);
    }
    if (days > 0) {
        parts.push(`${days} day${days > 1 ? 's' : ''}`);
    }

    if (short) {
        return parts[0];
    }

    return parts.join(', ');
}