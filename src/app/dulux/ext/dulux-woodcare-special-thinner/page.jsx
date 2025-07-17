import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/exterior/18.jpg",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/ext/dulux-woodcare-special-thinner';

export const metadata = {
  title: "Dulux Woodcare Special Thinner",
  description: "High-quality thinner specially formulated to maximize solubility of all Woodcare products.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Woodcare Special Thinner",
    description: "Specialized thinner that enhances the performance of Woodcare products with optimal solubility.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Woodcare Special Thinner Product",
        type: "image/jpg",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Woodcare Special Thinner | Alwaqas Paint",
    description: "Specialized thinner for Woodcare products with no added lead or mercury.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/jpg",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Woodcare Special Thinner Product",
  }
};

const PaintexStarSyntheticEnamel = () => {
  const product = {
    id: 10,
    title: "Dulux Woodcare Special Thinner",
    image: "/dulux/exterior/18.jpg",
    description: "Dulux Woodcare Special Thinner has the quality and strength to make all Woodcare products to be soluble to their maximum.",
    keyInformation: {
      finish: "Gloss",
      coverage: "11-13 m2/L",
      dryingTime: "16 Hours between coats",
      coats: "4"
    },
    features: [
      "No Added Lead or Mercury",
    ],
    applicationDescription: "Dulux Woodcare Special Thinner has the quality and strength to make all Woodcare products to be soluble to their maximum.",
    downloads: {
      sds: '/pdf/dulux/exterior/pk_khatoa01_t2190041_0383326a2_english_gb_20221205_dulux_wc_thinner.pdf',
      tds: '/pdf/dulux/exterior/tds_woodcare_special_thinner_pk.pdf',
      warranty: null
    }
  };

  return <BaseDetailPage product={product} />;
};

export default PaintexStarSyntheticEnamel;