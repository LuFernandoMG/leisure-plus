import styles from "./Featured.module.scss";

interface FeaturedProps {
  switchSides: boolean;
  videoUrl: string;
  children: React.ReactNode;
}

const Featured: React.FC<FeaturedProps> = ({
  switchSides,
  videoUrl,
  children,
}) => {
  return (
    <div className={styles.featured}>
      {switchSides ? (
        <>
          <div className={styles.featured__info}>{children}</div>
          <div className={styles.featured__video}>
            <iframe
              width="560"
              height="315"
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </>
      ) : (
        <>
          <div className={styles.featured__video}>
            <iframe src={videoUrl} title="Featured Video" allowFullScreen />
          </div>
          <div className={styles.featured__info}>{children}</div>
        </>
      )}
    </div>
  );
};

export default Featured;
