
import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/2.jpg",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-ambiance-velvet-touch-pearl-glo';

export const metadata = {
  title: "Dulux Ambiance Velvet Touch Pearl Glo",
  description: "Ultra-luxurious water-based interior paint with a smooth velvet touch and soft sheen, ideal for interior masonry surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Ambiance Velvet Touch Pearl Glo",
    description: "Premium interior emulsion with soft sheen, anti-bacterial, anti-mould, and low VOC properties for a luxurious and durable finish.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Ambiance Velvet Touch Pearl Glo Product",
        type: "image/jpeg",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Ambiance Velvet Touch Pearl Glo | Alwaqas Paint",
    description: "Premium interior paint with a soft sheen finish, offering anti-bacterial and low VOC properties for a luxurious look.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/jpeg",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Ambiance Velvet Touch Pearl Glo Product",
  }
};

const VelvetTouchPearlGlo = () => {
  const product = {
    id: 1,
    title: "Dulux Ambiance Velvet Touch Pearl Glo",
    image: "/dulux/2.jpg",
    description:
      "Dulux Velvet Touch Soft Sheen Emulsion is an ultra luxurious water-based interior paint with the smooth touch of velvet. Recommended for interior surfaces only.",
    keyInformation: {
      finish: "Soft Sheen",
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
      // sds: "/pdf/dulux/xx_pk_en_dulux_ambExternalsiance_velvet_touch_pearl_glo_white.pdf",
      tds: "/pdf/dulux/tds_ambiance_pearl_glo_pk.pdf",
      warranty: "/pdf/dulux/ambiance_vt_tc.pdf"
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default VelvetTouchPearlGlo;