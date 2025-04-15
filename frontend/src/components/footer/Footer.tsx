import { Dialog } from "radix-ui";
import className from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={className.footer}>
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
                            <Dialog.Close
                                className={className.rules__close__desktop}
                            >
                                <img src="/icon-close.svg" alt="Icon Close" />
                            </Dialog.Close>
                        </div>
                        <div className={className.rules__img}>
                            <img src="/image-rules.svg" />
                        </div>
                        <Dialog.Close
                            className={className.rules__close__mobile}
                        >
                            <img src="/icon-close.svg" alt="Icon Close" />
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </footer>
    );
}
