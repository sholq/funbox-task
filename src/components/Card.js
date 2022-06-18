export default function Card({data}) {
  return (
    <div className="card">
      <div className="card__wrap">
        <div className="card__container">
          <div className="card__overview">
            <p className="card__epigraph">Сказочное заморское яство</p>
            <h2 className="card__header">{data.name}</h2>
            <p className="card__subheader">{data.taste}</p>
            {data.description.map((item, index) => {
              return <p className="card__description" key={index}>{item}</p>
            })}
          </div>
          <div className="card__weight">
            <p className="card__weight-value">{data.weight}</p>
            <p className="card__unit">кг</p>
          </div>
          <div className="card__image" />
        </div>
      </div>
      <p className="card__capture">
        Чего сидишь? Порадуй котэ, <span className="card__action">купи</span>.
      </p>
    </div>
  )
}