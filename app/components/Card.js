import React, { useEffect, useState } from "react";
import Image from 'next/image';
import styles from '../styles/Card.module.css'
import { useRouter } from 'next/router';

export default function Card(props) {
    const router = useRouter()
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        console.log(selected);
    }, [selected])

    const gotoproductpage = (name) => {
        router.push('/[productname]/', `${name}`);
    }

    return (
        <div className={styles.cardcontainer}>
            <h4 className={styles.h4}>{props.title}</h4>
            <div className={styles.inside}>
                <Image width="100%" height="100%" src={props.image} alt=""/>
                <p>{props.desc}</p>
                <p><span>{props.price} euros</span></p>
                <button className={styles.buy} onClick={() => {
                    setSelected(props); 
                    localStorage.setItem('selected_product', (JSON.stringify(props)));
                    gotoproductpage(props.title);
                    }
                }>Acheter</button>
            </div>
        </div>
    )
}