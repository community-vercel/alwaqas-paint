
import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp / social sharing config
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/29.png",
  imageWidth: 1200,
  imageHeight: 630
};

const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-promise-interior-putty';

export const metadata = {
  title: "Dulux Promise Interior Putty | High Coverage Wall Filler | Alwaqas Paint",
  description: "Water-based interior wall putty with excellent whiteness, smoothness, and coverage. Ideal for a perfect topcoat finish on masonry surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Promise Interior Putty | Interior Wall Filler",
    description: "High-quality interior wall putty with excellent application and smooth finish. Not suitable for exterior use.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Promise Interior Putty Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Promise Interior Putty | Alwaqas Paint",
    description: "Interior putty offering great coverage and smooth application. Best for all types of masonry surfaces. Water-based and ready to use.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Promise Interior Putty Product",
  }
};

const DuluxPromiseInteriorPutty = () => {
  const product = {
    id: 20,
    title: "Dulux Promise Interior Putty",
    image: "/dulux/29.png",
    description:
      "Dulux Promise Putty (water-based) is a ready-to-use filler offering excellent whiteness, coverage, and application properties. Its high-quality filling capability makes it ideal for all types of interior masonry surfaces, providing a smooth base for topcoat application. Not recommended for exterior use.",
    keyInformation: {
      finish: "Matt",
      coverage: "4–6 m²/kg/coat",
      dryingTime: "2–3 hours between coats",
      coats: "2",
    },
    features: [
      "High Coverage",
      "Comfortable Application",
    ],
    applicationDescription:
      "Apply two coats of putty, allowing 2–3 hours drying time between coats.",
    downloads: {
      sds: "/pdf/dulux/sds_promise_putty.pdf",
      tds: "/pdf/dulux/tds_promise_putty.pdf",
      warranty: "/pdf/dulux/warranty_promise_putty.pdf",
    },
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxPromiseInteriorPutty;
