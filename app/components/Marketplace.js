import React, { useState, useEffect } from 'react';
import styles from '../styles/Marketplace.module.css';
import Card from './Card';

export default function Marketplace() {
    const [user, setUser] = useState(null);
    return (
        <div className={styles.marketcontainer}>
            <h3 className={styles.title}>NFT Marketplace</h3>
            <div className={styles.cardposition}>
                <Card title="NFT 1"
                    image="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    desc="Nft n°12232323" price="30" />
                <Card title="NFT 2"
                    image="https://images.unsplash.com/photo-1545989253-02cc26577f88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTYwNDg4NXx8ZW58MHx8fHw%3D&dpr=2&auto=format&fit=crop&w=294&q=60"
                    desc="Nft n°12376239" price="20" />
                <Card title="NFT 3"
                    image="https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    desc="Nft n°91729323" price="10" />
                <Card title="NFT 4"
                    image="https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    desc="Nft n°99733833" price="40" />
                <Card title="NFT 5"
                    image="https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    desc="Nft n°99328833" price="430" />
                <Card title="NFT 6"
                    image="https://images.unsplash.com/photo-1453347626867-caa5a69374db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDY0MzE1NXx8ZW58MHx8fHw%3D&dpr=2&auto=format&fit=crop&w=294&q=60"
                    desc="Nft n°2DEDE8833" price="3923" />
                <Card title="NFT 7"
                    image="https://images.unsplash.com/photo-1570393080660-de4e4a15a247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    desc="Nft n°Y23EYEYE" price="4000" />
            </div>
        </div>
    )
}