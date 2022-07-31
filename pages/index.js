export default function Home() {
    return (
        <div className="flex place-content-between bg-gray-200">
            <div className="p-4 m-4 bg-orange-600 rounded-2xl text-white font-bold">Logo</div>
            <div className="flex">
                <div className="p-4 m-4 bg-orange-600 rounded-2xl text-white font-bold">Home</div>
                <div className="p-4 m-4 bg-orange-600 rounded-2xl text-white font-bold">
                    Address
                </div>
                <div className="p-4 m-4 bg-orange-600 rounded-2xl text-white font-bold">
                    Balance
                </div>
            </div>
            <div className="p-4 m-4 bg-blue-600 hover:bg-blue-400 rounded-2xl text-white font-bold">
                Connect
            </div>
        </div>
    )
}
