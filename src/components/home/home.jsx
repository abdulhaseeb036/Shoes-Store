import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import styles from '../home/home.module.css';
import { withStyles } from '@material-ui/core/styles';
import classes from '../home/home.module.css';
import { Divider, Button, Grid, Card, Input, TextField, InputLabel, InputAdornment } from '@material-ui/core'
import { Outlet, useParams, Link } from 'react-router-dom';


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
      pic: pic,


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
  }, [])


  // //  ON CLICK SUBMIT DATA:
  const sumbitdata = (e) => {
    e.preventDefault()
    // firebase.storage().ref().child(`images/${pic.name}`).put(pic)
    firebase.database().ref('products').push(product);
    var uploadTask = firebase.storage().ref().child(`images/${pic.name}`).put(pic);
    uploadTask.on('state_changed', (snapshot) => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        setProduct({ name: name, prize: prize, dis: description, pic: downloadURL });
      });
    });
  }

 
  const { slug } = useParams()
  // const shoe = firedata[slug]

  return (
    <div className={styles.container}>
      <Card className={styles.formcard}>
        <h2>Add Shoes</h2>
        <Divider className={styles.dividerform} variant="middle" />
        <form className={styles.form} onSubmit={sumbitdata}>
          <Grid className={styles.gridform} container spacing={2}>
            <Grid item xm={12} md={3} lg={3} xl={3}>
              <CssTextField required className={classes.margin + styles.nameproductip} label="Name Of Shoe" variant="outlined" id="custom-css-outlined-input" onChange={(e) => setName(e.target.value)} />
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
              <Button> Upload Image
              <input onChange={(e) => setPic(e.target.files[0])} required className={styles.uploadimgip} type="file" name="" id="chooseimg" accept="image/*"></input>
              </Button>
            </Grid>
          </Grid>
          <Button type="submit" variant="contained">Submit</Button>
        </form>
      </Card>

      <div className={styles.gridproductscon}>
          {Object.values(firedata).map((vll, key) => {
            return (
              <Card key={key} className={styles.dataa}>
                <div className={styles.imgcontainer}>
                  <img alt="img" className={styles.uploadedimg} src={vll.pic} />
                </div>
                <h3>Name: {vll.name}</h3>
                <h3>Prize: $ {vll.prize}</h3>
                <div className={styles.descriptiondiv}>
                  <h4 className={styles.des}>Description:  {vll.dis}</h4>
                </div>
                <Button>
                  <Link to={`/${slug}`}>Add To Card</Link>
                </Button>
              </Card>
            )
          })}
        </div>
      <Outlet />

    </div >
  )
}

export default Home;