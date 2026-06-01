import ReactDOM from "react-dom";

type ModalProps = {
  title: string;
  size?: "sm" | "md" | "lg";
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal({ title, size, isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className={"modal modal-content" + (size ? " " + size : "")}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="row justify-content-between align-items-center mb-3">
          <h2>{title}</h2>
          <button type="button" className="btn-only" onClick={onClose}>
            X
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  );
}
