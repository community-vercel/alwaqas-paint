import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/6.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/int/maxpro';

export const metadata = {
  title: "Berger MaxPro",
  description: "Top-quality interior paint with a smooth, durable, and washable flat finish for various surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger MaxPro",
    description: "Interior paint with 2-3 hour drying time and 13-15 m²/liter coverage for a smooth, flat finish.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger MaxPro Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger MaxPro | Alwaqas Paint",
    description: "Durable, washable interior paint with a flat finish, ideal for clean and long-lasting surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger MaxPro Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "MaxPro",
    image: "/berger/products/6.webp",
    description: "MaxPro is a top quality paint, ideal for interior surfaces. It dries out to a smooth surface and flat finish which is durable and easily washable.",
    application: "All surfaces should be clean, free from dust, dirt and loose paint, and should be dried before applying the paint. New surfaces should be sand papered and brushed off using a bristle brush. It should then be coated with 2 coats of Berger Plastron Wall Primer Sealer or Berger Water Based Primer.",
    DryingTime: "2-3 hours",
    Coverage: "13 to 15 m2 per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;