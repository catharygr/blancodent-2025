import styles from "./PeerTube.module.css";
// IMPORTANT, PARA MARGIN VERTICAL USAR EL CSS DE PADRE PARA PASAR MARGEN COMO PROPS...

interface PeerTubeProps {
  url: string;
  aspRatio: number;
  title: string;
  classForMargin: string;
}

export default function PeerTube({
  url,
  aspRatio,
  title,
  classForMargin,
}: PeerTubeProps) {
  return (
    <div
      id="peertube"
      className={`${styles.peerTube} ${classForMargin}`}
    >
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
