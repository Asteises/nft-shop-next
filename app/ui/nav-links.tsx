import Image from "next/image"

export const NavLinks = () => {
    return (
        <>
            <div className="bg-gray-800 min-h-48">
                <nav x-data="{ open: false}">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-5">
                        <div className="relative flex h-16 items-center justify-between">
                            <Image
                                src={"/logo.svg"}
                                width={244}
                                height={32}
                                alt="logo"
                            />
                            <div className="flex justify-between items-center gap-2.5">
                                <button className="text-white rounded-lg bg-gray-500 px-5 py-2">Marketplace</button>
                                <button className="text-white rounded-lg bg-gray-500 px-5 py-2">Rankings</button>
                                <button className="text-white rounded-lg bg-gray-500 px-5 py-2">Connect a wallet</button>
                                <button className="flex items-center text-white rounded-lg bg-purple-500 px-5 py-2 gap-1">
                                    <Image
                                        src={"/user-icon.svg"}
                                        width={20}
                                        height={20}
                                        alt="logo"
                                    />
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}