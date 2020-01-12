import React from "react";
import { Button, Header, Image } from "semantic-ui-react";
import UnsplashService from "../services/Unsplash";
import axios from "axios";

class PopularImage extends React.Component {
  state = { src: null };

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    UnsplashService(this.props.categoty).then(response => {
      this.setState({ src: response.data.results[0].urls.small });
      console.log(response.data.results[0]);
    });
  };

  render() {
    return (
      <div>
        <Image centered rounded size="small" src={this.state.src} />
        <Header as="h1">Heading</Header>
        <p>
          Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
          Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo
          risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
          cursus magna.
        </p>
        <Button basic>View details &raquo;</Button>
      </div>
    );
  }

  
}

export default PopularImage;
