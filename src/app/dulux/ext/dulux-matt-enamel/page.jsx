
import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/exterior/4.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/ext/dulux-matt-enamel';

export const metadata = {
  title: "Dulux Matt Enamel",
  description: "Dulux Matt enamel is a high quality solvent-based super matt finish, suitable for use on all type of interior wood, metal and masonry surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Matt Enamel",
    description: "Dulux Matt Enamel has excellent resistance to steam and moisture, which makes it ideal for use in kitchens and bathrooms.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Matt Enamel Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Matt Enamel | Alwaqas Paint",
    description: "High quality solvent-based super matt finish for wood, metal and masonry surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Matt Enamel Product",
  }
};

const DuluxMattEnamel = () => {
  const product = {
    id: 4,
    title: "Dulux Matt Enamel",
    image: "/dulux/exterior/4.png",
    description: "Dulux Matt enamel is a high quality solvent-based super matt finish, suitable for use on all type of interior wood, metal and masonry surfaces. Dulux Matt Enamel has excellent resistance to steam and moisture, which makes it ideal for use in kitchens and bathrooms.",
    keyInformation: {
      finish: "High Matt",
      coverage: "13-15 m2/L",
      dryingTime: "16 Hours between coats",
      coats: "3"
    },
    features: [
      "3 Years Performance Warranty",
      "Excellent Resistance To Steam and Moisture",
      "Ideal For Use in Kitchens and Bathrooms",
      "No Added Lead or Mercury"
    ],
    applicationDescription: "Apply 2-3 coats of Dulux Matt Enamel with 16 hours interval between coats",
    downloads: {
      sds: "/pdf/dulux/exterior/xx_pk_en_dulux_matt_finish_enamel__f335.pdf",
      tds: "/pdf/dulux/exterior/tds_matt_enamel_pk.pdf",
      warranty: "/pdf/dulux/exterior/matt_enamel_tc.pdf"
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default DuluxMattEnamel;