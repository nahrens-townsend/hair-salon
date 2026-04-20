import { Box } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEOHead from '../SEOHead';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Lumière Hair Studio',
  url: 'https://lumierehair.ca',
  telephone: '+12045550192',
  email: 'hello@lumierehair.ca',
  description: 'Winnipeg\'s premier hair studio offering balayage, precision cuts, bridal styling, colour services, and more.',
  image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&q=85',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '67 Alenbrook Bay',
    addressLocality: 'Winnipeg',
    addressRegion: 'MB',
    postalCode: 'R3X 1Y2',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.8951,
    longitude: -97.1892,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '10:00', closes: '16:00' },
  ],
  sameAs: [
    'https://instagram.com/lumierehair',
    'https://facebook.com/lumierehairstudio',
  ],
};

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <SEOHead
        title="Lumière Hair Studio | Premier Hair Salon in Winnipeg, MB"
        description="Lumière Hair Studio — Winnipeg's premier hair salon. Expert balayage, precision cuts, bridal styling & colour services. Book your appointment today."
        jsonLd={localBusinessSchema}
      />
      <Navbar />
      <Box as="main" flex="1">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
