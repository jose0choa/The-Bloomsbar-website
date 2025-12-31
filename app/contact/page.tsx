export default function ContactPage() {
  return (
    <main className="min-h-screen px-8 py-24 flex flex-col items-center text-center">
      <h1 className="text-4xl mb-6">Contact</h1>

      <p className="text-neutral-600 max-w-md mb-10">
        The Blooms Bar is a one-woman floral studio based in Kerman, California,
        serving the Central Valley. For general questions or inquiries, feel
        free to reach out below.
      </p>

      <div className="flex flex-col gap-4">
        <a
          href="https://instagram.com/_thebloomsbar_"
          target="_blank"
          className="px-8 py-3 border border-neutral-900 rounded-full hover:bg-neutral-100 transition"
        >
          Instagram
        </a>

        <a
          href="mailto:thebloomsbar8@gmail.com"
          className="text-sm text-neutral-600 underline"
        >
          thebloomsbar8@gmail.com
        </a>

        <p className="text-sm text-neutral-500">
          For custom bouquet requests, please visit the{" "}
          <a href="/how-to-order" className="underline hover:text-neutral-700">
            How to Order page
          </a>.
        </p>
       
      </div>
    </main>
  );
}