function getHoursBetweenDates(date1: Date, date2: Date): number {
  const millisecondsPerHour = 1000 * 60 * 60;
  const differenceInMilliseconds = Math.abs(date2.getTime() - date1.getTime());
  return Math.floor(differenceInMilliseconds / millisecondsPerHour);
}

export function getRelativeDate(date: Date, short = false, now: Date = new Date()): string {
  let years = now.getFullYear() - date.getFullYear();
  let months = now.getMonth() - date.getMonth();
  let days = now.getDate() - date.getDate();
  const hours = getHoursBetweenDates(now, date);

  if (days < 0) {
    months -= 1;
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (hours < 24) {
    return getRelativeTime(date);
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

export function getRelativeTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''}`;
  }
  if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''}`;
  }
  return `${seconds} second${seconds > 1 ? 's' : ''}`;
}
