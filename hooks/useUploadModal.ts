import {create} from "zustand";

interface UploadModalstore {
    isOpen:boolean;
    onOpen:() => void;
    onClose:() => void;
}

const useUploadModal = create<UploadModalstore>((set) => ({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose:() => set({isOpen:false}),
}));

export default useUploadModal;