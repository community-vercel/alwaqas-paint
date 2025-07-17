import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/39.jpg",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-woodcare-special-thinner';

export const metadata = {
  title: "Dulux Woodcare Special Thinner",
  description: "High-quality thinner designed to maximize solubility of Dulux Woodcare products for optimal performance.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Woodcare Special Thinner",
    description: "Special thinner for Dulux Woodcare products, ensuring maximum solubility and performance, with no added lead or mercury.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Woodcare Special Thinner Product",
        type: "image/jpeg",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Woodcare Special Thinner | Alwaqas Paint",
    description: "High-quality thinner for Dulux Woodcare products, offering excellent solubility and performance for woodcare applications.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/jpeg",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Woodcare Special Thinner Product",
  }
};

const DuluxWoodcareSpecialThinner = () => {
  const product = {
    id: 39,
    title: "Dulux Woodcare Special Thinner",
    image: "/dulux/39.jpg",
    description: "Dulux Woodcare Special Thinner has the quality and strength to make all Woodcare products to be soluble to their maximum.",
    keyInformation: {
      finish: "Matt"
    },
    features: [
      "No Added Lead or Mercury"
    ],
    downloads: {
      sds: "/pdf/dulux/pk_khatoa01_t2190041_0383326a2_english_gb_20221205_dulux_wc_thinner.pdf",
      tds: "/pdf/dulux/tds_woodcare_special_thinner_pk.pdf",
      warranty: "/pdf/dulux/pk_khatoa01_t2190041_0383326a2_english_gb_20221205_dulux_wc_thinner.pdf"
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default DuluxWoodcareSpecialThinner;