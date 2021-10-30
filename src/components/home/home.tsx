import * as React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

export class Home extends React.Component<{}, {}> {

  render() {
    return <div className="content">
      <header>
        <h1>New app</h1>
      </header>
      <section>
        Home
      </section>
      <footer>
        <Link to="/About">About</Link>
      </footer>
    </div>;
  }
}
