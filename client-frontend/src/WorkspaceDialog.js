import React, {useState} from 'react'
import { Link}  from 'react-router-dom'
import ReviewAdd from './ReviewAdd'
import Workspace from './Workspace'
import WorkspaceCard from './WorkspaceCard'

//dialog
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const WorkspaceDialog = ({allRatings}) => {

    const [showReview, setShowReview] = useState(false)

    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
     
    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const descriptionElementRef = React.useRef(null);
      React.useEffect(() => {
        if (open) {
          const { current: descriptionElement } = descriptionElementRef;
          if (descriptionElement !== null) {
            descriptionElement.focus();
          }
        }
      }, [open]);


      const handleShowReviewClick = () => {
        setShowReview(!showReview)
      }

  return (
    <div>

        <Button onClick={handleClickOpen('paper')}>{allRatings.length} reviews</Button>

        <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">
              ~REVIEWS~
            </DialogTitle>

            <DialogContent dividers={scroll === 'paper'}>
           
            <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
            >
              
            </DialogContentText>
            </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
        </Dialog>

    </div>


  )
}

export default WorkspaceDialog