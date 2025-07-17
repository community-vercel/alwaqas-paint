import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/7.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-matt-enamel';

export const metadata = {
  title: "Dulux Matt Enamel | Steam & Moisture Resistant Paint | Alwaqas Paint",
  description: "Premium solvent-based matt enamel with excellent steam/moisture resistance for kitchens & bathrooms. 3-year warranty. Anti-bacterial & easy to clean.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Matt Enamel | High Matt Finish Paint",
    description: "Super matt enamel paint with peel guard technology, ideal for high-moisture areas. Resistant to steam, moisture, and bacterial growth.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Matt Enamel Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Matt Enamel | Alwaqas Paint",
    description: "Professional-grade matt enamel with anti-viral properties for kitchens, bathrooms and interior surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Matt Enamel Product",
  }
};

const MattEnamel = () => {
  const product = {
    id: 1,
    title: "Dulux Matt Enamel",
    image: "/dulux/7.png",
    description:
      "Dulux Matt enamel is a high quality solvent-based super matt finish, suitable for use on all type of interior wood, metal and masonry surfaces. Dulux Matt Enamel has excellent resistance to steam and moisture, which makes it ideal for use in kitchens and bathrooms. The anti-bacterial and anti-viral properties provide additional protection in high-humidity environments.",
    keyInformation: {
      finish: "High Matt",
      coverage: "13-15 m²/L",
      dryingTime: "16 Hours between coats",
      coats: "2-3",
    },
    features: [
      "3 Years Performance Warranty",
      "Excellent Resistance To Steam and Moisture",
      "Ideal For Use in Kitchens and Bathrooms",
      "Anti-Viral Protection",
      "Easy To Clean & Washable",
      "Anti-Bacterial Formula",
      "Peel Guard Technology",
      "No Added Lead or Mercury"
    ],
    applicationDescription:
      "1. Prepare surface by cleaning and sanding if necessary\n2. Apply 2-3 coats of Dulux Matt Enamel\n3. Maintain 16 hours drying time between coats\n4. Ensure proper ventilation during application and drying",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en_dulux_matt_finish_enamel__f335.pdf",
      tds: "/pdf/dulux/tds_matt_enamel_pk.pdf",
      warranty: "/pdf/dulux/matt_enamel_tc.pdf"
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default MattEnamel;