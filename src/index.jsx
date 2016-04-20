import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';


class SearchApp extends React.Component {
  constructor(){
    super();
    this.state={
      searchText: ''
    };
  }

  handleUserInput(searchTerm){
    this.setState({searchText:searchTerm})
  }

  render() {
    return (
      <div>
        <SearchBox searchText={this.state.searchText}
                   onUserInput={this.handleUserInput.bind(this)} />
        <SearchResults results={this.props.results}
                       searchText={this.state.searchText} />
      </div>
    )
  }
}
SearchApp.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object)
}


class SearchBox extends React.Component {
  handleChange(event){
    this.props.onUserInput(event.target.value)
  }

  render() {
    return (
      <input type="search" placeholder="Search"
             value={this.props.searchText}
             onChange={this.handleChange.bind(this)} />
    );
  }
}

SearchBox.propTypes = {
  onUserInput: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired
}

class SearchResults extends React.Component {
  render() {
    let filteredContacts = this.props.results.filter(
      (result) => result.title.indexOf(this.props.searchText) !== -1
    );
    return (
      <ul>
        {filteredContacts.map(
          (item) => <SearchResultItem key={item.id}
                                      id={item.id}
                                      title={item.title} />
        )}
      </ul>
    )
  }
}
SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object)
}

class SearchResultItem extends React.Component {
  render() {
    return (
      <li>{this.props.id} - {this.props.title}</li>
    )
  }
}
SearchResultItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

let results = [
  { id: '1', title: 'Colorless green ideas sleep furiously'},
  { id: '2', title: 'Furiously sleep ideas green colorless'}
]


ReactDOM.render(
  <SearchApp results={results} />,
  document.getElementById("container")
)
