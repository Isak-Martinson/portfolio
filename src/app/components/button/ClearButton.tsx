import './clearButton.css';

interface ClearButtonProps {
  onClick: () => void;
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClick }) => {
  return (
    <button id='clearButton' style={{ zIndex: 3 }} onClick={onClick}>
      Clear Canvas
    </button>
  );
};

export default ClearButton;
