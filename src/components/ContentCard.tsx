interface ContentCardProps {
  title: string;
  content: string;
  icon?: string;
  href?: string;
  metadata?: string;
}

export default function ContentCard({ title, content, icon, href, metadata }: ContentCardProps) {
  const CardContent = () => (
    <>
      <h3>
        {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
        {title}
      </h3>
      {metadata && (
        <p style={{ 
          fontSize: '0.9rem', 
          color: '#999', 
          marginBottom: '10px',
          fontWeight: 'bold'
        }}>
          {metadata}
        </p>
      )}
      <p>{content}</p>
    </>
  );

  if (href) {
    return (
      <a href={href} className="content-card" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardContent />
      </a>
    );
  }

  return (
    <div className="content-card">
      <CardContent />
    </div>
  );
}
