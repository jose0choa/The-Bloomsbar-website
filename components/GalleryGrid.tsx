"use client";

import Image from "next/image";
import { useState } from "react";

// const images = [
//   "/gallery/bouquet-1.jpg",
//   "/gallery/bouquet-2.jpg",
//   "/gallery/bouquet-3.jpg",
//   "/gallery/bouquet-4.jpg",
//   "/gallery/bouquet-5.jpg",
//   "/gallery/bouquet-6.jpg",
//   "/gallery/bouquet-7.jpg",
//   "/gallery/bouquet-8.jpg",
//   "/gallery/bouquet-9.jpg",
//   "/gallery/bouquet-10.jpg",
//   "/gallery/bouquet-11.JPG",
//   "/gallery/bouquet-12.jpg",
// ];

export default function GalleryGrid() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(src)}
            className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl focus:outline-none"
          >
            <Image
              src={src}
              alt="Custom floral arrangement"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-3xl w-full">
            <Image
              src={activeImage}
              alt="Enlarged floral arrangement"
              width={1200}
              height={1600}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}