import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="mt-24 flex w-full flex-1 flex-col items-center gap-6 md:mt-40 lg:mt-0 lg:justify-center">
        <h1 className="text-center text-5xl font-bold text-gray-800">
          Weather
        </h1>
        <SearchBox />
        <div className="hidden w-full justify-center gap-4 lg:flex">
          <button className="text-primary rounded-md bg-[#F8F9FA] px-4 py-2">
            Google Search
          </button>
          <button className="text-primary rounded-md bg-[#F8F9FA] px-4 py-2">
            {`I'm Feeling Lucky`}
          </button>
        </div>
        <div className="text-primary flex w-full flex-col justify-center gap-4 text-sm lg:mr-52 lg:flex-row">
          <span className="text-center">Google offered in:</span>
          <div className="flex justify-center gap-4">
            {["हिन्दी", "বাংলা", "తెలుగు", "मराठी"].map((lang) => (
              <a href="#" key={lang} className="text-blue-500">
                {lang}
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
