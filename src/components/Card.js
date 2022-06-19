import {useState} from "react";

export default function Card({data}) {
  const [wasClicked, setWasClicked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isAvailable] = useState(data.isAvailable);

  const handleClick = () => {
    if (!wasClicked && !isSelected) {
      setWasClicked(() => !wasClicked);
    } else {
      setIsSelected(false);
      setWasClicked(false);
    }
  }

  const handleMouseOut = () => {
    if (wasClicked) {
      setIsSelected(true);
    }
  }

  return (
    <div className="card">
      <div className={"card__wrap" + ((isSelected) ? " card__wrap_selected" : "") + ((!isAvailable) ? " card__wrap_unavailable" : "")} onClick={(isAvailable) ? handleClick : undefined} onMouseLeave={(isAvailable && !isSelected) ? handleMouseOut : undefined}>
        <div className={"card__container" + ((!isAvailable) ? " card__container_unavailable" : "")}>
          <div className="card__overview">
            <p className={"card__epigraph" + ((!isAvailable) ? " card__epigraph_unavailable" : "")}>Сказочное заморское яство</p>
            <h2 className="card__header">{data.name}</h2>
            <p className="card__subheader">{data.taste}</p>
            {data.description.map((item, index) => {
              return <p className={"card__description" + ((!isAvailable) ? " card__epigraph_unavailable" : "")} key={index}>{item}</p>
            })}
          </div>
          <div className={"card__weight" + ((isSelected) ? " card__weight_selected" : "") + ((!isAvailable) ? " card__weight_unavailable" : "")}>
            <p className="card__weight-value">{data.weight}</p>
            <p className="card__unit">кг</p>
          </div>
          <div className={"card__image" + ((wasClicked) ? " card__image_clicked" : "")} />
        </div>
      </div>
      {(isAvailable) ? (
        (isSelected) ? (
          <p className="card__capture">
            {data.caption}
          </p>
        ) : (
          <p className="card__capture">
            Чего сидишь? Порадуй котэ, <span className="card__action" onClick={handleClick}  onMouseLeave={handleMouseOut}>купи</span>.
          </p>
        )
      ) : (
        <p className="card__capture card__capture_unavailable">
          Печалька, {data.taste} закончился.
        </p>
      )}
    </div>
  )
}