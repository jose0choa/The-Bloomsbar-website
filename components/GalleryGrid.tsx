"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "/gallery/bouquet-1.JPG",
  "/gallery/bouquet-2.JPG",
  "/gallery/bouquet-3.JPG",
  "/gallery/bouquet-4.JPG",
  "/gallery/bouquet-5.JPG",
  "/gallery/bouquet-6.JPG",
  "/gallery/bouquet-7.JPG",
  "/gallery/bouquet-8.JPG",
  "/gallery/bouquet-9.JPG",
  "/gallery/bouquet-10.JPG",
  "/gallery/bouquet-11.JPG",
  "/gallery/bouquet-12.JPG",
];

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