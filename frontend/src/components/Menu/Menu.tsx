"use client";

import { Button } from "components/Button";
import styles from "./Menu.module.scss";
import { useEffect, useState } from "react";
import { Card } from "components/Card";
import { CoffeeEntity, CoffeeType } from "types/Coffee";

interface MenuI {
  coffeeItems?: CoffeeEntity[];
}

export const Menu = ({ coffeeItems }: MenuI) => {
  const [selection, setSelection] = useState(1);
  const [filtered, setFiltered] = useState<CoffeeEntity[]>([]);

  useEffect(() => {
    let update = coffeeItems ?? [];
    if (selection === 2) {
      update = update.filter((item) => item.type === ("Robusta" as CoffeeType));
    } else if (selection === 3) {
      update = update.filter((item) => item.type === ("Arabic" as CoffeeType));
    }
    setFiltered(update);
  }, [coffeeItems, selection]);

  return (
    <div className={styles.menuContainer}>
      <h2>MVST. EXCLUSIVE COFFEE</h2>

      <div className={styles.buttonGroup}>
        <div className={styles.buttonBG}>
          <Button
            text="All"
            styling={
              selection === 1 ? styles.activeButtonFilter : styles.buttonFilter
            }
            onClick={() => setSelection(1)}
          />
          <Button
            text="Robusta"
            styling={
              selection === 2 ? styles.activeButtonFilter : styles.buttonFilter
            }
            onClick={() => setSelection(2)}
          />
          <Button
            text="Arabic"
            styling={
              selection === 3 ? styles.activeButtonFilter : styles.buttonFilter
            }
            onClick={() => setSelection(3)}
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          {filtered.map((item) => (
            <div key={item.id} className="col">
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
