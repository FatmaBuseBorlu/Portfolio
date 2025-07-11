import { FiLink, FiGithub, FiMail, FiDownload } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex flex-col items-center text-white py-10 bg-gray-900">
      <img
        src="/1749940239734.jpeg" // public klasörüne koyduysan başına / koymalısın
        alt="Profil"
        className="w-40 h-40 rounded-full mb-4 border-4 border-white shadow-lg"
      />
      <h1 className="text-3xl font-bold">Fatma Buse Borlu</h1>
      <p className="text-gray-400">Bilgisayar Mühendisi | Web & Yapay Zeka</p>

      <div className="flex gap-6 mt-4 text-2xl">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/fatma-buse-borlu-36537519b/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="hover:text-blue-400 transition"
        >
          <FiLink />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/FatmaBuseBorlu"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="hover:text-green-400 transition"
        >
          <FiGithub />
        </a>

        {/* E-posta */}
        <a
          href="mailto:fatmabuseborlu@gmail.com"
          title="Mail Gönder"
          className="hover:text-red-400 transition"
        >
          <FiMail />
        </a>

        {/* CV indir */}
        <a
          href="\Fatma Buse Borlu CV.pdf"
          download
          title="CV İndir"
          className="hover:text-yellow-400 transition"
        >
          <FiDownload />
        </a>
      </div>
    </div>
  );
};

export default Header;
