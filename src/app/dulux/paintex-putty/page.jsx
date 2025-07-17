import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/32.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/paintex-putty';

export const metadata = {
  title: "Paintex Putty",
  description: "High-quality water-based wall putty for interior masonry surfaces, offering easy application and a smooth matt finish.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Paintex Putty",
    description: "Ready-to-use wall putty for interior plaster surfaces, providing quick drying and excellent filling for a smooth topcoat finish.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Paintex Putty Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paintex Putty | Alwaqas Paint",
    description: "Water-based wall putty for interior surfaces, offering quick drying, easy application, and a smooth matt finish.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Paintex Putty Product",
  }
};

const PaintexPutty = () => {
  const product = {
    id: 30,
    title: "Paintex Putty",
    image: "/dulux/32.png",
    description: "ICI Paintex Wall Putty (water based) is a high quality ready to use filler for all types of interior masonry surfaces such as plaster. It is easy to apply and quick drying. Its good filling properties give a smooth finish for application of topcoat. ICI Paintex Wall Putty is not recommended for exterior use.",
    keyInformation: {
      finish: "Matt",
      coverage: "4-5 m2/kg",
      dryingTime: "2-3 Hours between coats",
      coats: "3"
    },
    features: [
      "Quick Drying",
      "Easy To Apply",
      "Smooth Matt Finish"
    ],
    applicationDescription: "Apply 2-3 coats of Paintex Putty and leave for 2-3 hours between coats",
    downloads: {
      sds: "",
      tds: "",
      warranty: ""
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default PaintexPutty;