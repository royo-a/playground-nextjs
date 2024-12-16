'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [image, setImage] = useState([]);

  const handleUploadImage = useCallback((e) => {
    console.group('handleUploadImage');
    // 👉 Files is an array that contains all selected files
    const files = e.target.files;
    if (files.length > 0) {
      Array.from(files).forEach((file, index) => {
        const fileReader = new FileReader();
        fileReader.addEventListener(
          'load',
          (e) => {
            if (index === 0) {
              setImage(() => [e.target.result]);
              return;
            }

            setImage((prevState) => [...prevState, e.target.result]);
          },
          { once: true }
        );
        fileReader.readAsDataURL(file);
      });
    }
    console.groupEnd();
  }, []);

  const previewImages = useCallback(() => {
    return image.map((img, index) => {
      return (
        <Image
          key={imgx}
          src={img}
          height={200}
          width={200}
          alt="An image"
          className="max-h-[200px] max-w-[200px] flex overflow-x-auto gap-2"
        />
      );
    });
  }, [image]);

  return (
    <div>
      <h1 className="text-3xl font-bold">
        We will upload an image and preview it
      </h1>
      <div className="flex gap-2 ">{previewImages()}</div>
      <form>
        <input
          type="file"
          accept="image/*"
          onChange={handleUploadImage}
          multiple={true}
        />
      </form>
    </div>
  );
}
