import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  onSearchSubmit = async term => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: term }
      }
    );

    this.setState({
      images: response.data.results
    });

    // promise-based syntax ///
    // axios
    //   .get("https://api.unsplash.com/search/photos", {
    //     params: { query: term },
    //     headers: {
    //       Authorization:
    //         "Client-ID 1b4124b41a260ccf3bb73e1e8e2ba11b9a297d331ffefbe9405547d1eff6b3d5"
    //     }
    //   })
    //   .then(response => {
    //     console.log(response.data.results);
    //     this.setState({

    //     });
    //   });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
