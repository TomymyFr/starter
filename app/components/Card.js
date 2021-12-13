import React from "react";
import Image from 'next/image';
import styles from '../styles/Card.module.css'

export default function Card(props) {
    return (
        <div className={styles.cardcontainer}>
            <h4 className={styles.h4}>{props.title}</h4>
            <Image width="100%" height="100%" src={props.image} alt=""/>
            <p>{props.desc}</p>
            <p className={styles.prices}>{props.price} euros</p>
        </div>
    )
}