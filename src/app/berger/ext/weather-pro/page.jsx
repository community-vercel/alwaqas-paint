import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/20.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/ext/weather-pro';

export const metadata = {
  title: "Berger Weather Pro",
  description: "High-quality acrylic exterior finish for durable protection of plaster, asbestos, stone, and brickwork.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Weather Pro",
    description: "Smooth exterior paint with 1-3 hour drying time and 13-16 m²/liter coverage for various surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Weather Pro Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Weather Pro | Alwaqas Paint",
    description: "Durable acrylic exterior finish for protecting plaster, stone, and brickwork with high coverage.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Weather Pro Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Weather Pro",
    image: "/berger/products/20.webp",
    description: "Berger Weatherpro Acrylic Exterior Finish is a smooth, high quality exterior finish, especially formulated for the protection of all types of exterior plaster, asbestos, stone and brickwork.",
    application: "Berger Weatherpro Acrylic Exterior Finish is a smooth, high quality exterior finish, especially formulated for the protection of all types of exterior plaster, asbestos, stone and brickwork.",
    DryingTime: "1 - 3 hours",
    Coverage: "13 to 16 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;