import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';


class SearchApp extends React.Component {
  render() {
    return (
      <div>
        <SearchBox />
        <SearchResults />
      </div>
    );
  }
}
SearchApp.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object)
}


class SearchBox extends React.Component {
  render() {
    return (
      <input type="search" placeholder="Search" />
    );
  }
}


class SearchResults extends React.Component {
  render() {
    return (
      <ul>
        {this.props.results.map(
          (result) => <SearchResultItem key={result.id}
                                        name={result.title} />
        )}
      </ul>
    )
  }
}
SearchResults.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

let results = [
  { id: 1, title: 'Colorless green ideas sleep furiously'},
  { id: 2, title: 'Furiously sleep ideas green colorless'}
]

class SearchResultItem extends React.Component {
  render() {
    return (
      <li>{this.prop.id} - {this.prop.title}</li>
    )
  }
}


ReactDOM.render(<SearchApp />, document.getElementById("container"))
