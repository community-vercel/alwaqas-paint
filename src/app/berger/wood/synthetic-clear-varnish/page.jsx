import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/35.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/wood/synthetic-clear-varnish';

export const metadata = {
  title: "Berger SYNTHETIC CLEAR VARNISH",
  description: "Top-quality Alkyd varnish with maximum spread, excellent for making putty and wood protection.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger SYNTHETIC CLEAR VARNISH",
    description: "Wood pro Synthetic Clear Varnish for professional wood finishing with 3 to 6 hours drying time.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger SYNTHETIC CLEAR VARNISH Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger SYNTHETIC CLEAR VARNISH | Alwaqas Paint",
    description: "Professional Alkyd varnish for wood surfaces with 13 to 16 meter square coverage per litre.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger SYNTHETIC CLEAR VARNISH Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "SYNTHETIC CLEAR VARNISH",
    image: "/berger/products/35.webp", 
    description: "Wood pro Synthetic Clear Varnish is a top-quality Alkyd varnish. It has maximum spread and is excellent for making putty.",
    application: "Wood pro Synthetic Clear Varnish can be applied ready for use with brush. For spray, it can be thinned as necessary with mineral or genuine turpentine. Apply the varnish in good drying conditions as free from dust as possible. Synthetic Clear Varnish may be applied coat on coat. However, before the second coat is applied, the first coat should be allowed to dry thoroughly. When re-varnishing, clean and rub down previous varnish coats. Old perished varnish should be stripped with paint stripper.",
    DryingTime: "3 to 6 hours",
    Coverage: "13 to 16 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;