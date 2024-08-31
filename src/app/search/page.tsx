import { Show, Movie } from "@/utils/types";
import styles from "./page.module.scss";
import Card from "@/components/Card";
import { fetchData } from "@/utils/fetchData";
import Modal from "@/components/Modal";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

const Page: React.FC<SearchParamProps> = async ({ searchParams }) => {
  const show = searchParams?.show;
  const type = searchParams?.type;
  const id = searchParams?.id;
  const query = searchParams?.query;

  const searchResults = await fetchData({
    endpoint: `/search/multi?query=${query}&include_adult=false`,
  });

  return (
    <div className={styles.container}>
      <h1>Search</h1>
      {searchResults.results.length > 0 ? (
        <div className={styles.results__grid}>
          {searchResults.results.map((element: Movie | Show) => (
            <Card element={element} key={element.id} clean root="/search" />
          ))}
        </div>
      ) : (
        <h2>No results found</h2>
      )}
      {show && type && id && <Modal type={type} id={id} root="/series" />}
    </div>
  );
};

export default Page;
