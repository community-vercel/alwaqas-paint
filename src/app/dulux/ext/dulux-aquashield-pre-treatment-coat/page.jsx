import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/exterior/11.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/ext/dulux-aquashield-pre-treatment-coat';

export const metadata = {
  title: "Dulux Aquashield Pre Treatment Coat",
  description: "High-performance surface preparation product with FungiClean Technology, offering protection against fungal and algal growth.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Aquashield Pre Treatment Coat",
    description: "Surface preparation coat with FungiClean Technology and Anti Microbial pack, designed to prevent fungal and algal infections on surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Aquashield Pre Treatment Coat Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Aquashield Pre Treatment Coat | Alwaqas Paint",
    description: "High-performance pre-treatment coat with FungiClean Technology for effective surface preparation and fungal protection.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Aquashield Pre Treatment Coat Product",
  }
};

const DuluxAquashieldPreTreatmentCoat = () => {
  const product = {
    id: 11,
    title: "Dulux Aquashield Pre Treatment Coat",
    image: "/dulux/exterior/11.png",
    description: "Dulux Aquashield Pre Treatment Coat is a high performance surface preparation product with FungiClean Technology that provides protection against fungal attacks. Its unique Anti Microbial pack helps to destroy the fungal and algal infection from the root to prevent fungal and algal growth developing on the surface.",
    keyInformation: {
      finish: "Matt",
      coverage: "110-112 m²/L",
      dryingTime: "4-6 hours",
      coats: "1"
    },
    features: [
      "FungiClean Technology",
      "Anti Microbial Pack",
      "Surface Prep Wash"
    ],
    applicationDescription: "Apply 1 coat of Dulux Aquashield Pre Treatment Coat and leave for 4-6 hours.",
    downloads: {
      sds: "/pdf/dulux/exterior/pre_treatment_coat.pdf",
      tds: "/pdf/dulux/exterior/tds_dulux_aquashield_pretreatment_coast_pk.pdf",
      warranty: "/pdf/dulux/exterior/pre_treatment_coat.pdf"
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default DuluxAquashieldPreTreatmentCoat;