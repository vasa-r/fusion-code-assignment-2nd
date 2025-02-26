import {
  EllipsisVertical,
  Music,
  Sparkles,
  Volleyball,
  WavesLadder,
} from "lucide-react";
import { formatTime } from "../utils/dates";

interface CardProp {
  title: string;
  icon: string;
  start: number;
  end: number;
}

const EventCard = ({ title, icon, start, end }: CardProp) => {
  return (
    <div
      className={`${
        Math.random() < 0.5 ? "pink-grad" : "bg-blue-300"
      } w-full p-2 md:p-3 rounded-lg flex items-center justify-between`}
    >
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center self-start gap-2">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
          <p className="text-xs font-semibold text-neutral-500">
            {formatTime(start)} - {formatTime(end)}
          </p>
        </div>
        <div className="flex items-center gap-2 self-start">
          {icon === "ladder" && <WavesLadder width={18} />}
          {icon === "ball" && <Volleyball width={18} />}
          {icon === "music" && <Music width={18} />}
          <p className="text-base font-bold text-black">{title}</p>
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
