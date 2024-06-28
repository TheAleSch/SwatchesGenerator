import { MdClose, MdLink, MdOpenInNew } from "react-icons/md";

function LinkItem() {
  return (
    <div className="flex flex-row justify-between items-center gap-2 p-1 pr-2 rounded-[6px] hover:bg-[--color-main-100]">
      <div className="flex items-center justify-center bg-blue size-8 bg-[--color-main-200] rounded-[2px]">
        <MdLink color="var(--color-main-700)" size={24} />
      </div>
      <span className="flex-grow text-[14px]">Link number one cool</span>
      <MdOpenInNew className="" color="#8fa6bb" size={16} />
    </div>
  );
}

function LPheader() {
  return (
    <div className="flex justify-between w-full py-4 px-4 h-[104px] bg-[--color-main-brand] text-white">
      <h1 className="text-2xl">Resource Center</h1>
      <MdClose size={32} />
    </div>
  );
}

function LaunchpadDemo() {
  return (
    <div className=" text-[#404B60] shadow-lg  flex w-[360px] flex-col pb-4 bg-white border rounded-2xl overflow-hidden border-1 border-[rgba(0,0,0, 1)]">
      <LPheader />
      {/* blocks group */}
      <div className="-mt-[40px] h-auto w-auto flex flex-col px-4 gap-4">
        {/* Links Block */}
        <div className=" drop-shadow-md border  border-[rgba(0,0,0,0.1)] rounded-lg w-full p-2 bg-[white]">
          <h2 className="text-[15px] w-full px-2 py-2 font-bold">
            Block title
          </h2>
          {/* items list */}
          <div className="flex "></div>
          <LinkItem />
          <LinkItem />
          <LinkItem />
          <LinkItem />
        </div>
        {/* Links Block 2 */}
        <div className="drop-shadow-md border border-10  border-[rgba(0,0,0,0.1)] rounded-lg w-full p-2 bg-white">
          <h2 className="text-[15px] w-full px-2 py-2 font-bold">
            Block title
          </h2>
          {/* items list */}
          <div className="flex "></div>
          <LinkItem />
          <LinkItem />
          <LinkItem />
          <LinkItem />
        </div>
      </div>
    </div>
  );
}

export default LaunchpadDemo;
