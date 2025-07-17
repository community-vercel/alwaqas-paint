import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/exterior/8.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/ext/dulux-exterior-acrylic-putty';

export const metadata = {
  title: "Dulux Exterior Acrylic Putty",
  description: "High-quality exterior acrylic putty for masonry and brickwork, offering quick drying and a smooth finish.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Exterior Acrylic Putty",
    description: "Quick-drying acrylic putty for exterior masonry surfaces, providing high durability and a smooth finish for enhanced topcoat adhesion.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Exterior Acrylic Putty Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Exterior Acrylic Putty | Alwaqas Paint",
    description: "Exterior acrylic putty for masonry and brickwork, ensuring a smooth, durable finish with quick drying and easy application.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Exterior Acrylic Putty Product",
  }
};

const DuluxExteriorAcrylicPutty = () => {
  const product = {
    id: 8,
    title: "Dulux Exterior Acrylic Putty",
    image: "/dulux/exterior/8.png",
    description: "Dulux Exterior Acrylic Putty is a high quality exterior acrylic putty for masonry surfaces and brickwork. This putty is quick drying and easy to apply which leaves the walls with a smooth finish.",
    keyInformation: {
      finish: "Matt",
      coverage: "3-4 m2/Kg",
      dryingTime: "2-3 Hours (Depending on temperature and humidity)",
      coats: "2"
    },
    features: [
      "Reinforces Adhesion and Durability of the End Coat",
      "High Durability"
    ],
    applicationDescription: "Apply 1 coat of Dulux Exterior Acrylic Putty and leave for 2-3 hours.",
    downloads: {
      sds: "/pdf/dulux/exterior/xx_pk_en_dulux_acrylic_putty.pdf",
      tds: "/pdf/dulux/exterior/tds_dulux_interior_acrylic_putty_pk.pdf",
      warranty: "/pdf/dulux/exterior/xx_pk_en_dulux_acrylic_putty.pdf"
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default DuluxExteriorAcrylicPutty;