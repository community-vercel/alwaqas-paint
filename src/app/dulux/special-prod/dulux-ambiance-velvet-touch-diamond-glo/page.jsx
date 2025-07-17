import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/water-pro/1.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/special-prod/dulux-ambiance-velvet-touch-diamond-glo';

export const metadata = {
  title: "Dulux Ambiance Velvet Touch Diamond Glo",
  description: "Dulux Ambiance Velvet Touch Diamond Glo, offering protection against fungal and algal growth.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Ambiance Velvet Touch Diamond Glo",
    description: "Dulux Ambiance Velvet Touch Diamond Glo, offering protection against fungal and algal growth..",
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
    title: "Dulux Aqu torpedAquashield Pre Treatment Coat | Alwaqas Paint",
    description: "High-performance pre-treatment coat with FungiClean Technology for effective surface preparation and fungal protection.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Ambiance Velvet Touch Diamond Glo",
  }
};

const DuluxAquashieldPreTreatment = () => {
  const product = {
    id: 1,
    title: "Dulux Ambiance Velvet Touch Diamond Glo",
    image: "/water-pro/1.png",
    description: "Dulux Ambiance Velvet Touch Diamond Glo is a high performance surface preparation product with FungiClean Technology that provides protection against fungal attacks. Its unique Anti Microbial pack helps to destroy fungal and algal infection from the root to prevent growth on the surface.",
    keyInformation: {
      finish: "Matt",
      coverage: "110-112 m²/L",
      dryingTime: "4-6 hours",
      coats: "1"
    },
    features: [
      "FungiClean Technology",
      "Anti Microbial Pack",
      "Surface Prep Wash",
      "6 Year Performance Warranty",
      "Luxurious Finish",
      "Anti-Mould & Anti-Fungus",
      "Peel Guard"
    ],
    applicationDescription: `After surface preparation apply 3-4 coats of Dulux Ambiance Velvet Touch Diamond Glo. Ensure 3-4 hours for drying between successive coats. Use of any other paint apart from specially formulated Dulux Ambiance Velvet Touch may deviate the desire finish and make it hard to recondition. STIR THOROUGHLY BEFORE USE. Contains no added lead or mercury.`,
    downloads: {
      sds: "/pdf/xx_pk_en_dulux_ambiance_velvet_touch_diamond_glo.pdf",
      tds: "/pdf/tds_ambiance_diamond_glo_pk.pdf",
      // datasheet: "/pdf/pre_treatment_coat.pdf"
    },
  };
  

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default DuluxAquashieldPreTreatment;