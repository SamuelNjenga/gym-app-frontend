import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { postUserSessionRegistration } from '../../util/APIUtils';
import { useUser } from '../contexts/UserContext';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
		maxWidth: 500,
		marginLeft: 20
  },
	media: {
		height: 200
	}
}));

const Session = ({id,sessionStartTime, sessionEndTime, trainerId,maxNumberOfAttendants,numberOfAttendantsSoFar,roomId}) => {
	const classes = useStyles()
	const [modalStyle] = React.useState(getModalStyle);
	const {userId} = useUser()
  const [open, setOpen] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const sessionId = id
  
  const handleClickSnack = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

	const handleBooking = async () => {
					try {
						const resp = await postUserSessionRegistration({sessionId,userId})
							
							if (resp.status === 201) {
                setOpen(false)
                handleClickSnack()
							} else {
								alert('Wrong credentials');
							}
						} catch (err) {
							console.error(err);
						}
					};
	

   const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Book Session</h2>
      <p id="simple-modal-description">
        Press Okay to Confirm The Session
      </p>
	  <Button variant="contained" color="secondary" onClick={handleBooking}>Okay</Button>
    </div>
  );
    
  return (
    <div>
      <Card className={classes.root}>
				<CardActionArea>
					<CardContent>
            <Typography gutterBottom variant="h5" component="h2">
							Trainer Id : {trainerId}
						</Typography>
						<Typography gutterBottom variant="h5" component="h2">
							Session Start Time : {sessionStartTime}
						</Typography>
            <Typography gutterBottom variant="h5" component="h2">
							Session End Time : {sessionEndTime}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							Maximum Number of Attendants : {maxNumberOfAttendants}
						</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
							Number of Attendants so far : {numberOfAttendantsSoFar}
						</Typography>
            <Typography gutterBottom variant="h5" component="h2">
							Room Id : {roomId}
						</Typography>
						<Button variant="contained" color="secondary" onClick={handleOpen}>Book Session</Button>
						<Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description">
        {body}
      </Modal>
					</CardContent>
				</CardActionArea>
			</Card>
      <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity="success">
          You have booked a session successfully!
        </Alert>
      </Snackbar>
      
    </div>
  )
}

Session.propTypes = {
    sessionStartTime: PropTypes.string,
    sessionEndTime: PropTypes.string,
    trainerId: PropTypes.number,
    maxNumberOfAttendants: PropTypes.number,
    numberOfAttendantsSoFar: PropTypes.number,
    roomId: PropTypes.number,
}

export default Session
