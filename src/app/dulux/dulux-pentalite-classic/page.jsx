import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/5.jpg",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-pentalite-classic';

export const metadata = {
  title: "Dulux Pentalite Classic | Premium Acrylic Interior Paint | Alwaqas Paint",
  description: "100% acrylic interior paint with anti-viral, anti-bacterial properties and 4-year warranty. High coverage, low VOC formula for walls and ceilings.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Pentalite Classic | Interior Wall Paint",
    description: "Premium acrylic paint with peel guard technology, anti-mould protection and colour fastness for durable interior finishes.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Pentalite Classic Paint Product",
        type: "image/jpg",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Pentalite Classic | Alwaqas Paint",
    description: "High-quality interior paint with low odor and VOC, suitable for all masonry surfaces with easy washability.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/jpg",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Pentalite Classic Paint Product",
  }
};

const PentaliteClassic = () => {
  const product = {
    id: 1,
    title: "Dulux Pentalite Classic",
    image: "/dulux/5.jpg",
    description:
      "Dulux Pentalite Classic is a 100% acrylic based paint suitable for all types of interior masonry surfaces. Featuring advanced anti-viral and anti-bacterial properties, it provides durable protection while maintaining excellent colour fastness. The low VOC, low odor formula makes it ideal for residential and commercial interiors.",
    keyInformation: {
      finish: "Matt",
      coverage: "14-16 m²/L",
      dryingTime: "2-3 Hours between coats",
      coats: "3-4",
    },
    features: [
      "4 Year Performance Warranty",
      "High Opacity & Coverage",
      "Anti-Mould & Anti-Fungus Protection",
      "Anti-Viral Formula",
      "Easy To Clean & Washable",
      "Anti-Bacterial Properties",
      "Peel Guard Technology",
      "High Durability",
      "Low Odour Formulation",
      "Low VOC Content",
      "Excellent Colour Fastness",
      "No Added Lead or Mercury"
    ],
    applicationDescription:
      "1. Prepare surface by cleaning and repairing imperfections\n2. Apply 3-4 coats of Dulux Pentalite Classic\n3. Allow 3 hours drying time between coats\n4. Maintain proper ventilation during application\n5. For best results, use under recommended temperature conditions",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en_dulux_pentalite_classic_brilliant_white.pdf",
      tds: "/pdf/dulux/tds_pentaliteclassic_pk.pdf",
      warranty: "/pdf/dulux/pentalite_classic_tc.pdf"
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default PentaliteClassic;