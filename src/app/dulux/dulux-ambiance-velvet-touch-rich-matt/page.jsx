
import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/3.jpg",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-ambiance-velvet-touch-rich-matt';

export const metadata = {
  title: "Dulux Ambiance Velvet Touch Rich Matt",
  description: "Ultra-luxurious 100% acrylic-based interior emulsion with a smooth velvet touch and rich matt finish, ideal for interior surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Ambiance Velvet Touch Rich Matt",
    description: "Premium interior emulsion with a rich matt finish, offering anti-bacterial, anti-mould, and low VOC properties for a luxurious and durable look.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Ambiance Velvet Touch Rich Matt Product",
        type: "image/jpeg",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Ambiance Velvet Touch Rich Matt | Alwaqas Paint",
    description: "Premium interior paint with a rich matt finish, offering anti-bacterial and low VOC properties for a luxurious aesthetic.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/jpeg",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Ambiance Velvet Touch Rich Matt Product",
  }
};

const VelvetTouchRichMatt = () => {
  const product = {
    id: 1,
    title: "Dulux Ambiance Velvet Touch Rich Matt",
    image: "/dulux/3.jpg",
    description:
      "Dulux Velvet Touch is a 100% acrylic-based premium quality paint. It is an ultra luxurious water based interior emulsion with the smooth touch of velvet. Recommended for interior surfaces only.",
    keyInformation: {
      finish: "Matt",
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
      "After surface preparation, apply 3-4 coats of Dulux Velvet Touch. Ensure 3-4 hours for drying between successive coats. Use of any other paint apart from the specially formulated Dulux Velvet Touch may deviate the desired finish of Dulux Velvet Touch and make it hard to recondition. STIR THOROUGHLY BEFORE USE. Contains no added lead or mercury.",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en_dulux_ambiance_velvet_touch_rich_matt_white.pdf",
      tds: "/pdf/dulux/tds_ambiance_rich_matt_pk.pdf",
      warranty: "/pdf/dulux/ambiance_vt_tc.pdf"
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default VelvetTouchRichMatt;