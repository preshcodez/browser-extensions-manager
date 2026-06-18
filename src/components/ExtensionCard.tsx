import type { Extension } from "../App";

interface ExtensionCardProps {
  allExtensions: Extension[];
  toggleExtension: (value: string) => void;
}
const ExtensionCard: React.FC<ExtensionCardProps> = ({
  allExtensions,
  toggleExtension,
}) => { 
  return (
    <div className="grid sm:grid-cols-3 gap-4 
    px-4 sm:px-12 mb-10">
      {allExtensions.map((extension) => {
        return (
          <div
            key={extension.name}
            className=" px-4 rounded-lg text-color bg-element flex flex-col gap-6 py-7 "
          >
            <div className="flex gap-3 ">
              <img src={extension.logo} alt={extension.name} className="w-10" />
              <div className="">
                <h3>{extension.name}</h3>
                <p className="main-element text-[14px]">
                  {extension.description}
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => toggleExtension(extension.name)}
                className="border bg-element py-1 px-3 rounded-[15px] cursor-pointer"
              >
                Remove
              </button>
              <div
                onClick={() => toggleExtension(extension.name)}
                className={`w-12 h-6 rounded-full p-0.5 cursor-pointer transition-all duration-300 ${
                  extension.isActive ? "bg-red-500" : "bg-gray-500"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ${
                    extension.isActive ? "translate-x-6" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExtensionCard;
