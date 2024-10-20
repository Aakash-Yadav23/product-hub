import Image from "next/image";
import SearchInput from "../global/SearchInput";
import Loot from "../layout/Loot";

export default function LandingPage() {
    return (
        <div className="flex px-5 md:px-10  min-h-[60vh] text-center flex-col gap-5 items-center justify-center">
            <div className="flex min-h-[50vh] text-center flex-col gap-5 items-center justify-center">


                <div className="title">
                    <h1 className="text-2xl font-semibold ">
                        Price History & Tracker
                    </h1>
                    <p>
                        Track prices of your favourite products on Flipkart and Amazon
                    </p>
                </div>


                <div className="search relative w-full max-w-md">
                    <SearchInput />
                </div>

                <div className="details pt-[60px] text-opacity-40 font-light ">
                    Supports all major e-commerce platforms in India
                </div>
            </div>
            <div className="loot">
                <Loot />
            </div>

        </div>
    );
}
