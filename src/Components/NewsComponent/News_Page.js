import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Button } from "react-bootstrap";
import "./News.css";
// token 98e6762e20bbd7ef59d7f8c683692593
class News_Page extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      error: "",
      posts: [],
    };
  }
  // submitChange = (e) => {
  //   this.setState({
  //     search: e.target.value,
  //   });
  // };
  submitbutton = (e) => {
    e.preventDefault();
    const Search = e.target.Search.value;
    const top_news =
      "https://gnews.io/api/v3/top-news?token=98e6762e20bbd7ef59d7f8c683692593";
    const URL = `https://gnews.io/api/v3/search?q=${Search}&token=98e6762e20bbd7ef59d7f8c683692593`;
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data.articles);
        this.setState({ posts: response.data.articles });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: "error" });
      });
  };

  componentDidMount() {
    const URL = `https://gnews.io/api/v3/search?q=India&token=98e6762e20bbd7ef59d7f8c683692593`;
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data.articles);
        this.setState({ posts: response.data.articles });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: "Rendering error retrieving data" });
      });
  }
  render() {
    const { posts, error } = this.state;
    return (
      <>
        <div>
          <form onSubmit={this.submitbutton}>
            <input
              type="text"
              placeholder="Search"
              name="Search"
              // onChange={this.submitChange}
            />
            <button className="btn">Search</button>
          </form>
        </div>
        <CardDeck
          className="CardDeck"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {posts.map((post) => (
            <div
              className="OCard"
              style={{
                width: "350px",
                height: "690px",
                position: "relative",
                boxShadow: "6px 8px silver",
              }}
            >
              <Card className="cardstyle">
                <Card.Img variant="top" src={post.image} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Last updated {post.publishedAt}
                  </small>
                </Card.Footer>
                <div className="btndiv">
                  <Button variant="primary" href={post.url}>
                    Read More
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </CardDeck>
      </>
    );
  }
}
export default News_Page;
