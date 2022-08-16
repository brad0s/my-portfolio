import * as React from 'react';
import { Helmet } from 'react-helmet';
import { headData } from '../data/data';
import App from '../components/App';
import '../styles/main.scss';
import { ThemeContextProvider } from '../context/ThemeContext';

// markup
const IndexPage = () => {
  const { title, lang, description, image } = headData;
  return (
    <>
      <ThemeContextProvider>
        <Helmet>
          <meta charSet='utf-8' />
          <title>{title}</title>
          <html lang={lang} />
          <meta name='description' content={description} />
          <meta name='image' content={image} />
        </Helmet>
        <App />
      </ThemeContextProvider>
    </>
  );
};

export default IndexPage;
