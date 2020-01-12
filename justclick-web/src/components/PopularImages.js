import React from "react";
import { Grid } from "semantic-ui-react";
import PopularImage from "./PopularImage";

class PopularImages extends React.Component {
  render() {
    return (
      <Grid container stackable textAlign="center" columns={3}>
        <Grid.Column>
          <PopularImage  categoty ="mountain" />
        </Grid.Column>
        <Grid.Column>
          <PopularImage categoty ="flower" />
        </Grid.Column>
        <Grid.Column>
          <PopularImage categoty ="mountain" />
        </Grid.Column>
      </Grid>
    );
  }
}

export default PopularImages;
