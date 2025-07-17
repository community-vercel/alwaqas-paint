
import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp / social sharing config
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/9.png",
  imageWidth: 1200,
  imageHeight: 630
};

const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-promise-interior-primer';

export const metadata = {
  title: "Dulux Promise Interior Primer | Water-Based Anti-Peel Primer | Alwaqas Paint",
  description: "Water-based primer with anti-peel technology for superior adhesion and durability. Ideal for interior surfaces with low VOC and no added lead.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Promise Interior Primer | Interior Wall Primer",
    description: "High-quality primer with low odour and excellent adhesion. Certified by Singapore Green Label Council. Ideal for new and old masonry walls.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Promise Interior Primer Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Promise Interior Primer | Alwaqas Paint",
    description: "Water-based, eco-friendly primer with anti-peel formulation. Ensures long-lasting finish with superior adhesion and durability.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Promise Interior Primer Product",
  }
};

const AmbianceDiamondGlo = () => {
  const product = {
    id: 1,
    title: "Dulux Promise Interior Primer",
    image: "/dulux/9.png",
    description:
      "Dulux Promise Primer is a high quality, water based primer for internal surfaces. Its unique anti-peel formulation ensures superior adhesion for the paint film, thereby resisting peeling or flaking of the topcoat.",
    keyInformation: {
      finish: "Matt",
      coverage: "15-18 m²/L/coat",
      dryingTime: "2-3 Hours between coats",
      coats: "1",
    },
    features: [
      "Excellent Adhesion",
      "Low Odour",
      "Low VOC",
      "Certified by Singapore Green Label Council",
      "No Added Lead or Mercury"
    ],
    applicationDescription:
      "Apply one coat of Dulux Promise primer and allow to dry for 2-3 hours",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en__dulux_promise_primer_f9129595.pdf",
      tds: "/pdf/dulux/tds_promise_primer_pk.pdf",
      warranty: "/pdf/dulux/pentalite_classic_tc.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default AmbianceDiamondGlo;
