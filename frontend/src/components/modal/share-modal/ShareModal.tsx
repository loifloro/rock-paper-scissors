import { Dialog, Tooltip } from "radix-ui";
import { useSearchParams } from "react-router";
import { useSocket } from "@stores/useSocket";
import { useState } from "react";
import { v4 } from "uuid";
import modal from "../Modal.module.css";
import share from "./ShareModal.module.css";
import {
    IconBrandTelegram,
    IconBrandWhatsapp,
    IconBrandX,
    IconMail,
} from "@tabler/icons-react";

const className: CSSModuleClasses = {};
Object.assign(className, share, modal);

export default function ShareModal() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [opponentId] = useState<string>(searchParams.get("o") ?? v4());
    const [roomId] = useState<string>(searchParams.get("s") ?? v4());
    const [playerId] = useState<string>(searchParams.get("p") ?? v4());
    const socket = useSocket((state) => state.socket);

    const [isCopied, setIsCopied] = useState(false);

    const shareLink = new URL(
        `${import.meta.env.VITE_SITE_URL}/?o=${playerId}%26s=${roomId}%26p=${opponentId}`
    );

    const handleInvitation = () => {
        setSearchParams((prev) => [
            ...prev.entries(),
            ["o", opponentId],
            ["s", roomId],
            ["p", playerId],
        ]);

        socket.emit("join room", {
            room: roomId,
            player: playerId,
            opponent: opponentId,
        });
    };

    const handleCopyShareLink = () => {
        navigator.clipboard.writeText(
            `${import.meta.env.VITE_SITE_URL}/?o=${playerId}&s=${roomId}&p=${opponentId}`
        );

        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button
                    className={className.share__btn}
                    onClick={handleInvitation}
                >
                    Invite Opponent
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={className.modal__overlay} />
                <Dialog.Content
                    className={`${className.modal__content} ${className.share__content}`}
                >
                    <div className={className.share__header}>
                        <Dialog.Title className={className.share__title}>
                            Invite Opponent
                        </Dialog.Title>
                        <Dialog.Close
                            className={className.share__close__desktop}
                        >
                            <img src="/icon-close.svg" alt="Icon Close" />
                        </Dialog.Close>
                    </div>
                    <div className={className.share__links}>
                        <div className={className.share__icons}>
                            <a
                                href={`https://t.me/share/url?url=${shareLink}&text=Play%20Rock%20Paper%20Scissors`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${className.share__link__item} ${className.share__link__telegram}`}
                            >
                                <div>
                                    <IconBrandTelegram
                                        className={className.share__icon}
                                    />
                                </div>
                            </a>
                            <a
                                href={`https://wa.me/?text=${shareLink}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${className.share__link__item} ${className.share__link__whatsapp}`}
                            >
                                <div>
                                    <IconBrandWhatsapp
                                        className={className.share__icon}
                                    />
                                </div>
                            </a>
                            <a
                                href={`https://x.com/intent/post?text=Play%20Rock%20Paper%20Scissors!%20${shareLink}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${className.share__link__item} ${className.share__link__twitter}`}
                            >
                                <div>
                                    <IconBrandX
                                        className={className.share__icon}
                                    />
                                </div>
                            </a>
                            <a
                                href={`mailto:?subject=Play%20Rock%20Paper%20Scissors!&body=A%20user%20invited%20you%20play%20Rock%20Paper%20Scissors%20on%20this%20link!%0A%0A${shareLink}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${className.share__link__item} ${className.share__link__mail}`}
                            >
                                <div>
                                    <IconMail
                                        className={className.share__icon}
                                    />
                                </div>
                            </a>
                        </div>
                        <div className={className.share__link}>
                            <label
                                className={className.share__link__label}
                                htmlFor="shareLink"
                            >
                                or copy this link
                            </label>
                            <div className={className.share__link__container}>
                                <input
                                    type="text"
                                    name="shareLink"
                                    className={className.share__link__input}
                                    readOnly
                                    value={shareLink.toString()}
                                />
                                <Tooltip.Provider>
                                    <Tooltip.Root open={isCopied}>
                                        <Tooltip.Trigger asChild>
                                            <button
                                                onClick={handleCopyShareLink}
                                                className={
                                                    className.share__link__btn
                                                }
                                            >
                                                Copy
                                            </button>
                                        </Tooltip.Trigger>
                                        <Tooltip.Portal>
                                            <Tooltip.Content
                                                className={
                                                    className.tooltip__content
                                                }
                                                sideOffset={5}
                                            >
                                                Link Copied
                                                <Tooltip.Arrow
                                                    className={
                                                        className.tooltip__arrow
                                                    }
                                                />
                                            </Tooltip.Content>
                                        </Tooltip.Portal>
                                    </Tooltip.Root>
                                </Tooltip.Provider>
                            </div>
                        </div>
                    </div>
                    <Dialog.Close className={className.share__close__mobile}>
                        <img src="/icon-close.svg" alt="Icon Close" />
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
