import React,{useEffect} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Navigation from '../navigation/Navigation'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth:1200,
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const MoreOnProgram = ({match}) => {
    const classes = useStyles();
    const id = match.params.id;
    const [program,setProgram] = React.useState({})
    useEffect(() => {
     axios
       .get(`http://localhost:5000/api/programs/${id}`)
       .then(res => setProgram(res.data))
       .catch(err => console.error(err));
    },[id])
  return (
    <div>
    <Navigation />
    <Card className={classes.root}>
    <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={program.programTitle}
        subheader={program.programDescription}
      />
      <CardContent>
      <h2>{program.moreDescription}</h2>
      </CardContent>
      
    </Card>
    </div>
  )
}

export default MoreOnProgram
