import {Fragment} from 'react';
import { Link, Outlet } from 'react-router-dom';

function Main(): JSX.Element {
  return (
    <Fragment>
      <p>Welcome to my homepage.</p>
      <p>Alaska rocks!</p>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem'
        }}
      >
        <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </Fragment>

  );
}

export default Main;
