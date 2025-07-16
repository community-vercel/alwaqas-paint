import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  // Use static version number (change only when image updates)
  imageVersion: "1.0",
  // Your existing image URL
  baseImageUrl: "https://www.alwaqaspaint.com/900-Gloss-Finish-1.png",
  // WhatsApp requires explicit dimensions
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-9000-gloss-finish-enamel';

export const metadata = {
  title: "Nippon 9000 Gloss Finish Enamel | Alwaqas Paint",
  description: "Oil-modified alkyd enamel paint with brilliant gloss finish for all wood and metal surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon 9000 Gloss Finish Enamel | Alwaqas Paint",
    description: "Forms a smooth, tough paint film with excellent gloss, fungus resistance and high durability.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon 9000 Gloss Finish Enamel Product",
        type: "image/png", // Explicit type declaration
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon 9000 Gloss Finish Enamel | Alwaqas Paint",
    description: "Oil-modified alkyd enamel paint with brilliant gloss finish",
    images: [productImageUrl],
  },
  other: {
    // WhatsApp-specific tags
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon 9000 Gloss Finish Enamel Product",
  }
};

const Nippon9000GlossFinish = () => {
  const productName = "Nippon 9000 Gloss Finish Enamel";
  const productDescription = "A touch of brilliant gloss finish for all wood and metal surfaces. Nippon 9000 Gloss Finish is an oil-modified alkyd enamel paint. It is easy to apply and forms a smooth, tough paint film which has excellent gloss, fungus resistance and high durability.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/900-Gloss-Finish-1.png"
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
                priority // Important for above-the-fold images
              />
            </div>
          </div>
        </div>
      }
      highlights={[
        "Anti-fungal",
        "Long lasting",
        "Washable",
        "Easy to apply"
      ]}
      technicalDataSheetUrl="/pdf/NPPK-9000-Gloss-Finish-TDS_compressed.pdf"
      shadeCardsUrl="/pdf/NPPK-COL-V6-SC-2021_compressed.pdf"
    />
  );
};

export default Nippon9000GlossFinish;