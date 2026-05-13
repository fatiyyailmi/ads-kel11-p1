import BidangCard from "../../components/cards/BidangCard";
import LamaranCard from "../../components/cards/LamaranCard";
import ReminderCard from "../../components/cards/ReminderCard";
import NextButton from "../../components/ui/NextButton";
import logoShopee from "../../assets/logo-shopee.png";
import {
  House,
  BriefcaseBusiness,
  Trophy,
  BookOpen,
  CheckCheck,
  CircleX,
  Contact,
  FileClock
} from "lucide-react";

const DashboardMhs = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-indigo-700">
                Selamat Datang, <span className="text-indigo-900">Fatiyya</span>!
            </h1>

            {/* BIDANG CARD SECTION */}
            <div className="grid grid-cols-3 gap-6 mt-8">

                <BidangCard
                    icon = {
                        <BriefcaseBusiness size={70} className="text-yellow-400"/>
                    }
                    title = "Magang"
                />
                <BidangCard
                    icon = {
                        <Trophy size={70} className="text-yellow-400" />
                    }
                    title = "Kompetisi"
                />
                <BidangCard
                    icon = {
                        <BookOpen size={70} className="text-yellow-400" />
                    }
                    title = "Studi Independen"
                />
            </div>
            
            {/* AKTIVITAS SECTION */}
            <div className="grid grid-cols-3 gap-6 mt-10">

                {/* ========================= */}
                {/* LEFT SIDE - AKTIVITASMU */}
                {/* ========================= */}
                <div className="col-span-2">

                    {/* HEADER */}
                    <div className="flex items-center justify-between mb-4">

                        {/* TITLE */}
                        <h2 className="
                            text-2xl
                            font-bold
                            text-indigo-700
                        ">
                            Aktivitasmu
                        </h2>

                        {/* NEXT BUTTON */}
                        <NextButton
                            to="/lamaran-saya"
                            label="Selengkapnya"
                        />

                    </div>

                    {/* LAMARAN LIST */}
                    <div className="space-y-4">

                        <LamaranCard
                            logo={logoShopee}
                            title="UI/UX Designer Internship"
                            company="Shopee Indonesia"
                            status="Telah Mendaftar"
                        />

                        <LamaranCard
                            logo={logoShopee}
                            title="Data Analyst Internship"
                            company="Blibli.com"
                            status="Diterima"
                        />

                    </div>

                </div>


                 {/* ========================= */}
                 {/* RIGHT SIDE - REMINDER */}
                 {/* ========================= */}
                <div>
                    {/* HEADER */}
                    <div className="mb-4">

                        {/* TITLE */}
                        <h2 className="
                            text-2xl
                            font-bold
                            text-indigo-700
                        ">
                            Reminder
                        </h2>

                    </div>

                    {/* REMINDER LIST */}
                    <div className="space-y-4">

                        <ReminderCard
                            title="Logbook Harian"
                            program="UI/UX Designer Internship"
                            deadline="Hari ini, 23.59"
                        />

                        <ReminderCard
                            title="Logbook Harian"
                            program="Data Analyst Internship"
                            deadline="Hari ini, 23.59"
                        />

                    </div>

                </div>

            </div>

        </div>
        
    );
};

export default DashboardMhs;