import { api } from "../../services/api";
import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';
import { useEffect } from "react";

export function MessageList() {
  useEffect(() => {
    api.get('messages/last3').then(response => {
      console.log(response.data);
    })
  }, [])

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos!</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/diego3g.png" alt="Diego Fernandes" />
            </div>
            <span>Diego fernandes</span>

          </div>
        </li>
      </ul>
    </div>
  )
}