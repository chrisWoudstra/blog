export default function Footer() {
    const currentYear = (new Date()).getFullYear().toString();

    return (
    <footer className="flex justify-center items-center h-16 bg-white text-black relative shadow-sm border-t border-gray-200" role="contentinfo">
      <p className="pl-8">© {currentYear} Mystical Forest Cat</p>
    </footer>
  );
}