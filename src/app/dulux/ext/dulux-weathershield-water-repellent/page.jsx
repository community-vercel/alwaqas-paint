import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/exterior/6.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/ext/dulux-weathershield-water-repellent';

export const metadata = {
  title: "Dulux Weathershield Water Repellent",
  description: "Protective barrier against moisture for unpainted surfaces with durable protection and comfortable application.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Weathershield Water Repellent",
    description: "Excellent moisture protection solution that allows surfaces to breathe while preventing water damage.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Weathershield Water Repellent Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Weathershield Water Repellent | Alwaqas Paint",
    description: "Moisture barrier for unpainted surfaces with quick drying time and durable protection.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Weathershield Water Repellent Product",
  }
};

const DuluxWeathershieldWaterRepellent = () => {
  const product = {
    id: 6,
    title: "Dulux Weathershield Water Repellent",
    image: "/dulux/exterior/6.png",
    description: "Dulux Water Repellent is an excellent protective barrier against moisture for unpainted surfaces. Provides durable protection while allowing comfortable application.",
    keyInformation: {
      finish: "Matt",
      coverage: "4-6 m2/L",
      dryingTime: "30 minutes (Recoat after 16 hours)\nNote: Rain within 24hrs reduces efficiency - allow surface to dry and apply extra coat",
      coats: "2"
    },
    features: [
      "Excellent moisture protection",
      "Comfortable Application",
      "Protects unpainted surfaces"
    ],
    applicationDescription: "Apply 2 coats of Dulux Water Repellent and leave for 16 hours between coats. For optimal results, avoid rain within 24 hours of application.",
    downloads: {
      sds: "/pdf/dulux/exterior/xx_pk_en_dulux_water_repellentf28522964383109.pdf",
      tds: "/pdf/dulux/exterior/tds_dulux_ws_water_repellent_pk.pdf",
      warranty: "/pdf/dulux/exterior/tds_dulux_ws_water_repellent_pk.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxWeathershieldWaterRepellent;