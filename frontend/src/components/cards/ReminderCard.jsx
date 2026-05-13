const ReminderCard = ({
    title,
    program,
    deadline,
}) => {
    
    return (
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-start justify-between w-full">
            
            {/* LEFT SECTION */}
            <div className="flex items-start gap-4">

                {/* CIRCLE */}
                <div className="w-4 h-4 rounded-full border border-gray-500">
                </div>

                {/* TEXT */}
                <div>
                    {/* TITLE */}
                    <h2 className="text-lg font-semibold text-gray-900">
                        {title}
                    </h2>
                </div>

                {/* PROGRAM */}
                <p className="text-md text-gray-700">
                        {program}
                </p>

            </div>

            {/* DEADLINE */}
            <p className="text-sm text-gray-700 whitespace-nowrap">
                {deadline}
            </p>

        </div>
    );
};

export default ReminderCard;

