import logo from '../assets/logo.svg';
// import './App.css';
import { Container, Logo, Header, Link } from './App.styled';

export function App() {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </Header>
    </Container>
  );
}

export default App;
