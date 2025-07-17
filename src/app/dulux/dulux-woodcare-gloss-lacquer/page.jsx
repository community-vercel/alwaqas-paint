
import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp / social sharing config
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/28.jpg",
  imageWidth: 1200,
  imageHeight: 630
};

const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-woodcare-gloss-lacquer';

export const metadata = {
  title: "Dulux Woodcare Gloss Lacquer | Protective Wood Finish | Alwaqas Paint",
  description: "Topcoat lacquer for sealed wood surfaces. Gloss finish with durable protection and smooth appearance.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Woodcare Gloss Lacquer | Smooth Gloss Finish for Wood",
    description: "Protective lacquer for wood surfaces with a glossy, smooth finish. Ideal for sealed wood and indoor furniture.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Woodcare Gloss Lacquer Product",
        type: "image/avif",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Woodcare Gloss Lacquer | Alwaqas Paint",
    description: "Glossy lacquer for sealed wood with durable finish. Fast drying and no added lead or mercury.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/avif",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Woodcare Gloss Lacquer Product",
  }
};

const WoodcareGlossLacquer = () => {
  const product = {
    id: 21,
    title: "Dulux Woodcare Gloss Lacquer",
    image: "/dulux/28.jpg",
    description:
      "Dulux Woodcare Gloss Lacquer is used as a topcoat on sealed wood surfaces to provide long-lasting protection and a smooth, glossy finish.",
    keyInformation: {
      finish: "Gloss",
      coverage: "10–11 m²/L",
      dryingTime: "3–4 hours between coats",
      coats: "3",
    },
    features: [
      "Provides Protection and Smooth Finish",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "Apply 2–3 coats of Dulux Woodcare Gloss Lacquer and leave for 3–4 hours between coats.",
    downloads: {
      sds: "/pdf/dulux/pk_khatoa01_n2300013_0383105a2_english_gb_20221205_dulux_wc_gloss_lacquer.pdf",
      tds: "/pdf/dulux/pk_khatoa01_n2300013_0383105a2_english_gb_20221205_dulux_wc_gloss_lacquer.pdf",
      warranty: "/pdf/dulux/pk_khatoa01_n2300013_0383105a2_english_gb_20221205_dulux_wc_gloss_lacquer.pdf",
    },
  };

  return <BaseDetailPage product={product} />;
};

export default WoodcareGlossLacquer;
