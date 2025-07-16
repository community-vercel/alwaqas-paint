import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  // Use static version number (change only when image updates)
  imageVersion: "1.0",
  // Your existing image URL
  baseImageUrl: "https://www.alwaqaspaint.com/Group-12965.png",
  // WhatsApp requires explicit dimensions
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-quality-exterior-emulsion';

export const metadata = {
  title: "Nippon Quality Exterior Emulsion | Alwaqas Paint",
  description: "Acrylic emulsion paint for exterior walls with weather protection and dirt resistance.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Quality Exterior Emulsion | Alwaqas Paint",
    description: "Economical choice protecting against harsh weather with wide range of aesthetic shades.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Quality Exterior Emulsion Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Quality Exterior Emulsion | Alwaqas Paint",
    description: "Weather-resistant exterior emulsion with UV protection",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Quality Exterior Emulsion Product",
  }
};

const NipponQualityExteriorEmulsion = () => {
  const productName = "Nippon Quality Exterior Emulsion";
  const productDescription = "Nippon Quality Exterior Emulsion is an acrylic emulsion paint specially formulated for exterior walls. It is a good economical choice to protect your home against harsh weather and provide good resistance against dirt, flaking and alkali. Available in wide range of shades which enhance aesthetic look.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Group-12965.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
            {productDescription}
          </p>
          
          <div className="flex flex-row gap-4 justify-center items-center my-4">
            <div className="w-10 h-16">
              <Image 
                src="/fungus_resistant.png" 
                alt="Fungus resistant"
                width={64}
                height={64}
                className="rounded-lg object-contain w-full h-full"
                priority
              />
            </div>
            <div className="w-10 h-16">
              <Image 
                src="/low_voc.png" 
                alt="Low VOC"
                width={64}
                height={64}
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
            <div className="w-10 h-16">
              <Image 
                src="/green_choice.png" 
                alt="Eco-friendly choice"
                width={64}
                height={64}
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      }
      highlights={[
        "Weather and UV resistant",
        "Excellent dirt and alkali resistance",
        "Wide range of aesthetic shades",
        "Economical exterior protection",
        "No added lead or mercury"
      ]}
      technicalDataSheetUrl="/pdf/NIPPON-QUALITY-EXTERIOR-EMULSION_compressed-1.pdf"
      shadeCardsUrl="/pdf/Q-Exterior-Shade-Card-_compressed-1.pdf"
    />
  );
};

export default NipponQualityExteriorEmulsion;