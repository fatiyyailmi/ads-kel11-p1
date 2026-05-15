import {
    MonitorCog,
    ChartColumnBig,
    TabletSmartphone,
    MessageCircleHeart,
    BadgeDollarSign,
    UserStar,
    Truck,
    ScrollText,
    Palette,
    Wrench,
    Microscope,
    HandShake,
    Scale,
    HeartPulse

} from "lucide-react";

const BidangCard = ({ icon, title }) => {
    return (
        <div className=" flex items-center bg-white border border-kuning-tua rounded-xl overflow-hidden w-70 h-25 ">

            {/* ICON SECTION */}
            <div className="h-full w-30 bg-kuning-muda flex items-center justify-center">
                {icon}
            </div>

            {/* TITLE */}
            <div className="flex-1 px-6">
                <h2 className="text-xl font-semibold justicy-center text-bold-blue">
                    {title}
                </h2>

            </div>
        </div>
    );
};

export default BidangCard;