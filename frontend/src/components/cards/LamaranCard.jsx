import Status from "../ui/Status";

const LamaranCard = ({
    logo,
    title,
    company,
    status,
}) => {

    return (

        <div className="
            bg-white
            rounded-2xl
            shadow-sm
            p-5
            flex items-center justify-between
            w-full
        ">

            {/* LEFT SECTION */}
            <div className="flex items-center gap-4">

                {/* LOGO */}
                <img
                    src={logo}
                    alt={company}
                    className="w-12 h-12 object-contain"
                />

                {/* TEXT */}
                <div>

                    {/* TITLE */}
                    <h2 className="
                        text-lg
                        font-semibold
                        text-gray-900
                    ">
                        {title}
                    </h2>

                    {/* COMPANY */}
                    <p className="
                        text-md
                        text-gray-700
                    ">
                        {company}
                    </p>

                </div>

            </div>

            {/* STATUS */}
            <Status status={status} />

        </div>
    );
};

export default LamaranCard;