import "/node_modules/flag-icons/css/flag-icons.min.css";
import cz from "./locales/cz.json";
import en from "./locales/en.json";

import { TransProvider } from '@mbarzda/solid-i18next';

import { Wrapper } from '@molecules/Wrapper';
import { Navbar } from '@organisms/Navbar';
import { Header } from '@organisms/Header';
import { Experience } from '@organisms/Experience';

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
    <TransProvider options={{ resources, fallbackLng: "en" }}>
      <Wrapper>
        <Navbar />

        <section class="flex flex-col gap-5">
          <Header />
          <Experience />
        </section>
      </Wrapper>
    </TransProvider>
  )
};
