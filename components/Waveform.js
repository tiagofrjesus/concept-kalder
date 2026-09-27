// Decorative hero visual: a live-looking vibration trace on a measurement grid.
// The trace repeats exactly every W units, so translating it by -50% loops seamlessly.
const W = 1200;
const H = 220;

function trace(seed) {
  const mid = H / 2;
  let d = `M0 ${mid}`;
  for (let x = 0; x <= W * 2; x += 4) {
    const t = (x / W) * Math.PI * 2;
    const envelope = 0.55 + 0.45 * Math.sin(t * 2 + seed);
    const y = mid + Math.sin(t * 9) * mid * 0.5 * envelope + Math.sin(t * 31 + seed) * mid * 0.12;
    d += ` L${x} ${y.toFixed(1)}`;
  }
  return d;
}

const MAIN = trace(1);
const GHOST = trace(2.6);

export default function Waveform() {
  return (
    <div className="wave" aria-hidden="true">
      <div className="wave__readout">
        <span>CH1 · KV-700</span>
        <span>RMS 2.41 mm/s</span>
        <span className="wave__live">LIVE</span>
      </div>
      <div className="wave__viewport">
        <svg viewBox={`0 0 ${W * 2} ${H}`} preserveAspectRatio="none" className="wave__svg">
          <path d={GHOST} className="wave__ghost" />
          <path d={MAIN} className="wave__main" />
        </svg>
      </div>
    </div>
  );
}
