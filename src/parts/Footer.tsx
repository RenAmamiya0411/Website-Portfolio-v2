function Footer() {
  return (
    <footer className="bg-black border-t border-red-500 text-white px-8 py-8">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()}
          <span className="text-red-500 font-bold"> Joker</span>
        </p>
        <p className="text-gray-400 text-sm">
          Designed and Built by
          <span className="text-red-500 font-bold"> Joker</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
