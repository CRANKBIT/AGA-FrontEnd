import React from 'react';
import PopupProfile from './PopupProfile';

interface PopupTwoProps {
  onClose: () => void;
}

const PopupTwo: React.FC<PopupTwoProps> = ({ onClose }) => (
  <PopupProfile onClose={onClose} />
);

export default PopupTwo;
