import * as React from 'react';
import { Link } from 'react-router-dom';
import './about.scss';

export class About extends React.Component<{}, {}> {

  render() {
    return <div className="content">
      <header>
        <h1>New app</h1>
      </header>
      <section>
        About
      </section>
      <footer>
        <Link to="/">Home</Link>
      </footer>
    </div>;
  }
}
