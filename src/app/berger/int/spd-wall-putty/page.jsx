import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/12.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/int/spd-wall-putty';

export const metadata = {
  title: "Berger SPD Wall Putty",
  description: "Ready-to-use high quality interior wall putty for creating smooth surfaces before painting.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger SPD Wall Putty",
    description: "Premium ready-mix putty for interior walls that creates perfect smooth surfaces for painting applications.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger SPD Wall Putty Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger SPD Wall Putty | Alwaqas Paint",
    description: "Easy-to-apply wall putty that prepares interior surfaces for flawless paint finishes.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger SPD Wall Putty Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "SPD Wall Putty",
    image: "/berger/products/12.webp", 
    description: "SPD Wall Putty is a ready-to-use high quality putty, which forms a smooth finish. Wall Putty should be used on interior walls only. It is designed for use on cement surfaces, chipboard, plywood, etc.",
    application: "SPD Wall Putty is a ready-to-use product which, after application, should be sand-papered to a smooth finish.",
    DryingTime: "1 hour",
    Coverage: "5-7 m² per kg per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;