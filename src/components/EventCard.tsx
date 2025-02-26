import { EllipsisVertical, Sparkles, Volleyball } from "lucide-react";

const EventCard = () => {
  return (
    <div className="pink-grad w-full p-2 md:p-3 rounded-lg bg-orange-200 flex items-center justify-between">
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center self-start gap-2">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
          <p className="text-xs font-semibold text-neutral-500">
            12:00 AM - 7:00 AM
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Volleyball width={18} />
          <p className="text-base font-bold text-black">
            Birthday Party - Vasa
          </p>
        </div>
        <div className="flex items-center self-start gap-2">
          <div className="bg-[#f5f5f5] rounded-full w-[18px] h-[18px] flex justify-center items-center">
            <Sparkles color="gold" width={10} />
          </div>
          <p className="text-xs font-semibold text-neutral-500">Brine</p>
        </div>
      </div>
      <EllipsisVertical height={20} />
    </div>
  );
};

export default EventCard;
