import styles from './card.module.css'

interface CardPrompts {
  prompt: string;
}

const Card: React.FC<CardPrompts> = ({ prompt }) => {
  return (
    <div className={styles.Card}>
      {prompt}
    </div>
  )
}
export default Card