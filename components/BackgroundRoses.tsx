export default function BackgroundRoses() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* Bottom Right Rose (desktop only) */}
      <img
        src="/roses/bouque-flowers-roses-love-romance-svgrepo-com.svg"
        alt=""
        className="
          hidden md:block
          absolute -bottom-15 -right-20
          w-96 opacity-10 -rotate-12
        "
      />

      {/* Bottom Left Rose (desktop only) */}
      <img
        src="/roses/bouque-flowers-roses-love-romance-svgrepo-com.svg"
        alt=""
        className="
          hidden md:block
          absolute -bottom-15 -left-15
          w-90 opacity-10 rotate-12
        "
      />

    </div>
  );
}