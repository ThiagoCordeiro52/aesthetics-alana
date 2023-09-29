import styles from "./Avatar.module.css";

interface AvatarProps {
  filepath: string;
}

export function Avatar({ filepath }: AvatarProps) {
  return (
    <div className={styles.profile}>
      <img
        src={filepath}
        alt="Foto de Rute séria, maquiada, usando jaleco branco, fundo parede branca."
      />
      <p>@alanalimaas</p>
    </div>
  );
}
