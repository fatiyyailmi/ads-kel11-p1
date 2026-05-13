import BidangCard from "../../components/cards/BidangCard";
import {
  House,
  BriefcaseBusiness,
  Trophy,
  BookOpen,
} from "lucide-react";

const DashboardMhs = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-indigo-700">
                Selamat Datang, <span className="text-indigo-900">Fatiyya</span>!
            </h1>

            {/* CARD SECTION */}
            <div className="grid grid-cols-3 gap-6 mt-8">

                <BidangCard
                    icon = {
                        <BriefcaseBusiness size={70} className="text-yellow-500" />
                    }
                    title = "Magang"
                />
                <BidangCard
                    icon = {
                        <Trophy size={70} className="text-yellow-500" />
                    }
                    title = "Kompetisi"
                />
                <BidangCard
                    icon = {
                        <BookOpen size={70} className="text-yellow-500" />
                    }
                    title = "Studi Independen"
                />

            </div>
        </div>
        
    );
};

export default DashboardMhs;