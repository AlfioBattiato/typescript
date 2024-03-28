import { Col, Container, Row } from "react-bootstrap";
import { ResultInterface } from "../interfaces/Article";
import { Link } from "react-router-dom";

interface MainProps {
  allArticle: ResultInterface[];
}

function Main(props: MainProps) {
  return (
    <Container>
      <h1 className="my-5">All articles:</h1>
      {props.allArticle.map((e) => (
        <Row className="border p-1 my-2 news" key={e.id}>
          <Col xs={12} md={3} style={{ height: "10rem" }}>
            <img
              src={e.image_url}
              alt="img"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          </Col>
          <Col xs={12} md={2}>
            <p>
              NewSite: <span className="fw-bold">{e.news_site}</span>{" "}
            </p>
          </Col>
          <Col xs={12} md={7} className="fs-semibold">
            <div className="row h-100">
              <p>pubblished at:<span className="fw-semibold"> {e.published_at}</span></p>
              <i>{e.title}</i>
              <Link to={`/details/?id=${e.id}`} className="fw-bold text-end">Read more...</Link>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
}
export default Main;
