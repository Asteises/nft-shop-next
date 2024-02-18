import Image from "next/image"

export default function Page() {
    return (
        <>
            <div className="bg-gray-800">
                <Image
                    src={"/ntf-page-image.png"}
                    width={1280}
                    height={560}
                    alt="NTF"
                />
            </div>
            <div className="bg-gray-800 min-h-48 px-28 py-10">

                <div className="text-5xl text-white mb-3">The Orbitians</div>
                <div className="text-sm text-gray-500 mb-8">Minted on Sep 30, 2022</div>
                <div className="text-xl text-gray-500 mb-3">Created By</div>
                <div className="flex justify-start items-center gap-3 mb-8">
                    <Image
                        src={"/avatar-icon.svg"}
                        width={24}
                        height={24}
                        alt="avatar"
                    />
                    <div className="text-xl text-white">Orbitian</div>
                </div>
                <div className="text-xl text-gray-500 mb-3">Description</div>
                <div className="text-xl text-white mb-8 max-w-xl">
                    The Orbitians
                    is a collection of 10,000 unique NFTs on the Ethereum blockchain,There are all sorts of beings in the NFT Universe.
                    The most advanced and friendly of the bunch are Orbitians. They live in a metal space machines, high up in the sky and only have one foot on Earth.
                    These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations.
                    The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be.
                    Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
                </div>
                <div className="text-xl text-gray-500 mb-3">Details</div>
                <div className="flex justify-start items-center gap-3">
                    <Image
                        src={"/globe.svg"}
                        width={32}
                        height={32}
                        alt="globe"
                    />
                    <div className="text-xl text-white mb-3">View on Etherscan</div>
                </div>
                <div className="flex justify-start items-center gap-3 mb-8">
                    <Image
                        src={"/globe.svg"}
                        width={32}
                        height={32}
                        alt="globe"
                    />
                    <div className="text-xl text-white">View Original</div>
                </div>
                <div className="text-xl text-gray-500 mb-3">Tags</div>
                <div className="flex justify-start items-center gap-5">
                    <button className="text-sm text-white uppercase px-8 py-3 rounded-2xl bg-gray-700">Animation</button>
                    <button className="text-sm text-white uppercase px-8 py-3 rounded-2xl bg-gray-700">illustration</button>
                    <button className="text-sm text-white uppercase px-8 py-3 rounded-2xl bg-gray-700">moon</button>
                    <button className="text-sm text-white uppercase px-8 py-3 rounded-2xl bg-gray-700">moon</button>
                </div>
            </div>
        </>
    )
}