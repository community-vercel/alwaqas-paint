import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/exterior/1.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/ext/dulux-weathershield-powerflexx';

export const metadata = {
  title: "Dulux Weathershield Powerflexx",
  description: "Elastomeric exterior wall paint with Triple Defence Technology that stretches to cover 10X wider cracks, providing superior weather protection.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Weathershield Powerflexx",
    description: "Premium elastomeric paint with 12-year warranty featuring Powerflexx Technology for crack-bridging and advanced weather protection.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Weathershield Powerflexx Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Weathershield Powerflexx | Alwaqas Paint",
    description: "Advanced exterior paint with KeepCool and Powerflexx technologies for maximum weather resistance and crack protection.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Weathershield Powerflexx Product",
  }
};

const DuluxWeathershieldPowerflexx = () => {
  const product = {
    id: 1,
    title: "Dulux Weathershield Powerflexx",
    image: "/dulux/exterior/1.png",
    description: "Dulux Weathershield Powerflexx is a top quality elastomeric exterior wall paint with highly advanced Triple Defence Technology that stretches more to cover 10X* wider cracks, providing water repellence and protection against extreme weather conditions.",
    keyInformation: {
      finish: "Slight sheen",
      coverage: "13-15 m2/L",
      dryingTime: "2-3 hours",
      coats: "3"
    },
    features: [
      "12 Year Performance Warranty",
      "Powerflexx Technology",
      "KeepCool Technology",
      "UV Protect Technology",
      "Alkali Guard",
      "Dirt Guard – Stay Clean Technology",
      "Peel Guard",
      "Algae-Fungus Guard"
    ],
    applicationDescription: "Apply 3-4 coats of Dulux Weathershield Powerflexx with 2-3 hrs of interval in between coats. Thinning ratio must be followed as per application procedure.",
    downloads: {
      sds: "/pdf/dulux/exterior/xx_pk_en_dulux_weatheshield_powerflexx.pdf",
      tds: "/pdf/dulux/exterior/tds_weathershield_powerflexx_pk.pdf",
      warranty: "/pdf/dulux/exterior/dulux_weathershield_powerflexx_warranty_tc.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxWeathershieldPowerflexx;