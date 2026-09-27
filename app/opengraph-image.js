import { ImageResponse } from 'next/og';
import { content } from '@/lib/site';

export const alt = 'Kalder Precision';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#f3f2ee',
          color: '#111214',
          backgroundImage: 'linear-gradient(#dcdad3 1px, transparent 1px), linear-gradient(90deg, #dcdad3 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 28, fontWeight: 700 }}>
          <div style={{ width: 22, height: 22, background: '#ff4f1a' }} />
          KALDER PRECISION
        </div>
        <div style={{ fontSize: 80, fontWeight: 700, lineHeight: 1.02, maxWidth: 950 }}>{content.tagline}</div>
        <div style={{ fontSize: 24, color: '#5d6168' }}>Vibration · Thermal · Laser · Gas · Kalder Sense</div>
      </div>
    ),
    size,
  );
}
