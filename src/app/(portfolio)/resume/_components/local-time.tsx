'use client';
import { MoonIcon, SunMedium, SunriseIcon, SunsetIcon } from 'lucide-react';
import { Greet } from './greet';

export function LocalTime() {
  const time = new Date().toLocaleTimeString('en-In', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const hour = Number(time.split(':')[0]);
  const ampm = time.split(' ')[1].toLowerCase();

  const Time = () => {
    if (ampm === 'am') {
      if (hour >= 5 && hour < 12) {
        return {
          icon: () => <SunriseIcon className="size-4 md:size-5" />,
          time: 'Morning',
        };
      } else {
        return {
          icon: () => <MoonIcon className="size-4 md:size-5" />,
          time: 'Night',
        };
      }
    } else {
      if (hour >= 12 && hour < 5) {
        return {
          icon: () => <SunMedium className="size-4 md:size-5" />,
          time: 'Afternoon',
        };
      } else if (hour >= 5 && hour < 7) {
        return {
          icon: () => <SunsetIcon className="size-4 md:size-5" />,
          time: 'Evening',
        };
      } else {
        return {
          icon: () => <MoonIcon className="size-4 md:size-5" />,
          time: 'Night',
        };
      }
    }
  };

  const Icon = Time();
  return (
    <td className="flex items-center gap-2">
      Asia/Kolkata (UTC+5:30) - {time}
      <Greet icon={Icon.icon()} time={Icon.time} />
    </td>
  );
}
