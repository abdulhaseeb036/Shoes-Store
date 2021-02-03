import React, { useEffect, useState } from 'react';
import 'firebase/database'
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
  const [product, setProduct] = useState([
    {
      name: name,
      prize: prize,
      des: description,
      pic: pic
    }
  ])

  const [firedata, setFiredata] = useState([]);
  useEffect(() => {
    async function getdailydata() {
      firebase.database().ref('products').on("value", namepro => {
        [namepro.val()].map(pro => {
          Object.values(pro).map(vall =>
            setFiredata(vall)
          )
        })
      })
    }
    getdailydata();
  }, []);

  const sumbitdata = (e) => {
    e.preventDefault()
    setProduct({ name: name, prize: prize, dis: description, pic: pic });
    firebase.database().ref('products').push(product);
  }

  return (
    <div className={styles.container}>
      <Card className={styles.formcard}>
        <h2>Add Products</h2>
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
              {/* <Button component="input" type="file" accept="image/*" variant="contained" color="default" className={classes.button} startIcon={<CloudUploadIcon />}> */}
              {/* Upload Image */}
              {/* </Button> */}
              <a href="#"> Upload Image
              <input onChange={(e) => setPic(e.target.value)} required className={styles.uploadimgip} type="file" name="" id="chooseimg" accept="image/*"></input>
              </a>
            </Grid>
          </Grid>
          <Button type="submit" variant="contained">Upload Add</Button>
        </form>
      </Card>

      {Object.values(firedata).map((vl, ind) => {
        console.log(vl)
        return (
          <Card>
            <h1 key={ind}>{vl}</h1>
          </Card>
        )
      })}







      {/* <ul>
        {Object.values(firedata).map((value, ind) => {
          return (
            <li key={ind}>{value}</li>
          )
        })}
      </ul> */}
    </div>
  )
}

export default Home;