import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Flexiseal-1.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-flexiseal';

export const metadata = {
  title: "Nippon FlexiSeal Elastomeric Membrane | Alwaqas Paint",
  description: "High-build elastomeric styrene acrylic membrane for exterior use, with excellent water resistance and flexibility to cover hairline cracks.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon FlexiSeal Elastomeric Membrane | Alwaqas Paint",
    description: "Flexible, water-resistant membrane with 2-in-1 sealer and filler properties, ideal for exterior concrete surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon FlexiSeal Elastomeric Membrane Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon FlexiSeal Elastomeric Membrane | Alwaqas Paint",
    description: "Elastomeric membrane for exterior surfaces with excellent water resistance and crack coverage.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon FlexiSeal Elastomeric Membrane Product",
  }
};

const NipponFlexiseal = () => {
  const productName = "Nippon FlexiSeal Elastomeric Membrane";
  const productDescription = "Nippon Flexiseal is a high build with better hiding properties elastomeric styrene acrylic based membrane developed for exterior use. It is specially formulated with 2 in 1 sealer and filler property and is highly flexible to cover hairline cracks. Nippon Flexiseal has excellent water resistance with good adhesion that seals the pores of concrete to prevent water penetration to the substrate. It does not contain lead and mercury.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Flexiseal-1.png"
      category="Special Surfaces"
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
            {productDescription}
          </p>
        </div>
      }
      features={[
        "2-in-1 sealer and filler",
        "High flexibility",
        "Excellent adhesion",
        "Suitable for exterior concrete surfaces"
      ]}
      highlights={[
        "Covers hairline cracks",
        "Water-resistant",
        "No added lead or mercury",
        "High-build with better hiding properties"
      ]}
      specifications={[
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "2-3 hours" },
        { name: "Recoat Time", value: "6-8 hours" },
        { name: "Finish", value: "Matte" }
      ]}
      technicalDataSheetUrl="/pdf/Flexiseal-TDS_compressed-1.pdf"
    />
  );
};

export default NipponFlexiseal;