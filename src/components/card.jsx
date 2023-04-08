import css from './card.module.css'

export function CardGrid({ data }){
  return <>
    <div className={css.container}>
      <p>Dane z dnia: {data.tradingDate}</p>
      <div className={css.wrapper}>
        {
          data.rates.map(value => <Card key={value.code} data={value} />)
        }
      </div>
    </div>

  </>
}

function Card({ data }){
  return <>
    <div className={css.card}>
      {/* Title */}
      <div className={css.card_title}>
        <span className={css.card_header}>{data.code}</span>
        <span>{data.currency}</span>
      </div>
      {/* Sell */}
      <div className={css.card_sell}>
        <span>Kurs sprzedaży</span>
        <span className={css.card_header}>{data.ask}</span>
      </div>
      {/* Buy */}
      <div className={css.card_buy}>
        <span>Kurs kupna</span>
        <span className={css.card_header}>{data.bid}</span>
      </div>
    </div>
  </>
}