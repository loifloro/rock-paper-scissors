import { Dialog } from "radix-ui";
import rules from "./RulesModal.module.css";
import modal from "../Modal.module.css";

const className: CSSModuleClasses = {};
Object.assign(className, rules, modal);

export default function RulesModal() {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className={className.rules__btn}>Rules</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={className.modal__overlay} />
                <Dialog.Content
                    className={`${className.modal__content} ${className.rules__content}`}
                >
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
                    <Dialog.Close className={className.rules__close__mobile}>
                        <img src="/icon-close.svg" alt="Icon Close" />
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
