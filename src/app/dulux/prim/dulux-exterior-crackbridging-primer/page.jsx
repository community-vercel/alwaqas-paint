import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/primer/6.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/prim/dulux-exterior-crackbridging-primer';

export const metadata = {
  title: "Dulux Exterior Crackbridging Primer | Protective Exterior Coating | Alwaqas Paint",
  description: "High-quality acrylic primer with crack bridging technology for exterior surfaces. Prevents peeling, alkali attacks and ensures excellent intercoat adhesion.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Exterior Crackbridging Primer",
    description: "Exterior primer with advanced crack bridging technology that protects top coats from hairline cracks and alkali damage.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Exterior Crackbridging Primer Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Exterior Crackbridging Primer | Alwaqas Paint",
    description: "Professional-grade exterior primer that reinforces coating durability and prevents substrate cracks from affecting the finish.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Exterior Crackbridging Primer Product",
  }
};

const DuluxExteriorCrackbridgingPrimer = () => {
  const product = {
    id: 20,
    title: "Dulux Exterior Crackbridging Primer",
    image: "/dulux/primer/6.png",
    description: "Dulux Exterior Crackbridging Primer is a high quality exterior acrylic primer that is equipped with crack bridging technology which prevents top coat from hairline cracks. This high quality exterior primer also prevents top coat from peeling, alkali attacks and provides excellent adhesion between coats. Ideal for preparing exterior surfaces before final coating.",
    keyInformation: {
      finish: "Matt",
      coverage: "16-18 m²/L",
      dryingTime: "2-3 Hours (Depending on temperature and humidity)",
      coats: "1"
    },
    features: [
      "Crack Bridging Technology",
      "Alkali Resistant Formula",
      "Prevents Top Coat Peeling",
      "Excellent Intercoat Adhesion",
      "Reinforces Coating Durability"
    ],
    applicationDescription: "1. Clean and prepare the exterior surface thoroughly\n2. Apply 1 coat of Dulux Exterior Crackbridging Primer\n3. Allow 2-3 hours drying time before topcoat application\n4. Ensure proper surface temperature (10-35°C) during application",
    downloads: {
      sds: null,
      tds: "/pdf/dulux/primer/tds_dulux_exterior_crack_bridging_primer_pk.pdf",
      warranty: null
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default DuluxExteriorCrackbridgingPrimer;