'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [image, setImage] = useState([]);

  const handleUploadImage = useCallback((e) => {
    console.group('handleUploadImage');
    // 👉 Files is an array that contains all selected files
    const files = e.target.files;
    console.log('Selected files: ', files);
    if (files.length > 0) {
      const imageArray = [];
      let fileArray = Array.from(files);
      fileArray.forEach((file) => {
        const fileReader = new FileReader();
        fileReader.addEventListener(
          'load',
          (e) => {
            imageArray.push({ src: e.target.result, name: file.name });

            if (imageArray.length === fileArray.length) {
              setImage(imageArray);
            }
          },
          { once: true }
        );
        fileReader.readAsDataURL(file);
      });
    }
    console.groupEnd();
  }, []);

  const previewImages = useCallback(() => {
    return image.map((img) => {
      return (
        <Image
          key={img.name}
          src={img.src}
          height={200}
          width={200}
          alt="An image"
          className="size-[100px] flex-none"
        />
      );
    });
  }, [image]);

  return (
    <div>
      <h1 className="text-3xl font-bold">
        We will upload an image and preview it
      </h1>
      <div className="flex gap-2 overflow-x-auto">{previewImages()}</div>
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
