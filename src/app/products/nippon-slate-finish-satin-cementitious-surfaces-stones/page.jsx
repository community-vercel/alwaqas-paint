import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/slate-finish-1.png",
  imageWidth: 1200,
  imageHeight: 630,
};

const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-slate-finish-satin-cementitious-surfaces-stones';

export const metadata = {
  title: "Nippon Slate Finish – Satin | Alwaqas Paint",
  description: "A solvent-based acrylic coating with UV protection for cementitious surfaces and stones. Enhances color with a glossy wet look and anti-scratch durability.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Slate Finish – Satin | Alwaqas Paint",
    description: "Protect and beautify your slates, bricks, and stones with UV-resistant, anti-fungus acrylic coating.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Slate Finish – Satin Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Slate Finish – Satin | Alwaqas Paint",
    description: "Glossy protective finish for cementitious surfaces, resistant to UV, fungus, and scratches.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Slate Finish – Satin Product",
  }
};

const NipponSlate = () => {
  return (
    <BaseProductDetail
      productName="Nippon Slate Finish – Satin (Cementitious Surfaces)/Stones"
      productImage="/slate-finish-1.png"
      category="Special Surfaces"
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
            Nippon Slate Finish – Satin (Cementitious Surfaces)/Stones is a solvent-based acrylic coating specially formulated with UV additives to protect the surface from staining, efflorescence, and scratching.
          </p>

          <p className='text-xl text-black underline'>Recommended Uses:</p>
          <p>
            Best suited for interior and exterior slates, bricks, concrete, quarry or porous tiles, natural stones, artificial stones, and cementitious substrates.
          </p>
        </div>
      }
      highlights={[
        "Enhances the color of material giving the surface fine lustrous/glossy finish",
        "Anti-scratching and efflorescence",
        "Good UV resistance",
        "Anti-fungus",
        "Consistent wet look",
        "Transparent in color",
      ]}
      technicalDataSheetUrl="/pdf/NPPK-Slate-Finish-Gloss_compressed.pdf"
    />
  );
};

export default NipponSlate;
