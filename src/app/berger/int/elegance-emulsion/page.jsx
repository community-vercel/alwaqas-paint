import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/2.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/int/elegance-emulsion';

export const metadata = {
  title: "Berger Elegance Emulsion",
  description: "Top-quality acrylic-based interior emulsion paint with a smooth, durable, and washable matt finish.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Elegance Emulsion",
    description: "Premium matt emulsion paint with 1-3 hour drying time and 14-16 m²/liter coverage for interior surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Elegance Emulsion Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Elegance Emulsion | Alwaqas Paint",
    description: "Durable, washable matt emulsion paint for interior walls, offering a smooth and long-lasting finish.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Elegance Emulsion Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Elegance Emulsion",
    image: "/berger/products/2.webp",
    description: "Elegance Matt Emulsion is top quality acrylic-based emulsion paint, ideal for interior surfaces. It dries out to a smooth finish which is durable and easily washable. It is one of the best matt emulsion paint.",
    application: "Elegance Matt Emulsion can be applied with brush, roller or spray. Add 3 to 4 litres of water to one gallon of paint before use. For final coat, some extra water may be added to improve flow. Clean all equipment and brushes with water soon after use.",
    DryingTime: "1 - 3 hours",
    Coverage: "covers 14 to 16 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;