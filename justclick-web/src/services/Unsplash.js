import React from "react";
import axios from "axios";

export default async (categoty)  => {
    return  await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: categoty
      },
      headers: {
        Authorization:
          "Client-ID 5e5489a2570009004b14ca4e85b42a9c53dd4c20bc79191655a48c14ee880f64"
      }
    });

  };

