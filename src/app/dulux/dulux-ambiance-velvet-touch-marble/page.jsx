
import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/17.avif",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-ambiance-velvet-touch-marble';

export const metadata = {
  title: "Dulux Ambiance Velvet Touch Marble",
  description: "Premium acrylic-based interior paint with a luxurious marble finish, offering trendy tintable shades for interior walls.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Ambiance Velvet Touch Marble",
    description: "Special effects interior paint inspired by fine marble stone, delivering a luxurious marble finish in selected Dulux colours.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Ambiance Velvet Touch Marble Product",
        type: "image/avif",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Ambiance Velvet Touch Marble | Alwaqas Paint",
    description: "Premium interior paint with a marble finish, offering trendy shades and a luxurious aesthetic for interior walls.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/avif",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Ambiance Velvet Touch Marble Product",
  }
};

const VelvetTouchMarble = () => {
  const product = {
    id: 8,
    title: "Dulux Ambiance Velvet Touch Marble",
    image: "/dulux/17.avif",
    description:
      "Dulux Velvet Touch Marble is acrylic based interior premium quality paint. It is a part of our special effects range. Inspired by the land of finest Marble Stone, creates the luxurious touch of marble finish on your walls. Marble is available in selected tintable Dulux colours and offers a range of trendy shades. It is recommended for interior use only.",
    keyInformation: {
      finish: "Featured Finishes",
      coverage: "2-3 m2/L per coat",
      dryingTime: "6-8 Hours",
      coats: "3",
    },
    features: [
      "Delivers a Flair of Luscious Marble Patterns",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "After surface preparation apply 3 coats of Dulux Velvet Touch Marble in required colour with Trowel. For the first coat, ensure complete deposition and completely hiding the surface. Ensure 6-8 hours of drying between each coat. For the second coat, apply a thin layer of product in a random manner. For the last coat, apply very thin layer of the product smoothening it at the same time on the surface with the blade of the trowel. Buff to attain satin or gloss finish. Sand the surface between the three coats. Please refer to the product brochure or visit our website for detailed application procedure instructions or the demo video for the best results. It is advisable to carry out small scale trials before application over large surface area. Ensure a slight overlap of sections while working to avoid demarcations of the finish.",
    downloads: {
      sds: "/pdf/dulux/msds_dvt_marble.pdf",
      tds: "/pdf/dulux/tds_vt_marble.pdf",
      // warranty: "/pdf/dulux/warranty_velvet_touch_marble.pdf",
    },
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default VelvetTouchMarble;