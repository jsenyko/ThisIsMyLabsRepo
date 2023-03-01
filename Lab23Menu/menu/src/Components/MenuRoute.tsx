import { useState } from "react";
import menu from "../data/menu";
import { Item } from "../models/item";
import { BasicItem } from "./BasicItem";

export function MenuRoute () {
    const [items] = useState<Item[]>(menu);
  return (
    <div>
      { items.map((item) => <BasicItem item={item} />) }
    </div>
  );
}
