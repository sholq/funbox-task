import {cards} from "../data/cards";
import Card from "./Card";

export default function List() {
  return (
    <ul className="list">
      {cards.map((card, index) => {
        return (
          <li className="list__item">
            <Card data={card} key={index}/>
          </li>
        )
      })}
    </ul>
  )
}