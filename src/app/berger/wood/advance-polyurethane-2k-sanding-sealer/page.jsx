import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/40.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/wood/advance-polyurethane-2k-sanding-sealer';

export const metadata = {
  title: "Berger Advance Polyurethane 2K Sanding Sealer",
  description: "Semi-gloss transparent wood sealer that fills scratches and pores while protecting wood surfaces from moisture damage.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Advance Polyurethane 2K Sanding Sealer",
    description: "Professional wood sealer for preparing surfaces before applying polyurethane finishes, with 1-3 hour drying time.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Advance Polyurethane 2K Sanding Sealer Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Advance Polyurethane 2K Sanding Sealer | Alwaqas Paint",
    description: "High-quality wood sealer that creates a perfect base for polyurethane topcoats on all wood surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Advance Polyurethane 2K Sanding Sealer Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Advance Polyurethane 2k Sanding Sealer",
    image: "/berger/products/40.webp", 
    description: "Woodpro polyurethane 2k sanding sealer is a semi-gloss transparent type wood sealer designed for use on all kinds of wood surfaces to seal the mild scratches and pores of the surface.",
    application: "Woodpro polyurethane 2k sanding sealer is a semi-gloss transparent type wood sealer designed for use on all kinds of wood surfaces to seal the mild scratches and pores of the surface. After curing, polyurethane sanding sealer seals the surface and makes it impervious to moisture and other foreign intrusions that may absorb into the wood surface. It is applied after filling and stain application on the surface. Polyurethane sanding sealer must be over-coated with polyurethane gloss/matt polyurethane wood finish.",
    DryingTime: "1-3 hours",
    Coverage: "10-12 m² per litre per coat (varies by surface porosity)",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;