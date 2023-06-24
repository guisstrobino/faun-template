import "../styles/global.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { AppProps } from "next/app";
import { AppProvider } from "../contexts/AppContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AppProvider>
            <Component {...pageProps} />
        </AppProvider>
    );
}

export default MyApp;
