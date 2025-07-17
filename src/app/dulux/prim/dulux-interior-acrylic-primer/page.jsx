
import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/primer/2.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/prim/dulux-interior-acrylic-primer';

export const metadata = {
  title: "Dulux Interior Acrylic Primer | Premium Wall Primer | Alwaqas Paint",
  description: "High-quality acrylic primer for interior masonry surfaces with excellent alkali resistance and superior adhesion properties for uniform topcoat application.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Interior Acrylic Primer",
    description: "Premium acrylic-based primer for interior masonry that binds powdery residue and enhances topcoat adhesion. Quick-drying formula with alkali resistance.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Interior Acrylic Primer Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Interior Acrylic Primer | Alwaqas Paint",
    description: "Professional-grade primer for interior surfaces that reinforces adhesion and durability of finish coats.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Interior Acrylic Primer Product",
  }
};

const DuluxInteriorAcrylicPrimer = () => {
  const product = {
    id: 2,
    title: "Dulux Interior Acrylic Primer",
    image: "/dulux/primer/2.png",
    description: "Dulux Interior Acrylic Primer is premium quality, acrylic based primer suitable for all types of interior masonry surfaces such as brickwork, plaster, & cement rendering. The primer provides excellent alkali resistance, improves adhesion of topcoats, and binds powdery residue, resulting in uniform surface for putty and topcoat application.",
    keyInformation: {
      finish: "Matt",
      coverage: "16-18 m²/L",
      dryingTime: "2-3 Hours (Dependent on temperature and humidity)",
      coats: "1"
    },
    features: [
      "Superior Adhesion",
      "Enhances Topcoat Opacity",
      "Alkali Resistant",
      "Reinforces Adhesion and Durability of the End Coat",
      "Quick Drying"
    ],
    applicationDescription: "1. Prepare surface by cleaning and removing loose particles\n2. Apply one coat of Dulux Interior Acrylic Primer\n3. Allow 2-3 hours drying time before topcoat application\n4. Ensure proper ventilation during application",
    downloads: {
      sds: null,
      tds: "/pdf/dulux/primer/tds_dulux_interior_acrylic_primer_pk.pdf",
      warranty: null
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default DuluxInteriorAcrylicPrimer;