class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
    }
  }

  componentDidMount() {
    fetch('./menus.json')
      .then((response) => {
        return response.json();
      }).then((menus) => {
        this.setState({
          menus: menus,
        })
      });
  }

  render() {
    return (
      <div>
        {this.state.menus.map((v,i) => {
          return <div key={i}><Link label={v}/></div>
        })}
      </div>
    )
  }
}

class Link extends React.Component {
  render() {
    const url='/'
      + this.props.label
        .toLowerCase()
        .trim()
        .replace(' ', '-')
    return <div>
      <a href={url}>
      {this.props.label}
      </a>
      <br/>
    </div>
  }
}

ReactDOM.render(<Menu />, document.getElementById('menu'))
