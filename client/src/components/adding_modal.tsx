import CustomModal from "./custom.modal";
import AddingForm from "./adding_form";

interface IProps {
    isOpen: boolean;
    onClose: () => void,
    title: string
}


export default function AddingModal({isOpen, onClose, title} : IProps) {
  return (
    
    <CustomModal isOpen={isOpen} onClose={onClose} title={title}>
        <AddingForm onClose={onClose} />
    </CustomModal>
  )
}
