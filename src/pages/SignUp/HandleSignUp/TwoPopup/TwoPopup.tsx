import { FC } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';


interface Props {
  onClose: () => void;
  message: string;
  type: 'success' | 'error';
}

const TwoPopup: FC<Props> = ({ message, onClose, type }) => {
  const iconColor = type === 'success' ? '#0EA739' : '#dc2626';
  const Icon = type === 'success' ? CheckRoundedIcon : CloseRoundedIcon;
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-background/40 flex items-center justify-center z-50">
      <div className="rounded-[10px] w-[494px] h-[405px] pt-5 text-center bg-white shadow-md border border-background/40">
        <div className="text-end">
          <CloseRoundedIcon className="cursor-pointer mb-10 mr-5" onClick={onClose} />
        </div>
        <div className="text-white w-[99px] h-[99px] rounded-full flex items-center justify-center mx-auto"
          style={{
            backgroundColor: iconColor
          }}
        >
          <Icon fontSize="large"/>
        </div>
        <div className="font-semi-bold text-xl mt-12">{message}</div>
    </div>
      </div>
  );
};

export default TwoPopup;
