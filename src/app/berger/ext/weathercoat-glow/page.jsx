import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/18.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/ext/weathercoat-glow';

export const metadata = {
  title: "Berger Weathercoat Glow 365",
  description: "Premium exterior emulsion paint with anti-fungal properties and a rich sheen finish for masonry surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Weathercoat Glow 365",
    description: "Durable, silane-based acrylic exterior paint with 1-3 hour drying time and 13-16 m²/liter coverage.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Weathercoat Glow 365 Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Weathercoat Glow 365 | Alwaqas Paint",
    description: "Anti-fungal exterior paint with long-lasting sheen and weather resistance for various masonry surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Weathercoat Glow 365 Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Weathercoat Glow 365",
    image: "/berger/products/18.webp",
    description: "Weathercoat Glow 365 is one of the best exterior paint in Pakistan. it is an anti-fungal premium quality exterior emulsion specially formulated on Silane base pure acrylic resin. It comes with a rich sheen finish which enhances beauty of your home for longer period than normal.",
    application: "Weathercoat Glow 365 gives a highly durable exterior sheen finish to all types of masonry surfaces including Pebble dash. It is resistant to all kinds of adverse climatic and weather conditions hence providing long lasting protection for years.",
    DryingTime: "1 - 3 hours",
    Coverage: "13 to 16 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;