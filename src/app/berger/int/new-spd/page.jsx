import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/7.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/int/new-spd';

export const metadata = {
  title: "Berger New SPD",
  description: "Top-quality smooth emulsion paint for interior walls, ceilings, and various surfaces like cement and chipboard.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger New SPD",
    description: "Smooth emulsion paint with 2-3 hour drying time and 11-15 m²/liter coverage for interior surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger New SPD Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger New SPD | Alwaqas Paint",
    description: "Versatile interior emulsion paint for walls, ceilings, and multiple surfaces with a smooth finish.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger New SPD Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "New SPD",
    image: "/berger/products/7.webp",
    description: "SPD is a top quality smooth emulsion. It can be used on walls, ceilings, old and new cement, concrete, plasters, chipboard and hardboard.",
    application: "Mix equal or more volume of water for thinning. Final coat should be thinned more for a smoother finish.",
    DryingTime: "2-3 hours",
    Coverage: "11 to 15 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;