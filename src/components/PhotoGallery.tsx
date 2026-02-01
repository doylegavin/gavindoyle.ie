import Image from 'next/image';

interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function PhotoGallery({ 
  photos, 
  columns = 3, 
  className = "" 
}: PhotoGalleryProps) {
  return (
    <div className={`content-grid ${className}`} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {photos.map((photo, index) => (
        <div key={index} className="photo-item">
          <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', borderRadius: '8px' }}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {photo.caption && (
            <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#999', textAlign: 'center' }}>
              {photo.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
} 