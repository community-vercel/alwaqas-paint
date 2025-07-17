
import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/16.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-ambiance-velvet-touch-velvet-gold';

export const metadata = {
  title: "Dulux Ambiance Velvet Touch Silk Gold",
  description: "Premium acrylic-based interior paint with a luxurious fabric finish, inspired by Persian fabrics, in tintable Dulux colours.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Ambiance Velvet Touch Silk Gold",
    description: "Special effects interior paint with a luxurious fabric finish in silk gold, ideal for creating timeless and trendy wall aesthetics.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Ambiance Velvet Touch Silk Gold Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Ambiance Velvet Touch Silk Gold | Alwaqas Paint",
    description: "Premium interior paint with a silk gold fabric finish, offering a luxurious and stylish aesthetic for interior walls.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Ambiance Velvet Touch Silk Gold Product",
  }
};

const VelvetTouchSilkGold = () => {
  const product = {
    id: 7,
    title: "Dulux Ambiance Velvet Touch Silk Gold",
    image: "/dulux/16.png",
    description:
      "Dulux Velvet Touch Silk Gold is an acrylic based interior premium quality paint which is a part of our special effects range. It is inspired by the smoothest fabrics of Persia & delivers a luxurious fabric finish to your walls for a timeless touch. Velvet Touch Gold is available in selected tintable Dulux colours and offers a range of trendy shades. It is recommended for interior use only.",
    keyInformation: {
      finish: "Featured Finishes",
      coverage: "5-6 m2/L per coat",
      dryingTime: "4-6 Hours",
      coats: "2",
    },
    features: [
      "Delivers a Touch of Luxurious Fabrics",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "After surface preparation apply 2-3 coats of Dulux Velvet Touch base coat in the recommended colour. Ensure 3-4 hours for drying between successive coats. Then apply the first coat of Velvet Touch Silk Gold in required colour with roller and then use trowel to smoothen out the paint. Ensure four to six hours for drying between each coat. For the second coat, apply a thin layer of paint in waves by trowel. Please refer to the product brochure or visit our website for the detail application procedure instructions or the demo video for the best results. It is advisable to carry out small scale trials before application over large surface area. Ensure a slight overlap of sections while working to avoid demarcations of the finish.",
    downloads: {
      sds: "/pdf/dulux/msds_dvt_silk.pdf",
      tds: "/pdf/dulux/tds_vt_silk.pdf",
      // warranty: "/pdf/dulux/warranty_velvet_touch_silk_gold.pdf",
    },
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default VelvetTouchSilkGold;