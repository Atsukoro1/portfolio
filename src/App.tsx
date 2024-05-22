import { Navbar } from './components/organisms/Navbar';
import { Header } from './components/organisms/Header';
import { Experience } from './components/organisms/Experience';
import { Wrapper } from './components/molecules/Wrapper';
import { TransProvider } from '@mbarzda/solid-i18next';

import cz from "./locales/cz.json";
import en from "./locales/en.json";

const resources = {
  en: {
    translation: en
  },
  cz: {
    translation: cz
  }
}

export const App = () => {
  return (
    <TransProvider options={{ resources }} lng="cz">
      <Wrapper>
        <Navbar />

        <section>
          <Header />
          <Experience />
        </section>
      </Wrapper>
    </TransProvider>
  )
};
