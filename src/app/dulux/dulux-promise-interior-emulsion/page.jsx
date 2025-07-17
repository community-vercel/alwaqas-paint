
import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// Social sharing configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/11.png",
  imageWidth: 1200,
  imageHeight: 630
};

const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-promise-interior-emulsion';

export const metadata = {
  title: "Dulux Promise Interior Emulsion | ChromaBrite Washable Paint | Alwaqas Paint",
  description: "Washable, antibacterial emulsion with ChromaBrite technology. Long-lasting matt finish with anti-mould protection for clean, bright interiors.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Promise Interior Emulsion | Interior Wall Paint",
    description: "Brighter, safer, and cleaner walls with ChromaBrite technology. Anti-bacterial and washable formula for long-lasting beauty.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Promise Interior Emulsion Paint Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Promise Interior Emulsion | Alwaqas Paint",
    description: "Premium interior emulsion with ChromaBrite technology, anti-bacterial properties, and easy-clean formula. Bright, durable matt finish.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Promise Interior Emulsion Paint Product",
  }
};

const PromiseInteriorEmulsion = () => {
  const product = {
    id: 2,
    title: "Dulux Promise Interior Emulsion",
    image: "/dulux/11.png",
    description:
      "Dulux Promise Interior has ChromaBrite Technology that keeps your home looking fresh and new for longer. The Washable and Easy Wipe formulation makes wiping away common household stains easier. Dulux Promise Interior also has Antibacterial and Anti-Fungus properties inhibiting the growth of bacterial and developing mould and fungus on the wall. Apply Dulux Promise Interior for miraculously brighter, safer and cleaner walls that last longer",
    keyInformation: {
      finish: "Matt",
      coverage: "13-15 m²/L/coat",
      dryingTime: "2-3 Hours between coats",
      coats: "4",
    },
    features: [
      "3 Years Performance Warranty",
      "Anti-Bacterial",
      "Chromabrite Technology",
      "Easy Wipe & Washable",
      "Anti-Mould & Anti-Fungus",
      "High Opacity & Coverage",
    ],
    applicationDescription:
      "Apply 3-4 coats of Dulux Promise Interior Emulsion with 2-3 hours interval between coats",
    downloads: {
      sds: "/pdf/dulux/ds_pk_en_dulux_promise_interior_emulsion.pdf",
      // tds: "/pdf/dulux/dulux-promise-interior-emulsion.pdf",
      warranty: "/pdf/dulux/promise_interior_tc.pdf",
    },
  };

  return <BaseDetailPage product={product} />;
};

export default PromiseInteriorEmulsion;
