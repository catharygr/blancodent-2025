import styles from "./PeerTube.module.css";

interface PeerTubeProps {
  url: string;
  aspRatio: number;
  title: string;
}

export default function PeerTube({ url, aspRatio, title }: PeerTubeProps) {
  return (
    <div className={`${styles.container}`}>
      <iframe
        className={styles.iFrame}
        style={{ aspectRatio: aspRatio }}
        src={url}
        title={title}
        allow="fullscreen"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      ></iframe>
    </div>
  );
}
