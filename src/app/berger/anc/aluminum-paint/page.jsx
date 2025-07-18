import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/27.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/anc/aluminum-paint';

export const metadata = {
  title: "Berger Aluminum Paint",
  description: "High-quality aluminum paint for direct application, offering a durable, protective finish for various surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Aluminum Paint",
    description: "Easy-to-apply aluminum paint with excellent coverage and fast drying for clean, primed surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Aluminum Paint Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Aluminum Paint | Alwaqas Paint",
    description: "Durable aluminum paint with 4-6 hour drying time and 2-4 m²/liter coverage per coat.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Aluminum Paint Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Aluminum Paint",
    image: "/berger/products/27.webp",
    description: "Aluminum Paint can be directly applied from the can after mixing the paste and the medium. If needed, it can be thinned down with mineral turpentine.",
    application: "Surface should be clean, dry and free from loose and flaking material. If required, it should be properly primed.",
    DryingTime: "4-6 hours",
    Coverage: "2 to 4 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;