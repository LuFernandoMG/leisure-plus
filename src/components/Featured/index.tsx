import Image from "next/image";
import { fetchData } from "@/utils/fetchData";
import styles from "./Featured.module.scss";

interface FeaturedProps {
  switchSides?: boolean;
  videoUrl: string;
  children?: React.ReactNode;
  videoTitle: string;
}

const Featured: React.FC<FeaturedProps> = async ({
  switchSides,
  videoUrl,
  videoTitle,
  children,
}) => {
  const HPCollection = await fetchData({ endpoint: "/collection/1241" });

  return (
    <div className={styles.featured}>
      {switchSides ? (
        <>
          <div className={styles.featured__info}>
            <q>A Fantasy World of Strange Feuding Kingdoms</q>
            <p>
              Explore the worlds of George R. R. Martin and reconnect with those
              stories that has been in mouth of everyone for the last decade!
            </p>
            {children}
          </div>
          <div className={styles.featured__video}>
            <iframe
              width="560"
              height="315"
              src={videoUrl}
              title={videoTitle}
            />
          </div>
        </>
      ) : (
        <>
          <div className={styles.featured__video}>
            <div>
              <h3>Rediscover the Wizardry inside you!</h3>
              <q>
                It matters not what someone is born, but what they grow to be. ―
                Albus Dumbledore.
              </q>
            </div>
            <iframe
              src={videoUrl}
              width="560"
              height="315"
              title={videoTitle}
              allowFullScreen
            />
          </div>
          <div className={styles.featured__info}>
            <div className={styles.featured_HP__info}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${HPCollection.poster_path}`}
                alt="Harry Potter"
                width={300}
                height={500}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
