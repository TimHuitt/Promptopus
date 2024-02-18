import styles from './Card.module.css'

interface CardPrompts {
  prompt: string;
}

const Card: React.FC<CardPrompts> = ({ prompt }) => {
  return (
    <div className={styles.Card}>
      <h1 dangerouslySetInnerHTML={{ __html: prompt }} />
    </div>
  )
}
export default Card