import {create} from "zustand";

interface AuthModalstore {
    isOpen:boolean;
    onOpen:() => void;
    onClose:() => void;
};

const useAuthModal = create<AuthModalstore>((set) => ({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose:() => set({isOpen:false}),
}));

export default useAuthModal;