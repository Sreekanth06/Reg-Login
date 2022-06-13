import React,{useEffect,useState} from 'react'
import axios from 'axios'
// import Card from './card';

function Home() {
  const [count, setCount] = useState(false);
  const[data, setData ] = useState([]);

  const myFunction = () => {
    setCount(true);
    if (count == 0) {
      setCount(true);
    } else {
      setCount(false);
    }
  };

  useEffect(()=>{
      axios.post('https://hoblist.com/api/movieList',{
          'category':'movies',
          'language':'kannada',
          'genre':'all',
          'sort':'voting'
      })

    //   .then(data => {
    //     console.log('tracks=' , data);
    //     setTracks(data.tracks)
    // })

      .then((response) => {
        console.log('tracks=' , response.data);
        setData(response.data.result)
      })
      .catch((error) => {
          console.log(error);

      })
    
},[])
  return (
    <>
       <div>
      <div style={{ display: "flex" }}>
        <div class="w3-dropdown-click">
           <button onClick={myFunction} style={{float:"right"}}>
    Click me
          </button>
           {count ? (
             <div
              id="Demo"
              class="w3-dropdown-content w3-bar-block w3-card-4 w3-animate-zoom"
            >
              <a href="https://www.geeksynergy.com/">
                About:-
              </a>
              <a href="https://www.google.com/maps/place/GeekSynergy+Technologies+Pvt.+Ltd./@13.0393219,77.5700874,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae17e85d19f5b5:0xf82405f540f1cdba!8m2!3d13.0393219!4d77.5722761" class="w3-bar-item w3-button">
                Adderss:-
              </a>
              <a href="https://www.bharatibiz.com/en/geeksynergy-technologies-pvt-ltd-099647-98142">
                phone/
              </a>
              <a href="https://vakilsearch.com/company/geeksynergy-technologies-private-limited/U72200KA2015PTC081027" class="w3-bar-item w3-button">
                Email:-
              </a>
            </div>
          ) : null}

        </div>
      </div>
    </div>

    <div>
    {
        data.map((item,key) => {
          return(
          <div class="row">
                  <div className='col-md-6'>
                             <ul className='card mt-3 mb-2'>

                               {/* <img src={poster}  className="card-img-top" /> */}
                               <li className='card-header'>
                                   <h2 className='card-body bg-dark' style={{color:"red"}}> {item.title}</h2>
                                     <p key={key} > <strong>Genre :</strong>{item.genre}</p>
                                     <p> <strong>Director :</strong> {item.director}</p>
                                     <p><strong>Starring :</strong> {item.stars}</p>
                                     <p><strong>poster :</strong> {item.poster}</p>
                                     <p className='card-header'><strong>downVoted :</strong> {item.downVoted}</p>
                                     <p><strong>language :</strong> {item.language}</p>
                                </li>
                              </ul>
                  </div>
          </div>
          )
        })
      }
    </div>
    
</>
  );
  


}



export default Home;
