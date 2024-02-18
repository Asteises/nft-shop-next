import React from "react";

export default function Countdown() {
    return (
        <>
            <div className="rounded-3xl bg-gray-600 px-8 py-8">
                <div className="text-xs text-white mb-3">
                    Auction ends in:
                </div>
                <div className="flex justify-between items-normal gap-3">
                    <div className="text-left">
                        <div className="text-5xl text-white mb-2">
                            59
                        </div>
                        <div className="text-xs text-white">
                            Hours
                        </div>
                    </div>
                    <div className="text-5xl text-white">
                        :
                    </div>
                    <div className="text-left">
                        <div className="text-5xl text-white mb-2">
                            59
                        </div>
                        <div className="text-xs text-white">
                            Minutes
                        </div>
                    </div>
                    <div className="text-5xl text-white">
                        :
                    </div>
                    <div className="text-left">
                        <div className="text-5xl text-white mb-2">
                            59
                        </div>
                        <div className="text-xs text-white">
                            Seconds
                        </div>
                    </div>
                </div>
                <button className="text-lg text-white rounded-3xl bg-purple-500 px-20 py-5 mt-8 text-center">
                    Place Bid
                    </button>
            </div>
        </>
    )
}