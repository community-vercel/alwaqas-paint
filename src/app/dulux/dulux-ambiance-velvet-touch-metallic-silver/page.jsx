
import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/18.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-ambiance-velvet-touch-metallic-silver';

export const metadata = {
  title: "Dulux Ambiance Velvet Touch Metallic Silver",
  description: "Premium acrylic-based interior paint with a unique metallic finish, tintable in selected Dulux colours for striking wall impacts.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Ambiance Velvet Touch Metallic Silver",
    description: "Special effects interior paint with a pure metallic finish in silver, ideal for creating impactful and luxurious interior walls.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Ambiance Velvet Touch Metallic Silver Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Ambiance Velvet Touch Metallic Silver | Alwaqas Paint",
    description: "Premium interior paint with a metallic silver finish, offering a unique and stylish aesthetic for interior walls.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Ambiance Velvet Touch Metallic Silver Product",
  }
};

const VelvetTouchMetallicSilver = () => {
  const product = {
    id: 9,
    title: "Dulux Ambiance Velvet Touch Metallic Silver",
    image: "/dulux/18.png",
    description:
      "Dulux Velvet Touch Metallic Silver is an acrylic based interior premium quality paint. It is a part of our special effects range, designed to deliver wide variety of wall impacts with a unique metallic finish. Velvet Touch Metallic Silver can be tinted in selected Dulux colours. It is recommended for interior use only.",
    keyInformation: {
      finish: "Featured Finishes",
      coverage: "8-9 m2/L per coat",
      dryingTime: "4-5 Hours",
      coats: "2",
    },
    features: [
      "Pure Metallic Finish",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "After surface preparation apply 2-3 coats of Dulux Velvet Touch base coat in the recommended colour. Ensure 3-4 hours for drying between successive coats. Then apply two coats of Velvet Touch Metallic Silver in required colour with roller or brush. Ensure four to five hours for drying between each coat. Please refer to the product brochure or visit our website for the detail application procedure instructions or the demo video for the best results. It is advisable to carry out small scale trials before application over large surface area. Ensure a slight overlap of sections while working to avoid demarcations of the finish.",
    downloads: {
      sds: "/pdf/dulux/msds_dvt_metallics.pdf",
      tds: "/pdf/dulux/tds_vt_metallic.pdf",
      // warranty: "/pdf/dulux/warranty_velvet_touch_metallic_silver.pdf",
    },
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default VelvetTouchMetallicSilver;