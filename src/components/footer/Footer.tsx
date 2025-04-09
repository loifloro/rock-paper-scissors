import { Dialog } from "radix-ui";
import footer from "./Footer.module.css";

export default function Footer() {
    return (
        <footer>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <button className={footer.rules__btn}>Rules</button>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className={footer.rules__overlay} />
                    <Dialog.Content className={footer.rules__content}>
                        hi
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </footer>
    );
}
