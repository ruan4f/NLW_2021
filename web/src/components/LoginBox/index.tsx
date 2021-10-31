import styles from './styles.module.scss';

export function LoginBox() {
  return (
    <div className={styles.contentWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href="#" className={styles.signInWithgithub}></a>
    </ div>
  )
}