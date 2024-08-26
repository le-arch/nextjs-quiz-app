import './globals.css';
import {useAuth} from '../hooks/useAuth'
import type { AppProps } from 'next/app';
import Layout from './components/Layout';
import ErrorBoundary from '../components/ErrorBoundary';
function MyApp({ Component, pageProps }: AppProps) {
    useAuth();
  return (
    <ErrorBoundary>
       <Layout>
          <Component {...pageProps} />
       </Layout>
  </ErrorBoundary>
  );
}

export default MyApp;