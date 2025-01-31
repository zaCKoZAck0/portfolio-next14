'use client';

export function LocalTime() {
  const time = new Date().toLocaleTimeString('en-In', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return (
    <p className="flex items-center gap-2 text-sm md:text-base">
      {time} <span className="block text-muted-foreground/50">(UTC+5:30)</span>
    </p>
  );
}
