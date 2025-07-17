
import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/primer/1.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/prim/dulux-promise-interior-primer';

export const metadata = {
  title: "Dulux Promise Interior Primer | Anti-Peel Primer | Alwaqas Paint",
  description: "Water-based interior primer with anti-peel formulation for superior paint adhesion. Low VOC, Singapore Green Label certified for healthier interiors.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Promise Interior Primer",
    description: "High-quality water-based primer that prevents peeling and flaking of topcoats on interior surfaces with excellent adhesion properties.",
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
    description: "Interior primer with low VOC formulation certified by Singapore Green Label Council for environmentally friendly painting.",
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

const DuluxPromiseInteriorPrimer = () => {
  const product = {
    id: 16,
    title: "Dulux Promise Interior Primer",
    image: "/dulux/primer/1.png",
    description: "Dulux Promise Primer is a high quality, water based primer for internal surfaces. Its unique anti-peel formulation ensures superior adhesion for the paint film, thereby resisting peeling or flaking of the topcoat. Certified by Singapore Green Label Council for its environmentally friendly formulation.",
    keyInformation: {
      finish: "Matt",
      coverage: "15-18 m²/L/coat",
      dryingTime: "2-3 Hours between coats",
      coats: "1"
    },
    features: [
      "Anti-Peel Formulation",
      "Excellent Adhesion Properties",
      "Low Odor Formula",
      "Low VOC Content",
      "No Added Lead or Mercury",
      "Singapore Green Label Certified",
      "Water-Based Formula"
    ],
    applicationDescription: "1. Clean and prepare interior surfaces thoroughly\n2. Apply one even coat of Dulux Promise Primer\n3. Allow 2-3 hours drying time before topcoat application\n4. For best results, maintain room temperature between 15°C and 30°C",
    downloads: {
      sds: "/pdf/dulux/primer/xx_pk_en__dulux_promise_primer_f9129595.pdf",
      tds: "/pdf/dulux/primer/tds_promise_primer_pk.pdf",
      warranty: null
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default DuluxPromiseInteriorPrimer;