import CustomModal from "./custom.modal";
import EditingForm from "./editing_form";

interface IProps {
    isOpen: boolean;
    onClose: () => void,
    title: string,
    hero: any;
    onSubmit: (data: FormData) => Promise<void>;
}


export default function editingModal({ isOpen, onClose, title, hero, onSubmit }: IProps) {
  return (
    
    <CustomModal isOpen={isOpen} onClose={onClose} title={title}>
        <EditingForm hero={hero} onSubmit={onSubmit} onClose={onClose} />
    </CustomModal>
  )
}
