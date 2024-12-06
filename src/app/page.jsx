'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [image, setImage] = useState(null);

  const handleUploadImage = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const image = files[0];
      console.log(image);

      const fileReader = new FileReader();
      fileReader.readAsDataURL(image);
      fileReader.addEventListener('loadend', (e) => {
        console.log(e.target.result);
        setImage(e.target.result);
      });
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">
        We will upload an image and preview it
      </h1>
      <div>
        {image ? (
          <Image
            src={image}
            height={400}
            width={400}
            alt="An image"
            className="max-h-[200px] max-w-[200px]"
          />
        ) : null}
      </div>
      <form>
        <input type="file" accept="image/*" onChange={handleUploadImage} />
      </form>
    </div>
  );
}
