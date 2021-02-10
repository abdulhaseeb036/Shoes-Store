import React, { useEffect, useState } from 'react';
import 'firebase/database'
import 'firebase/storage'
import { GlobalContext } from '../api/contextapi';
import firebase from 'firebase/app'
import styles from '../home/home.module.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import classes from '../home/home.module.css';
import { Divider, Button, Grid, Card, Input, TextField, InputLabel, InputAdornment, StepIcon } from '@material-ui/core'


const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'blue',
      },
      '&:hover fieldset': {
        borderColor: 'green',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  },
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },

}));

function CustomizedInputs() {
  const classes = useStyles();
}



function Home() {
  const [name, setName] = useState([]);
  const [prize, setPrize] = useState([]);
  const [description, setDescription] = useState([])
  const [pic, setPic] = useState([]);
  const [firedata, setFiredata] = useState([]);
  const [product, setProduct] = useState([
    {
      name: name,
      prize: prize,
      des: description,
      pic
    }
  ])

  useEffect(() => {
    async function getdailydata() {
      await firebase.database().ref('products').on("value", namepro => {
        var valll = namepro.val();
        setFiredata(valll)

      })
    }
    getdailydata();
  }, []);
  
  console.log(product);


  // //  ON CLICK SUBMIT DATA:
  const sumbitdata = (e) => {
    e.preventDefault()
    var uploadTask = firebase.storage().ref().child(`images/${pic.name}`).put(pic);
    uploadTask.on('state_changed',
      (snapshot) => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('File available at', downloadURL);
          setProduct({ name: name, prize: prize, dis: description, pic: downloadURL });
        });
      }
    );
    firebase.storage().ref().child(`images/${pic.name}`).put(pic)
    firebase.database().ref('products').push(product);
  }

  return (
     
    <div className={styles.container}>
      <Card className={styles.formcard}>
        <h2>Add Shoes</h2>
        <Divider className={styles.dividerform} variant="middle" />
        <form className={styles.form} onSubmit={sumbitdata}>
          <Grid className={styles.gridform} container spacing={2}>
            <Grid item xm={12} md={3} lg={3} xl={3}>
              <CssTextField required className={classes.margin, styles.nameproductip} label="Name Of Shoe" variant="outlined" id="custom-css-outlined-input" onChange={(e) => setName(e.target.value)} />
            </Grid>
            <Grid item xm={12} md={3} lg={3} xl={3}>
              <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
              <Input placeholder="Enter Amount" required type="number" id="standard-adornment-amount" startAdornment={<InputAdornment position="start">$</InputAdornment>} onChange={(e) => setPrize(e.target.value)} />
            </Grid>
          </Grid>

          <Grid className={styles.gridform} container spacing={2}>
            <Grid item xm={12} md={3} lg={3} xl={3}>
              <CssTextField required id="outlined-multiline-static" label="Enter Description" multiline rows={1.5} variant="outlined" onChange={(e) => setDescription(e.target.value)} />
            </Grid>
            <Grid item xm={12} md={3} lg={3} xl={3}>
              <a href="#"> Upload Image
              <input onChange={(e) => setPic(e.target.files[0])} required className={styles.uploadimgip} type="file" name="" id="chooseimg" accept="image/*"></input>
              </a>
            </Grid>
          </Grid>
          <Button type="submit" variant="contained">Submit</Button>
        </form>
      </Card>

  

      {Object.values(firedata).map((vll, ind) => {
        return (
         <Grid key={ind} className={styles.gridform} container spacing={2}>
            <Grid item xm={12} md={3} lg={3} xl={3}>
              <Card className={styles.dataa}>
                <h3>{vll.name}</h3>
                <h3>Prize: $ {vll.prize}</h3>
                <h4> {vll.dis}</h4>
                <img alt="img" src={vll.pic} />
              </Card>
            </Grid>
          </Grid>
        )

      })}


    </div>

  )
}

export default Home;