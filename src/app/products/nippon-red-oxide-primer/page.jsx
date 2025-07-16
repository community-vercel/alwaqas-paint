import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  // Use static version number (change only when image updates)
  imageVersion: "1.0",
  // Your existing image URL
  baseImageUrl: "https://www.alwaqaspaint.com/Red-oxide-1.png",
  // WhatsApp requires explicit dimensions
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-red-oxide-primer';

export const metadata = {
  title: "Nippon Red Oxide Primer | Alwaqas Paint",
  description: "Alkyd-based primer with anti-corrosive properties for iron and steel surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Red Oxide Primer | Alwaqas Paint",
    description: "Economical protective coating with excellent adhesion for metal surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Red Oxide Primer Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Red Oxide Primer | Alwaqas Paint",
    description: "Anti-corrosive primer for iron and steel protection",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Red Oxide Primer Product",
  }
};

const NipponRedOxidePrimer = () => {
  const productName = "Nippon Red Oxide Primer";
  const productDescription = "Nippon Red Oxide Primer is an alkyd based primer used as an economical protective coating for iron and steel surfaces under non-immersion condition. It has anti-corrosive properties and gives a good adhesion to the top coat.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Red-oxide-1.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
            {productDescription}
          </p>
          
          <div className="flex flex-row gap-4 justify-center items-center my-4">
            <div className="w-10 h-16">
              <Image 
                src="/anti-corrosive.png" // Suggested icon
                alt="Anti-corrosive protection"
                width={64}
                height={64}
                className="rounded-lg object-contain w-full h-full"
                priority
              />
            </div>
            <div className="w-10 h-16">
              <Image 
                src="/metal-surface.png" // Suggested icon
                alt="Metal surface protection"
                width={64}
                height={64}
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      }
      highlights={[
        "Anti-corrosive protection",
        "Strong adhesion to metal",
        "Alkyd-based formula",
        "Economical solution",
        "Suitable for non-immersion conditions"
      ]}
      technicalDataSheetUrl="/pdf/NIPPON-RED-OXIDE-PRIMER_compressed.pdf"
    />
  );
};

export default NipponRedOxidePrimer;