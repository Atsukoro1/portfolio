import { Navbar } from './components/organisms/Navbar';
import { Header } from './components/organisms/Header';
import { Experience } from './components/organisms/Experience';
import { Wrapper } from './components/molecules/Wrapper';

const App = () => {
  return (
    <Wrapper>
      <Navbar />

      <section>
        <Header />
        <Experience />
      </section>
    </Wrapper>
  )
};

export default App;
