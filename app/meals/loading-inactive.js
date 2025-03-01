import s from './loading.module.css';

export default function LoadingInactive() {
  return (
    <p className={s.loading}>Fetching data...</p>
  )
}