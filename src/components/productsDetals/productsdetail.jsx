import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import firebase from 'firebase/app'
import 'firebase/database'

function Productsdetail() {
  const [firedata, setFiredata] = useState([])

  useEffect(() => {
    async function getdailydata() {
      await firebase.database().ref('products').on("value", namepro => {
        var valll = namepro.val();
        setFiredata(valll)

      })
    }
    getdailydata();
  }, [])

  const { slug } = useParams()
  const shoe = firedata[slug]
  console.log(shoe);
  return (
    <div>
      products deattailes here
      {Object.values(firedata).map((vll, ind) => {
        return (
          <div>
              <Link to={`/${slug}`}>
            <div key={ind}>
              <img alt="img" src={vll.pic} />
            </div>
            <h3>Name: {vll.name}</h3>
            <h3>Prize: $ {vll.prize}</h3>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
export default Productsdetail;