import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/21.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/ext/weathercoat-exterior-putty';

export const metadata = {
  title: "Berger Weathercoat Exterior Putty",
  description: "Smooth water-based exterior putty with durable, weather-resistant finish for masonry surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Weathercoat Exterior Putty",
    description: "High-durability exterior putty with 1-3 hour drying time and 12-14 m²/liter coverage per coat.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Weathercoat Exterior Putty Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Weathercoat Exterior Putty | Alwaqas Paint",
    description: "Weather-resistant exterior putty with tough resin and lightfast pigments for long-lasting protection.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Weathercoat Exterior Putty Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Weathercoat Exterior Putty",
    image: "/berger/products/21.webp",
    description: "Weathercoat is a smooth water based masonry exterior paint. It contains tough flexible resin pigmented with titanium dioxide and light fast pigments. Its smooth finish has the highest degree of durability and is resistant to all types of weather conditions.",
    application: "Weathercoat is a smooth water based masonry exterior paint. It contains tough flexible resin pigmented with titanium dioxide and light fast pigments. Its smooth finish has the highest degree of durability and is resistant to all types of weather conditions.",
    DryingTime: "1 - 3 hours",
    Coverage: "12 to 14 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;