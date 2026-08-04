import React from 'react';
import { Film } from 'lucide-react';

export default function VideoFallback({ title, subtitle }) {
  return (
    <div className="video-fallback" style={{ height: '100%', border: 'none', background: 'transparent' }}>
      <Film size={44} className="video-fallback-icon" />
      <div className="video-fallback-text">{title || 'Video no disponible'}</div>
      <div className="video-fallback-sub">{subtitle || 'El video estará disponible pronto.'}</div>
    </div>
  );
}
