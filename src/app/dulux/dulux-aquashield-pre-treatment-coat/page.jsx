import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/24.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-aquashield-pre-treatment-coat';

export const metadata = {
  title: "Dulux Aquashield Pre Treatment Coat | Alwaqas Paint",
  description: "High-performance water-based primer with FungiClean Technology for ultimate water defense on exterior and interior surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Aquashield Pre Treatment Coat",
    description: "Water-based primer featuring AntiMicrobial Pack to protect against fungi and microbial growth, ensuring clean and durable surfaces for topcoats.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Aquashield Pre Treatment Coat Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Aquashield Pre Treatment Coat | Alwaqas Paint",
    description: "Professional-grade pretreatment coat with FungiClean Technology for superior surface preparation.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Aquashield Pre Treatment Coat Product",
  }
};

const AquashieldPreTreatmentCoat = () => {
  const product = {
    id: 15,
    title: "Dulux Aquashield Pre Treatment Coat",
    image: "/dulux/24.png",
    description:
      "Dulux Aquashield Pre Treatment Coat is a high-performance, water-based primer designed to provide ultimate water defense for exterior and interior surfaces. It features FungiClean Technology and an AntiMicrobial Pack to protect against fungi and microbial growth, ensuring a clean and durable surface for subsequent coatings. Ideal for preparing masonry, concrete, and plaster surfaces before applying topcoats.",
    keyInformation: {
      finish: "Matt",
      coverage: "110-112 m2/L",
      dryingTime: "4-6 Hours",
      coats: "1",
    },
    features: [
      "FungiClean Technology",
      "AntiMicrobial Pack",
      "Surface Prep Wash",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "Apply one coat of Dulux Aquashield Pre Treatment Coat using a brush, roller, or spray after thorough surface preparation. Ensure surfaces are clean, dry, and free from dirt, grease, and loose material. Allow 4-6 hours for drying before applying the topcoat. For optimal results, refer to the product brochure or visit our website for detailed application instructions.",
    downloads: {
      sds: "/pdf/dulux/pre_treatment_coat.pdf",
      tds: "/pdf/dulux/tds_dulux_aquashield_pretreatment_coast_pk.pdf",
      // warranty: "/pdf/dulux/pre_treatment_coat.pdf", // Fixed typo in path (removed space)
    },
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default AquashieldPreTreatmentCoat;