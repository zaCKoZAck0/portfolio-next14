/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'zackozack (Ayush Kumar Yadav)';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const [semiBold, soraSemiBold, thin] = await Promise.all([
    fetch(new URL('public/fonts/JetBrainsMono-SemiBold.ttf', import.meta.url)).then((res) =>
      res.arrayBuffer(),
    ),
    fetch(new URL('public/fonts/Sora-SemiBold.ttf', import.meta.url)).then((res) =>
      res.arrayBuffer(),
    ),
    fetch(new URL('public/fonts/Sora-Thin.ttf', import.meta.url)).then((res) => res.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          background: 'hsl(226, 19%, 13%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          padding: '56px',
          color: 'hsl(0, 0%, 100%)',
        }}
      >
        <h1
          style={{
            fontFamily: 'JetBrains Mono SemiBold',
            fontSize: 96,
            // marginBottom: 24
          }}
        >
          <span
            style={{
              color: 'hsl(231, 28%, 73%)',
            }}
          >
            /
          </span>
          projects
        </h1>
        <div
          style={{
            display: 'flex',
            gap: 48,
            justifyItems: 'between',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <img
            src="https://utfs.io/f/7b6ae0f8-148e-4e57-bd36-14ae0c90887b-e4obn3.gif"
            alt={alt}
            style={{
              borderRadius: '50%',
              width: 300,
              height: 300,
              border: '4px solid rgb(254, 215, 170)',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <h2
              style={{
                fontFamily: 'Sora SemiBold',
                fontSize: 72,
              }}
            >
              Ayush Kumar Yadav
            </h2>
            <h3
              style={{
                fontFamily: 'Sora Thin',
                fontSize: 72,
              }}
            >
              zackozack
            </h3>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'JetBrains Mono SemiBold',
          data: semiBold,
          style: 'normal',
          weight: 600,
        },
        {
          name: 'Sora SemiBold',
          data: soraSemiBold,
          style: 'normal',
          weight: 600,
        },
        {
          name: 'Sora Thin',
          data: thin,
          style: 'normal',
          weight: 100,
        },
      ],
    },
  );
}
