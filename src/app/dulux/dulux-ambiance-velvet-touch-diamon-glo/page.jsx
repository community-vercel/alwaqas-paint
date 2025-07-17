
import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/Dulux Ambiance.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-ambiance-velvet-touch-diamon-glo';

export const metadata = {
  title: "Dulux Ambiance Velvet Touch Diamond Glo",
  description: "Ultra-luxurious acrylic-based interior emulsion with a smooth velvet touch, ideal for interior masonry surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Ambiance Velvet Touch Diamond Glo",
    description: "Premium interior emulsion with high sheen, anti-bacterial, anti-mould, and low VOC properties for a luxurious and durable finish.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Ambiance Velvet Touch Diamond Glo Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Ambiance Velvet Touch Diamond Glo | Alwaqas Paint",
    description: "Premium interior emulsion with high sheen, anti-bacterial, and low VOC properties for a luxurious and durable finish.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Ambiance Velvet Touch Diamond Glo Product",
  }
};

const AmbianceDiamondGlo = () => {
  const product = {
    id: 1,
    title: "Dulux Ambiance Velvet Touch Diamond Glo",
    image: "/dulux/Dulux Ambiance.webp",
    description:
      "Dulux Ambiance Velvet Touch Diamond Glo is acrylic based premium quality paint. It is an ultra-luxurious water-based interior emulsion with the smooth touch of velvet. Recommended for interior masonry surfaces only.",
    keyInformation: {
      finish: "High sheen",
      coverage: "16-18 m² per liter per coat",
      dryingTime: "3-4 Hours",
      coats: "4",
    },
    features: [
      "6 Year Performance Warranty",
      "Luxurious Finish",
      "Anti-Mould & Anti-Fungus",
      "Peel Guard",
      "Easy To Clean & Washable",
      "Anti-Bacterial",
      "High Opacity & Coverage",
      "High Durability",
      "Low Odour",
      "Low VOC",
      "No Added Lead or Mercury"
    ],
    applicationDescription:
      "Apply using a brush, roller, or spray on clean, dry interior masonry surfaces. Ensure proper surface preparation by cleaning and priming if necessary. Apply 4 coats for optimal finish, allowing 3-4 hours drying time between coats.",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en_dulux_ambiance_velvet_touch_diamond_glo.pdf",
      tds: "/pdf/dulux/tds_ambiance_diamond_glo_pk.pdf",
      warranty: "/pdf/dulux/ambiance_vt_tc.pdf"
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default AmbianceDiamondGlo;