import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/22.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/ext/weathercoat-pure-seal';

export const metadata = {
  title: "Berger Weathercoat Pure Seal",
  description: "Water-based acrylic exterior primer for resisting alkali and moisture in new plaster surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Weathercoat Pure Seal",
    description: "Durable exterior primer with 2-3 hour drying time and 16-18 m²/liter coverage for plaster surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Weathercoat Pure Seal Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Weathercoat Pure Seal | Alwaqas Paint",
    description: "Acrylic primer with tough, flexible film to protect new plaster from moisture and alkali.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Weathercoat Pure Seal Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Weathercoat Pure Seal",
    image: "/berger/products/22.webp",
    description: "WEATHERCOAT PURE SEAL - Exterior Primer is a Water-based Acrylic Primer specially formulated to resist alkali and moisture present in the new plaster surfaces. It forms a tough and flexible film which prevents passage of moisture from the substrate through the paint film.",
    application: "Berger Exterior Putty can be applied after the application of Weathercoat Pure Seal - Exterior Primer. Remove all defective or poorly adhering material by rubbing with a suitable abrasive paper or stiff brush.",
    DryingTime: "2 to 3 hours",
    Coverage: "16-18 m2 per liter per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;