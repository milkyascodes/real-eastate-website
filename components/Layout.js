import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Real Estate</title>
            </Head>
            <Box maxW='1200px' margin='auto'>
                <header>
                    <Navbar />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>

            </Box>
        </>
    );
}

export default Layout;