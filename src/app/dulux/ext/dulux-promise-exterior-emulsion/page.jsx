
import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/exterior/3.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/ext/dulux-promise-exterior-emulsion';

export const metadata = {
  title: "Dulux Promise Exterior Emulsion",
  description: "Dulux Promise Exterior Acrylic Emulsion is a highly durable, water-based emulsion paint with Anti-Peel formulation and extra Coverage Formula.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Promise Exterior Emulsion",
    description: "Highly durable exterior paint with Chroma Brite UV Fight technology that keeps colors fresh longer and protects against fungal/algal growth.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Promise Exterior Emulsion Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Promise Exterior Emulsion | Alwaqas Paint",
    description: "Water-based exterior emulsion with Anti-Peel formulation and high coverage for lasting protection.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Promise Exterior Emulsion Product",
  }
};

const DuluxPromiseExteriorEmulsion = () => {
  const product = {
    id: 3,
    title: "Dulux Promise Exterior Emulsion",
    image: "/dulux/exterior/3.png",
    description: "Dulux Promise Exterior Acrylic Emulsion is a highly durable, water-based emulsion paint. Its unique Anti-Peel formulation ensure that the paint film remains intact, and its extra Coverage Formula covers a longer area in the same quantity of paint. Chroma Brite UV Fight keeps exterior wall colour looking fresh for longer. Easy to apply, this emulsion also protects against fungal and algal growth giving your home a beautiful look that lasts longer.",
    keyInformation: {
      finish: "Matt",
      coverage: "13-15 m2/l/coat",
      dryingTime: "2-3 Hours between coats",
      coats: "4"
    },
    features: [
      "3 Years Performance Warranty",
      "Chromabrite Technology - Miraculously Brighter Longer",
      "Algae and Fungus Resistant",
      "High Opacity",
      "High Coverage",
      "Durabond Latex - Water Resistance and No Peeling",
      "Smooth Finish"
    ],
    applicationDescription: "Apply 3-4 coats of Dulux Promise Exterior Emulsion with 2-3 hrs of interval in between coats. Thinning ratio must be followed as per application procedure.",
    downloads: {
      sds: "/pdf/dulux/exterior/tds_promise_exterior_pk.pdf",
      tds: "/pdf/dulux/exterior/tds_promise_exterior_pk.pdf",
      // warranty: "/pdf/dulux/exteriorpromise_exterior_tc.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxPromiseExteriorEmulsion;