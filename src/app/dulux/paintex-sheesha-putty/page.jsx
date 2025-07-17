import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/40.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/paintex-sheesha-putty';

export const metadata = {
  title: "Paintex Sheesha Putty",
  description: "Superior quality water-based wall putty for interior masonry surfaces, offering brilliant white color and a smooth matt finish.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Paintex Sheesha Putty",
    description: "Ready-to-use wall putty for interior plaster surfaces, providing quick drying, excellent filling, and a smooth matt finish.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Paintex Sheesha Putty Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paintex Sheesha Putty | Alwaqas Paint",
    description: "Water-based wall putty for interior surfaces, offering superior quality, quick drying, and a smooth matt finish.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Paintex Sheesha Putty Product",
  }
};

const PaintexSheeshaPutty = () => {
  const product = {
    id: 40,
    title: "Paintex Sheesha Putty",
    image: "/dulux/40.png",
    description: "ICI Paintex Sheesha Finish is a superior quality (water based) ready to use filler for all types of interior masonry surfaces such as plaster. It is brilliant white in colour, easy to apply, quick drying with excellent filling properties to give a smooth finish for application of topcoat. ICI Paintex Sheesha Finish is not recommended for exterior use.",
    keyInformation: {
      finish: "Matt",
      coverage: "4-5 m2/kg",
      dryingTime: "2-3 Hours between coats",
      coats: "3"
    },
    features: [
      "Superior Quality",
      "Quick Drying"
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

export default PaintexSheeshaPutty;