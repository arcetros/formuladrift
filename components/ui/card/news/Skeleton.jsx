export const Skeleton = ({ sizes }) => {
    return (
        <div
            className={`flex flex-col items-stretch min-h-full shadow-xl ${sizes} bg-gray-200 animate-pulse`}
        >
            <div className="flex mt-auto h-28">
                <div className="flex flex-col my-auto px-6 gap-y-4 w-full">
                    <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
                    <div className="w-2/3 bg-gray-300 h-6 rounded-md "></div>
                </div>
            </div>
        </div>
    )
}
