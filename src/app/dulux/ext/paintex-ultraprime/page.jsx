import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/exterior/16.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/ext/paintex-ultraprime';

export const metadata = {
  title: "Paintex Ultraprime",
  description: "High quality solvent-based sealer for masonry surfaces that protects against alkali and salt damage while ensuring excellent adhesion.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Paintex Ultraprime",
    description: "Masonry sealer that seals powdery, porous surfaces and provides strong adhesion for top coats on interior/exterior surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Paintex Ultraprime Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paintex Ultraprime | Alwaqas Paint",
    description: "Solvent-based masonry sealer with no added lead or mercury for safe surface preparation.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Paintex Ultraprime Product",
  }
};

const PaintexStarSyntheticEnamel = () => {
  const product = {
    id: 10,
    title: "Paintex Ultraprime",
    image: "/dulux/exterior/16.png",
    description: "Paintex Ultraprime is a high quality solvent based sealer for masonry surfaces. It is ideal for use on all interior/exterior surfaces. It reduces damage from alkali and salts and seals powdery, porous surfaces. It provides excellent adhesion with the surface and top coats.",
    keyInformation: {
      finish: "Matt",
      coverage: "10-12 m2/L",
      dryingTime: "16 Hours between coats",
      coats: "2"
    },
    features: [
      "High Quality Solvent Based Sealer",
      "No Added Lead or Mercury",
      "Reduces Damage From Alkali and Salts"
    ],
    applicationDescription: "Apply 1 coat of Paintex Ultraprime and dry overnight",
    downloads: {
      sds: null,
      tds: null,
      warranty: null
    }
  };

  return <BaseDetailPage product={product} />;
};

export default PaintexStarSyntheticEnamel;