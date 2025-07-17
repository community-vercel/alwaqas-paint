import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/42.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-interior-acrylic-putty';

export const metadata = {
  title: "Dulux Interior Acrylic Putty | Premium Wall Filler | Alwaqas Paint",
  description: "Ready-to-use water-based acrylic putty with excellent whiteness and coverage for smooth interior wall surfaces. Easy application and quick drying.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Interior Acrylic Putty | Wall Smoothening Filler",
    description: "High-quality water-based acrylic putty providing excellent coverage and smooth finish for interior walls. Quick drying formula.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Interior Acrylic Putty Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Interior Acrylic Putty | Alwaqas Paint",
    description: "Ready-to-use wall filler with superior whiteness and comfortable application properties.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Interior Acrylic Putty Product",
  }
};

const DuluxInteriorAcrylicPutty = () => {
  const product = {
    id: 42,
    title: "Dulux Interior Acrylic Putty",
    image: "/dulux/42.png",
    description: "Dulux Interior Acrylic Putty (water based) is a ready to use filler that has an excellent whiteness, coverage and application properties. Ideal for preparing interior walls before painting, it creates a smooth, even surface for optimal paint results.",
    keyInformation: {
      finish: "Matt",
      coverage: "4-6 m²/kg",
      dryingTime: "2-3 Hours between coats (dependent on temperature and humidity)",
      coats: "1-2"
    },
    features: [
      "High Coverage",
      "Excellent Whiteness",
      "Comfortable Application",
      "Ready-to-use Formula",
      "Creates Smooth Surface"
    ],
    applicationDescription: "1. Prepare surface by cleaning and removing loose particles\n2. Apply 1-2 coats of Dulux Interior Acrylic Putty using a putty knife\n3. Allow 2-3 hours drying time between coats\n4. Sand lightly between coats for optimal smoothness\n5. Ensure complete drying before paint application",
    downloads: {
      // sds: "/pdf/dulux/sds_interior_acrylic_putty.pdf",
      // tds: "/pdf/dulux/tds_interior_acrylic_putty.pdf",
      // warranty: "/pdf/dulux/warranty_interior_acrylic_putty.pdf"
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default DuluxInteriorAcrylicPutty;