import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/4.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/int/vip-allrounder';

export const metadata = {
  title: "Berger VIP Allrounder Matt Enamel",
  description: "Versatile matt finish enamel for multiple surfaces including walls, woodwork, metal and cement plaster with excellent coverage.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger VIP Allrounder Matt Enamel",
    description: "Multi-surface enamel paint providing durable matt finish for both interior and exterior applications.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger VIP Allrounder Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger VIP Allrounder | Alwaqas Paint",
    description: "High-performance matt enamel suitable for walls, wood, metal and various surfaces with 13-15m² coverage per litre.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger VIP Allrounder Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "VIP Allrounder",
    image: "/berger/products/4.webp", 
    description: "Berger All-Rounder Matt Enamel is a high quality paint especially formulated and designed to give a smooth matt finish. It is ideal for walls, ceilings, old and new cement plasters, woodwork, metal, chipboards and hardboards.",
    application: "Berger All-Rounder Matt Enamel can be applied by brush, roller or spray. It may be thinned up to 10% by using good quality mineral turpentine (white spirit). Final coat may further be thinned slightly to get improved leveling and appearances.",
    DryingTime: "2-3 hours",
    Coverage: "13-15 m² per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;