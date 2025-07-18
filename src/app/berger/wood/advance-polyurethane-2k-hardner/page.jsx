import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/38.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/wood/advance-polyurethane-2k-hardner';

export const metadata = {
  title: "Berger Advance Polyurethane 2K Hardener",
  description: "High-quality isocyanate hardener for 2-pack PU coatings that delivers a durable, glossy finish for wood surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Advance Polyurethane 2K Hardener",
    description: "Premium hardener for 2-pack PU systems that creates high-gloss, durable finishes on wood with 1-3 hour drying time.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Advance Polyurethane 2K Hardener Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Advance Polyurethane 2K Hardener | Alwaqas Paint",
    description: "Isocyanate-based hardener that cures 2-pack PU coatings to create protective, wet-look finishes on wood surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Advance Polyurethane 2K Hardener Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Advance Polyurethane 2k Hardener",
    image: "/berger/products/38.webp", 
    description: "WOODPRO POLYURETHANE 2K HARDENER is a high quality Isocyanate based Hardener for curing of 2 Pack PU based, PU Topcoats and 2-Pack PU Clear coats which provides an excellent wet look appearance.",
    application: "WOODPRO POLYURETHANE 2K HARDENER is a high quality Isocyanate based Hardener for curing of 2 Pack PU based, PU Topcoats and 2-Pack PU Clear coats which provides an excellent wet look appearance. It gives a very high quality smooth, glossy, hard and durable finish when used with 2-Pack.",
    DryingTime: "1-3 hours",
    Coverage: "10-12 m² per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;