import { MdClose, MdLink, MdOpenInNew } from "react-icons/md";

function LaunchpadDemo() {
  return (
    <div className=" text-[#404B60]  flex w-[360px] flex-col pb-4 bg-white border rounded-2xl overflow-hidden border-[rgba(255,255,255, 0.1)]">
      <div className="flex justify-between w-full -mb-20 py-4 px-4 h-40 bg-blue-700 text-white">
        <h1 className="text-2xl">Resource Center</h1>
        <MdClose size={32} />
      </div>
      {/* blocks */}
      <div className="h-auto w-auto flex flex-col px-4 gap-4">
        {/* Links Block */}
        <div className=" drop-shadow-lg rounded-lg w-full bg-white">
          <h2 className="text-[15px] w-full px-2 py-2 font-medium">
            Block title
          </h2>
          {/* items list */}
          <div className="flex w-full p-1">
            <div className="flex w-full flex-row justify-between items-center gap-2 p-1 rounded-[6px] hover:bg-blue-100">
              <div className="flex items-center justify-center bg-blue size-8 bg-blue-100 rounded-[2px]">
                <MdLink color="#0072D6" size={24} />
              </div>
              <span className="w-full text-[14px]">Link number one cool</span>
              <MdLink className="w-full" color="#0072D6" size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaunchpadDemo;
