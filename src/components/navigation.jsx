import css from './navigation.module.css'
import { ProgressBar } from './progressBar'

export function Navigation({ status, otherDate }){
  return <>
    <div className={css.container}>
      {
        status === "requesting" && <ProgressBar />
      }
      <span className={css.title}>NBP - Kursy Walut</span>
      {
        status === 'requesting'
        ? <span className={css.status} style={{color: 'blue'}}>Pobieranie danych</span>
        : status === 'ok'
        ? <span className={css.status} style={{color: 'green'}}>Pobrano</span>
        : <span className={css.status} style={{color: 'red'}}>Wystąpił błąd</span>
      }
    </div>
    {
      otherDate && <>
        <div className={css.date_info_container}>
          <span style={{color: 'yellow', fontSize: '2rem'}}>⚠</span>
          Strona wyświetla dane z dnia {otherDate} z powodu braku informacji z dzisiejszego dnia
        </div>
      </>
    }
  </>
}