import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/19.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/ext/vip-weathercoat';

export const metadata = {
  title: "Berger VIP Weathercoat",
  description: "Smooth water-based masonry paint with durable, weather-resistant finish for exterior surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger VIP Weathercoat",
    description: "High-durability exterior paint with 1-3 hour drying time and 12-14 m²/liter coverage per coat.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger VIP Weathercoat Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger VIP Weathercoat | Alwaqas Paint",
    description: "Weather-resistant masonry paint with tough resin and lightfast pigments for long-lasting protection.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger VIP Weathercoat Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "VIP Weathercoat",
    image: "/berger/products/19.webp",
    description: "Weathercoat is a smooth water based masonry exterior paint. It contains tough flexible resin pigmented with titanium dioxide and light fast pigments. Its smooth finish has the highest degree of durability and is resistant to all types of weather conditions.",
    application: "Apply with brush, roller or spray. It can be thinned down with equal volume of water for application. Do not over-thin.",
    DryingTime: "1 - 3 hours",
    Coverage: "12 to 14 meter square per litre per coat,",
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;