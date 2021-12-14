import React, { useEffect, useState } from "react";
import Image from 'next/image';
import styles from '../styles/Card.module.css'

export default function Card(props) {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        console.log(selected);
    }, [selected])

    return (
        <div className={styles.cardcontainer}>
            <h4 className={styles.h4}>{props.title}</h4>
            <div className={styles.inside}>
                <Image width="100%" height="100%" src={props.image} alt=""/>
                <p>{props.desc}</p>
                <p><span>{props.price} euros</span></p>
                <button className={styles.buy} onClick={() => setSelected(props)}>Acheter</button>
            </div>
        </div>
    )
}