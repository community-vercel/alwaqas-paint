
import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/primer/7.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/prim/dulux-promise-exterior-primer';

export const metadata = {
  title: "Dulux Promise Exterior Primer | Alkali-Resistant Primer | Alwaqas Paint",
  description: "Water-based exterior primer with alkali-resistant formulation for superior paint adhesion and durability. Low VOC, low odor formula for exterior surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Promise Exterior Primer",
    description: "High-quality water-based primer that enhances topcoat durability on exterior surfaces with excellent alkali resistance.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Promise Exterior Primer Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Promise Exterior Primer | Alwaqas Paint",
    description: "Exterior primer with low VOC formulation that ensures strong paint adhesion on outdoor surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Promise Exterior Primer Product",
  }
};

const DuluxPromiseExteriorPrimer = () => {
  const product = {
    id: 21,
    title: "Dulux Promise Exterior Primer",
    image: "/dulux/primer/7.png",
    description: "Dulux Promise Exterior Primer is a high quality, water-based primer for exterior surfaces. Its Alkali-Resistant formulation increases topcoat durability while providing excellent adhesion. The low VOC, low odor formula makes it environmentally friendly and pleasant to work with.",
    keyInformation: {
      finish: "Matt",
      coverage: "14-16 m²/L/coat",
      dryingTime: "2-3 Hours (depending on weather conditions)",
      coats: "1"
    },
    features: [
      "Alkali Resistant Formula",
      "Excellent Adhesion Properties",
      "Low Odor Formulation",
      "Low VOC Content",
      "No Added Lead or Mercury",
      "Water-Based Formula",
      "Enhances Topcoat Durability"
    ],
    applicationDescription: "1. Clean and prepare exterior surfaces thoroughly\n2. Apply one even coat of Dulux Promise Exterior Primer\n3. Allow 2-3 hours drying time before topcoat application\n4. For best results, apply when temperatures are between 10°C and 35°C",
    downloads: {
      sds: null,
      tds: null,
      warranty: null
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default DuluxPromiseExteriorPrimer;