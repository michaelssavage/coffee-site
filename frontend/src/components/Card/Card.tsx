"use client";

import React, { CSSProperties, useState } from "react";
import { CoffeeEntity } from "types/Coffee";
import styles from "./Card.module.scss";
import Image from "next/image";
import { Button } from "components/Button";

type Props = {
  item: CoffeeEntity;
};

export const Card = ({ item }: Props) => {
  const [imgSrc, setImgSrc] = useState(item.imageUrl);

  return (
    <div className={styles.card}>
      <Image
        src={imgSrc}
        width={200}
        height={150}
        alt={item.name}
        onErrorCapture={() => {
          setImgSrc("/coffee.png");
        }}
      />
      <Button text={item.type} />
      <h3 className="poppins">{item.name}</h3>
      <p className={styles.description}>{item.description}</p>
      <p className={styles.price}>€{item.price.toFixed(2)}</p>
    </div>
  );
};
