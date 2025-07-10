
const FooterBadge = () => {
    return (
      <div className="mt-8 sm:mt-10 md:mt-14 flex justify-center relative z-10">
        <div className="px-5 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-blue-600 text-white text-base sm:text-xl font-semibold shadow-md tracking-wide animate-fade-up-delay border-0 flex items-center gap-2 sm:gap-3">
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block"
          >
            <circle cx="12" cy="12" r="12" fill="#2563eb" />
          </svg>
          <span className="drop-shadow">ConnectJapan</span>
        </div>
      </div>
    );
};

export default FooterBadge;