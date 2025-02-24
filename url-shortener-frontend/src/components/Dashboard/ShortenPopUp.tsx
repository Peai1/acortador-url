import Modal from '@mui/material/Modal';

import { CreateNewShorten } from './CreateNewShorten';

interface ShortenPopUpProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  refetch: () => void;
}

export const ShortenPopUp = ({ open, setOpen, refetch }: ShortenPopUpProps) => {

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='flex justify-center items-center h-full w-full'>
            <CreateNewShorten setOpen={setOpen} refetch={refetch} />
        </div>
      </Modal>
  )
}
