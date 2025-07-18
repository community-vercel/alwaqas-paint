import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/39.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/wood/advance-polyurethane-2k-matt-clear';

export const metadata = {
  title: "Berger Advance Polyurethane 2K Matt Clear",
  description: "Premium matt transparent wood finish providing durable protection against moisture for all wood surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Advance Polyurethane 2K Matt Clear",
    description: "High-quality 2K polyurethane matt clear coat for interior and exterior wood surfaces with 1-3 hour drying time.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Advance Polyurethane 2K Matt Clear Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Advance Polyurethane 2K Matt Clear | Alwaqas Paint",
    description: "Durable matt wood finish that seals surfaces against moisture while maintaining a natural wood appearance.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Advance Polyurethane 2K Matt Clear Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Advance Polyurethane 2k Matt Clear",
    image: "/berger/products/39.webp", 
    description: "Woodpro polyurethane 2k Matt clear is a matt transparent wood finish designed for use on all kinds of wood surfaces.",
    application: "Woodpro polyurethane 2k Matt clear is a matt transparent wood finish designed for use on all kinds of wood surfaces. After curing, polyurethane clear wood matt finish seals the surface and makes it impervious to moisture and other foreign intrusions that may absorb into the wood surface and harm or distort it. It provides protection and decor for both exterior and interior wooden surfaces.",
    DryingTime: "1-3 hours",
    Coverage: "10-12 m² per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;