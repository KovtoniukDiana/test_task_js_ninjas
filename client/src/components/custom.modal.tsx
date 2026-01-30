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
    children: ReactNode;
}

export default function CustomModal( { isOpen, onClose, children }: IProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} backdrop="blur" >
            <ModalContent>
                <ModalHeader className="border-b">
                    <h3 className="text-lg">Створити нового супергероя</h3>
                </ModalHeader>

                <ModalBody className="space-y-4 py-6">
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}