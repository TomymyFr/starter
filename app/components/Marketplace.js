import React, { useState, useEffect } from 'react';
import styles from '../styles/Marketplace.module.css';
import Card from './Card';

export default function Marketplace() {
    const [user, setUser] = useState(null);
    return (
        <div className={styles.marketcontainer}>
            <h3>NFT Marketplace</h3>
            <div className={styles.cardposition}>
                <Card title="NFT 1"
                    image="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    desc="Nft n°12232323" price="20" />
                <Card title="NFT 2"
                    image="https://images.unsplash.com/photo-1545989253-02cc26577f88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTYwNDg4NXx8ZW58MHx8fHw%3D&dpr=2&auto=format&fit=crop&w=294&q=60"
                    desc="Nft n°12232323" price="20" />
                <Card title="NFT 3"
                    image="https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    desc="Nft n°12232323" price="20" />
                <Card title="NFT 4"
                    image="https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    desc="Nft n°12232323" price="20" />
            </div>
        </div>
    )
}