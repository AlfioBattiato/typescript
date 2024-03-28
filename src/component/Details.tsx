import { useEffect, useState } from "react";
import { SingleArticle } from "../interfaces/Article";
import { Container } from "react-bootstrap";

function Details() {
  const id = new URLSearchParams(window.location.search).get("id");

  const [article, setArticle] = useState<SingleArticle>();

  const fetchArticle = function () {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/" + id)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("problema nella chiamata API");
        }
      })
      .then((element) => {
        console.log(element);
        setArticle(element);
      })
      .catch((e) => console.log("ERRORE", e));
  };

  useEffect(() => {
    fetchArticle();
  }, []);
  return (
    <>
    
        <img
          src={article?.image_url}
          alt="img"
          style={{ height: "30rem", width: "100%", objectFit: "cover" }}
        ></img>
      <Container className="my-1">
        <h1>{article?.title}</h1>
        <h3>{article?.news_site}</h3>
        <p>{article?.published_at}</p>
        <p>{article?.summary}</p>
       <p>continua sul sito di:<a href={article?.url}> {article?.news_site}</a></p>
      </Container>
    </>
  );
}
export default Details;
