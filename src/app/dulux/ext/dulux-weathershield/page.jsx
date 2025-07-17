import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/exterior/2.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/ext/dulux-weathershield';

export const metadata = {
  title: "Dulux Weathershield",
  description: "Premium exterior paint with Smart Release Technology for advanced protection against weather, algae and fungus, backed by a 6-year warranty.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Weathershield",
    description: "High-quality exterior paint with Keep Cool Technology that reduces surface temperature by 5°C and provides 2X protection against algae & fungus.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Weathershield Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Weathershield | Alwaqas Paint",
    description: "Exterior paint with 7-year warranty featuring Peel Guard, Alkali Guard, and UV Protect technologies for lasting protection.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Weathershield Product",
  }
};

const DuluxWeathershield = () => {
  const product = {
    id: 2,
    title: "Dulux Weathershield",
    image: "/dulux/exterior/2.png",
    description: "Dulux Weathershield 2G is a high quality, premium exterior paint that protects your home from damaging effects of all types of weather. It is powered with Smart Release Technology which gives advanced protection against algae and fungus that is caused by the sun and rain. Backed by a 6Y weather protection warranty, Dulux Weathershield also comes with Keep Cool Technology that reduces the surface temperature and keeps your homes cooler by 5 degrees.",
    keyInformation: {
      finish: "Matt",
      coverage: "13-15 m2/L",
      dryingTime: "2-3 Hours",
      coats: "3"
    },
    features: [
      "7 Year Performance Warranty",
      "Smart Release Technology- 2X Protection Against Algae & Fungus",
      "KeepCool Technology",
      "Peel Guard",
      "Alkali Guard",
      "Stay Clean Technology",
      "UV Protect Technology"
    ],
    applicationDescription: "Apply 3-4 coats of Dulux Weathershield with 2-3 hrs of interval in between coats. Thinning ratio must be followed as per application procedure.",
    downloads: {
      sds: "/pdf/dulux/exterior/xx_pk_en_dulux_weathershield_white_f9231951.pdf",
      tds: "/pdf/dulux/exterior/tds_weathershield_pk.pdf",
      warranty: "/pdf/dulux/exterior/weathershield_tc.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxWeathershield;