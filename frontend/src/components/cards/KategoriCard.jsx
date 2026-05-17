
const KategoriCard =({
    icon,
    title,
    onClick,
}) => {

    return (
        <button
            onClick={onClick}
            className="
                min-w-[180px]

                bg-kuning-muda
                border-1
                border-kuning-tua

                rounded-xl

                px-2
                py-2

                flex
                flex-col
                items-center
                justify-center

                gap-2
                
                hover:bg-kuning-muda
                hover:-translate-y-1
                hover:shadow-md
                cursor-pointer

                transition-all
                duration-300

            "
        >
            {/* ICON */}
            <div className="text-kuning-tua">
                {icon}
            </div>

            {/* TITLE */}
            <p className="
                text-sm
                text-center
                font-medium
                text-bold-blue">
                
                {title}
            </p>

        </button>
    );
};

export default KategoriCard;