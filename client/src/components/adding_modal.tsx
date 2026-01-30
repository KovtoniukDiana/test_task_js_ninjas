import CustomModal from "./custom.modal";
import AddingForm from "./addind_form";

interface IProps {
    isOpen: boolean;
    onClose: () => void
}


export default function AddingModal({isOpen, onClose} : IProps) {
  return (
    
    <CustomModal isOpen={isOpen} onClose={onClose}>
        <AddingForm onClose={onClose} />
    </CustomModal>
  )
}
