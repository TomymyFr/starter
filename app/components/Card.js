import React from "react";
import Image from 'next/image';
import styles from '../styles/Card.module.css'

export default function Card(props) {
    return (
        <div className={styles.cardcontainer}>
            <p>{props.title}</p>
            <Image width="100%" height="100%" src={props.image} alt=""/>
            <p>{props.desc}</p>
            <p>{props.price} euros</p>
        </div>
    )
}