import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* Text content */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl mb-6">
            The Blooms Bar
          </h1>

          <p className="text-lg text-neutral-600 max-w-xl mb-10 mx-auto md:mx-0">
            Custom floral arrangements designed uniquely for your special moments —
            handcrafted with care for every occasion.
          </p>

          <div className="flex justify-center md:justify-start">
            <a
              href="https://instagram.com/_thebloomsbar_"
              target="_blank"
              className="px-8 py-3 bg-emerald-700 text-white rounded-full hover:opacity-90 transition"
            >
              Order via Instagram
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
          <Image
            src="/home/hero-bouquet.JPG"
            alt="Custom bouquet by The Blooms Bar"
            fill
            priority
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}