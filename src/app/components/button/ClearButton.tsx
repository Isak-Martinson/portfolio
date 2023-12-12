interface ClearButtonProps {
  onClick: () => void;
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClick }) => {
  return (
    <ul style={{ zIndex: 3, margin: 0 }}>
      <li id='clearButton' onClick={onClick}>
        clear canvas
      </li>
    </ul>
  );
};

export default ClearButton;
