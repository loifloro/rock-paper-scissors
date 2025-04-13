import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Revelation } from "@components/revelation";
import { Selection } from "@components/selection";
import { usePick } from "@stores/usePick";

export default function App() {
    const { userPick } = usePick();

    return (
        <>
            <Header />
            <main>
                {!userPick && <Selection />}
                {userPick && <Revelation />}
            </main>
            <Footer />
        </>
    );
}
