import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/37.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/wood/advance-polyurethane-2k-clear';

export const metadata = {
  title: "Berger Advance Polyurethane 2K Clear",
  description: "High-gloss transparent wood finish providing superior protection against moisture for all wood surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Advance Polyurethane 2K Clear",
    description: "Premium 2K polyurethane clear coat for interior and exterior wood surfaces with 1-3 hour drying time.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Advance Polyurethane 2K Clear Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Advance Polyurethane 2K Clear | Alwaqas Paint",
    description: "Durable wood finish that seals surfaces against moisture while providing a high-gloss transparent coating.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Advance Polyurethane 2K Clear Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Advance Polyurethane 2k Clear",
    image: "/berger/products/37.webp", 
    description: "Woodpro polyurethane 2k clear is a full gloss transparent type of wood finish designed for use on all kinds of wood surfaces.",
    application: "Woodpro polyurethane 2k clear is a full gloss transparent type of wood finish designed for use on all kinds of wood surfaces. After curing, polyurethane coat clear wood finish seals the surface and makes it impervious for moisture and other foreign intrusions that may absorb in the wood surface and harm or distort it. It gives high gloss and it is suitable for protection and decor of exterior and interior wooden surfaces.",
    DryingTime: "1-3 hours",
    Coverage: "10-12 m² per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;