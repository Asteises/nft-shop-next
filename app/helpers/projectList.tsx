import { StaticImageData } from "next/image"
import nftImage1 from "/public/image-1.png"

import React from 'react';

interface DiscoverProps {
    name: string;
    title: string;
    price: string;
    image: StaticImageData;
}

const Discover: React.FC<DiscoverProps> = (DiscoverProps) => {
    return (
        <div>
            <img src={DiscoverProps.image.src} alt={DiscoverProps.title} />
            <h2>{DiscoverProps.title}</h2>
            <p>{DiscoverProps.name}</p>
            <p>{DiscoverProps.price}</p>
        </div>
    );
};

export default Discover;

const nfts: DiscoverProps[] = [
    {
        title: "Distant Galaxy",
        name: "MoonDancer",
        price: "1.63 ETH",
        image: nftImage1
    },
    {
        title: "Life On Edena",
        name: "MoonDancer",
        price: "1.63 ETH",
        image: nftImage1
    },
]

export { nfts };