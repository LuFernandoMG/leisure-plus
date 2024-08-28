import { Movie } from "@/utils/types";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    movie: Movie; // Replace 'any' with the type of your item
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, movie }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Item Details</h2>
                <p>{movie.original_title}</p> 
                <p>{movie.overview}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};
