import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    // Default metadata for personas - will be overridden by page-specific metadata
    openGraph: {
      siteName: 'Gavin Doyle',
      type: 'profile',
    },
  };
}

export default function PersonasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
