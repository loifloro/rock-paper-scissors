import { Dialog } from "radix-ui";
import className from "./Footer.module.css";

export default function Footer() {
    return (
        <footer>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <button className={className.rules__btn}>Rules</button>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className={className.rules__overlay} />
                    <Dialog.Content className={className.rules__content}>
                        <div className={className.rules__header}>
                            <Dialog.Title className={className.rules__title}>
                                Rules
                            </Dialog.Title>
                            <Dialog.Close>
                                <img src="/icon-close.svg" alt="Icon Close" />
                            </Dialog.Close>
                        </div>
                        <div className={className.rules__img}>
                            <img src="/image-rules.svg" />
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </footer>
    );
}
