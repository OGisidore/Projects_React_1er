/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/03/2024 15:18:26
*/
import React, { FC, useEffect, Fragment } from "react";
// import Loading from '../Loading/Loading';
import "./Home.css";
import Header from "../../components/Header/Header";

import { data } from "../../components/api/data";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  // const [state, setState] = useState<any>(null)
  // const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    window.scrollTo(0, 0);
   
   
  });

  return (
    <Fragment>
      {
        <div className="container-sm p-0">
          <Header />
          {
            data.map((dat: any,index : number) => {
              
              
              return (
                <div className="discussion py-1 border-bottom d-flex" key={index}>
                <div className=" mx-2">
                   <img src={dat.profilImage} alt={dat.name} className="rounded-circle" height={"60px"} />
                </div>
                <div className=" d-flex flex-column px-2 justify-content-end">
                  <h2>{dat.name}</h2>
                  <p>{dat.message.content}</p>
                </div>
                <div className=" times  d-flex align-items-end" >
                  {dat.message.time}
                </div>
               
      
              </div>
              )
              
              
            })
            
          }
         
        </div>
      }
    </Fragment>
  );
};

export default Home;
