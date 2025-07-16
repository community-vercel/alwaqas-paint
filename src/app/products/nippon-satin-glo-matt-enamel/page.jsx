import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  // Use static version number (change only when image updates)
  imageVersion: "1.0",
  // Your existing image URL
  baseImageUrl: "https://www.alwaqaspaint.com/satin-glo-web-image.jpg",
  // WhatsApp requires explicit dimensions
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-satin-glo-matt-enamel';

export const metadata = {
  title: "Nippon Satin Glo Matt Enamel | Alwaqas Paint",
  description: "Premium enamel paint with satin-smooth sheen for interiors, highly washable with excellent scrub resistance.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Satin Glo Matt Enamel | Alwaqas Paint",
    description: "Creates beautiful satin finish with fungus resistance and durability for interior walls.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Satin Glo Matt Enamel Product",
        type: "image/jpeg", // Changed to jpeg since your image is .jpg
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Satin Glo Matt Enamel | Alwaqas Paint",
    description: "Satin-smooth enamel with washable and scrub-resistant properties",
    images: [productImageUrl],
  },
  other: {
    // WhatsApp-specific tags
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/jpeg",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Satin Glo Matt Enamel Product",
  }
};

const NipponSatinGloMattEnamel = () => {
  const productName = "Nippon Satin Glo Matt Enamel";
  const productDescription = "Nippon Satin Glo creates a satin-smooth sheen in the interior of your home. It is highly washable with good scrub resistance, so you don't have to worry about damaging the paint.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/satin-glo-web-image.jpg"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
            {productDescription}
          </p>
          
          <div className="flex flex-row gap-4 justify-center items-center my-4">
            <div className="w-10 h-16">
              <Image 
                src="/satin-finish.png" // Suggested icon
                alt="Satin finish icon"
                width={64}
                height={64}
                className="rounded-lg object-contain w-full h-full"
                priority
              />
            </div>
            <div className="w-10 h-16">
              <Image 
                src="/scrub-resistant.png" // Suggested icon
                alt="Scrub resistant icon"
                width={64}
                height={64}
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      }
      highlights={[
        "Beautiful satin-smooth finish",
        "Highly washable surface",
        "Fungus resistant formula",
        "Excellent scrub resistance",
        "Long-lasting durability"
      ]}
      technicalDataSheetUrl="/pdf/NIPPON-SATIN-GLO-MATT-ENAMEL_compressed (1).pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (7).pdf"
    />
  );
};

export default NipponSatinGloMattEnamel;