import { Selection } from "@components/selection";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { usePick } from "@stores/usePick";

export default function App() {
    const { hasUserPick } = usePick();

    return (
        <>
            <Header />
            <main>{!hasUserPick() && <Selection />}</main>
            <Footer />
        </>
    );
}
