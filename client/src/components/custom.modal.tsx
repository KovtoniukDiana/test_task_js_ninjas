import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@heroui/react";
import { ReactNode } from "react";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    title: string,
    children: ReactNode;
}

export default function CustomModal( { isOpen, onClose, title, children }: IProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} backdrop="blur" >
            <ModalContent>
                <ModalHeader className="border-b">
                    <h3 className="text-lg">{title}</h3>
                </ModalHeader>

                <ModalBody className="space-y-4 py-6 flex-col items-center justify-center">
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}