import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Zack Ozack Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  // Load JetBrains Mono font (regular weight)
  const jetbrainsMono = fetch(
    new URL(
      '/fonts/JetBrainsMono-Regular.ttf',
      process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zackozack.xyz'
    )
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: '#fff',
          padding: '40px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontFamily: 'JetBrains Mono',
            marginBottom: '24px',
            letterSpacing: '-0.05em',
          }}
        >
          Zack Ozack
        </div>
        <div
          style={{
            fontSize: 36,
            fontFamily: 'JetBrains Mono',
            opacity: 0.8,
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          Full-Stack Developer & Creative Coder
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'JetBrains Mono',
          data: await jetbrainsMono,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}