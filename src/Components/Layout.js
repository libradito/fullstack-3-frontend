import { Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <Header title="Librado"></Header>
            <Container fixed>
                <main>{children}</main>
            </Container>
            <Footer />

        </>
    )
}