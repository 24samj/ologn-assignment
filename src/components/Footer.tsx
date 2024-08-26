import React from "react";

function Footer() {
  return (
    <div className="w-full bg-[#F2F2F2]">
      <span className="border-b-2 border-[#DADCE0] px-6 py-4 text-sm text-primary">
        India
      </span>
      <div className="flex flex-col-reverse justify-between px-6 py-4 md:flex-row">
        <div>
          <nav className="ml-2 flex justify-center gap-8 md:gap-4">
            {["About", "Advertising", "Business"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-sm text-primary hover:underline"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <nav className="flex justify-center gap-8 md:gap-4">
            {["Privacy", "Terms", "Settings"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-sm text-primary hover:underline"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
