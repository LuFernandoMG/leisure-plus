import { Show } from "@/utils/types";
import styles from "./page.module.scss";
import Showcase from "@/components/ShowcaseSeries";
import { getGenresList } from "@/utils/getGenres";
import { fetchData } from "@/utils/fetchData";
import Modal from "@/components/Modal";

type genreElement = {
  id: number;
  name: string;
};

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

const Page: React.FC<SearchParamProps> = async ({ searchParams }) => {
  const show = searchParams?.show;
  const type = searchParams?.type;
  const id = searchParams?.id;
  const genresList: genreElement[] = await getGenresList("tv");
  let showsByGenre: Record<string, Show[]> = {};

  await Promise.all(
    genresList.map(async (genre: genreElement) => {
      const shows = await fetchData({
        endpoint: `/discover/tv?with_genres=${genre.id}&adult=false`,
      });

      showsByGenre = {
        ...showsByGenre,
        [genre.name]: shows.results,
      };
    })
  );

  return (
    <div className={styles.movies__container}>
      <h1>Shows</h1>
      <Showcase data={showsByGenre} />
      {show && type && id && <Modal type={type} id={id} root="/series" />}
    </div>
  );
};

export default Page;
