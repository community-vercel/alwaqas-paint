import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/36.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/paintex-ultratex-vinyl-emulsion';

export const metadata = {
  title: "Paintex Ultratex Vinyl Emulsion",
  description: "Economical water-based paint with excellent coverage and a smooth matt finish, suitable for interior masonry surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Paintex Ultratex Vinyl Emulsion",
    description: "Water-based vinyl emulsion with excellent coverage and a smooth matt finish, ideal for brickwork, plaster, and cement surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Paintex Ultratex Vinyl Emulsion Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paintex Ultratex Vinyl Emulsion | Alwaqas Paint",
    description: "Economical water-based paint for interior masonry surfaces, offering excellent coverage and a smooth matt finish.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Paintex Ultratex Vinyl Emulsion Product",
  }
};

const PaintexUlratexVinylEmulsion = () => {
  const product = {
    id: 36,
    title: "Paintex Ultratex Vinyl Emulsion",
    image: "/dulux/36.png",
    description: "ICI Paintex Ultratex is an economical water based paint that has an excellent coverage. ICI Paintex Ultratex provides a smooth matt finish. It is suitable for all normal interior masonry surfaces including brickwork, plaster, cement etc.",
    keyInformation: {
      finish: "Matt",
      coverage: "10-12 m2/kg",
      dryingTime: "2-3 Hours between coats",
      coats: "4"
    },
    features: [
      "Excellent Coverage",
      "Smooth Matt Finish",
      "No Added Lead or Mercury"
    ],
    applicationDescription: "Apply 3-4 coats of Paintex Ultratex Vinyl Emulsion and leave for 2-3 hours between coats",
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

export default PaintexUlratexVinylEmulsion;