import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/4.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-easycare';

export const metadata = {
  title: "Dulux EasyCare | Anti-Viral Interior Paint | Alwaqas Paint",
  description: "Premium acrylic paint with Silver Ion Technology offering anti-viral, anti-bacterial properties and superior stain resistance for interior walls.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux EasyCare with Anti-Viral Protection",
    description: "Interior wall paint featuring Kidproof+ Technology for stain resistance and Silver Ion Technology for anti-viral/anti-bacterial protection. 5-year warranty.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux EasyCare Anti-Viral Interior Paint",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux EasyCare | Anti-Viral Interior Paint | Alwaqas Paint",
    description: "Washable interior paint with peel guard technology and low VOC formulation for healthier indoor environments.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux EasyCare Anti-Viral Interior Paint",
  }
};

const AmbianceDiamondGlo = () => {
  const product = {
    id: 1,
    title: "Dulux EasyCare",
    image: "/dulux/4.png",
    description:
      "Dulux EasyCare is an acrylic water based paint for all interior walls. Kidproof+ Technology provides tough stain resistance making walls easy to clean without damaging the paint layer. With Anti-bacterial properties Dulux EasyCare also inhibits the growth of bacteria on your interior walls. Now with the new Silver Ion Technology, it comes with an added benefit of anti-viral property that helps to effectively works against cetain virus. (^) Dulux EasyCare provides protection for your walls not only from stains but also certain bacteria & virus. (^^) (^) Under test condition (^^) Virus and bacteria can also spread through other external / internal surfaces.",
    keyInformation: {
      finish: "Matt",
      coverage: "13-15m²/litre/coat",
      dryingTime: "2-3 Hours",
      coats: "3",
    },
    features: [
      "5 Year Performance Warranty",
      "Stain Resistant",
      "Anti-Mould & Anti-Fungus",
      "Anti-Viral",
      "Easy To Clean & Washable",
      "Anti-Bacterial",
      "Peel Guard",
      "High Durability",
      "Low Odour",
      "Low VOC",
      "No Added Lead or Mercury"
    ],
    applicationDescription:
      "Apply 3-4 coats of Dulux EasyCare and leave for 2-3 hours between coats.",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en_dulux_easycare_antiviral.pdf",
      tds: "/pdf/dulux/tds_easycare_pk.pdf",
      warranty: "/pdf/dulux/ambiance_vt_tc.pdf"
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default AmbianceDiamondGlo;