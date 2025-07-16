import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// Add cache-busting parameter
const imageVersion = Date.now();
const productImageUrl = `https://www.alwaqaspaint.com/ACS-Putty-1.png?${imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-acs-putty';

export const metadata = {
  title: "Nippon ACS Putty | Alwaqas Paint",
  description: "High quality filler for patching cracks and leveling uneven surfaces. Provides perfect smooth finish with excellent workability.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon ACS Putty | Alwaqas Paint",
    description: "Premium filler for perfect smooth finishes on walls and surfaces. Enhances top coat performance.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: 1200,
        height: 630,
        alt: "Nippon ACS Putty Product",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon ACS Putty | Alwaqas Paint",
    description: "Premium filler for perfect smooth finishes on walls and surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
  }
};

const NipponExpresskote = () => {
  const productName = "Nippon ACS Putty";
  const productDescription = "A high quality filler for patching cracks, levelling uneven rough porous cement walls, plaster work and filling defective surfaces.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/ACS-Putty-1.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
            {productDescription}
            The ACS Putty provides a perfect smooth finish which enhances the performance of the top coat. 
            It has excellent workability, drying and sanding properties.
          </p>
          
          <div className="flex flex-row gap-4 justify-center items-center my-4">
            <div className="w-10 h-16">
              <Image 
                src="/fungus_resistant.png" 
                alt="Fungus resistant icon"
                width={64}
                height={64}
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      }
      features={[
        "Strong adhesion",
        "Smooth finish",
        "Highly durable",
      ]}
      technicalDataSheetUrl="/pdf/NPPK-Putty-ACS-Putty-TDS_compressed.pdf"
    />
  );
};

export default NipponExpresskote;