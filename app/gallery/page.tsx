import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage() {
  return (
    <main className="min-h-screen px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl mb-6 text-center">Gallery</h1>

        <p className="text-neutral-600 text-center max-w-xl mx-auto mb-16">
          A collection of custom bouquets created for birthdays, celebrations,
          and everyday moments. Each arrangement is designed uniquely for every
          order.
        </p>

        {/* <GalleryGrid /> */}

        <a
        href="https://instagram.com/_thebloomsbar_"
        target="_blank"
        className="mt-16 block text-center text-neutral-600 hover:text-neutral-900 transition"
        >
        View Instagram for more photos →
        </a>
        
      </div>
    </main>
  );
}