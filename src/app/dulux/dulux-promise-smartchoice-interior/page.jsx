
import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp / social sharing config
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/43.png",
  imageWidth: 1200,
  imageHeight: 630
};

const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-promise-smartchoice-interior';

export const metadata = {
  title: "Dulux Promise SmartChoice Interior | Extra Coverage Emulsion | Alwaqas Paint",
  description: "Acrylic-based emulsion with superior hiding power, smooth finish, and low VOC. Ideal for beautiful, long-lasting interior walls.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Promise SmartChoice Interior | Acrylic Emulsion Paint",
    description: "Superior interior emulsion with high coverage and smooth finish. Low odour, low VOC — perfect for home interiors.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Promise SmartChoice Interior Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Promise SmartChoice Interior | Alwaqas Paint",
    description: "Acrylic interior paint with smooth finish and superior coverage. Offers durable, long-lasting results for your walls.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Promise SmartChoice Interior Product",
  }
};

const DuluxPromiseInteriorPutty = () => {
  const product = {
    id: 43,
    title: "Dulux Promise SmartChoice Interior",
    image: "/dulux/43.png",
    description:
      "Dulux Promise Smart Choice Interior is an acrylic-based emulsion paint formulated with finest pigments that offer superior hiding and a smoother finish than normal paints. Its extra coverage formula helps cover a wider area with the same amount of paint, delivering a beautiful and long-lasting interior finish.",
    keyInformation: {
      finish: "Matt",
      coverage: "13–15 m²/L",
      dryingTime: "2–3 hours between coats",
      coats: "4",
    },
    features: [
      "High Coverage",
      "Smooth Finish",
      "Low Odour",
      "Low VOC",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "Apply 2 coats of Putty and leave for 2–3 hours between coats.",
    downloads: {
      sds: "/pdf/dulux/sds_smartchoice_interior.pdf",
      tds: "/pdf/dulux/smart_choice_tds_interior_1.pdf",
      warranty: "/pdf/dulux/sds_smartchoice_interior.pdf",
    },
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxPromiseInteriorPutty;
