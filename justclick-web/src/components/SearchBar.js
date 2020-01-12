import React, { Component } from "react";
import {
  Button,
  Grid,
  Form
} from "semantic-ui-react";

class SearchBar extends Component {
  render() {
    return (
      <Grid container stackable textAlign="left" columns={3}>
        <Form success>
          <Form.Input label="Search " placeholder="car" />
          <Button>Submit</Button>
        </Form>
      </Grid>
    );
  }
}

export default SearchBar;
