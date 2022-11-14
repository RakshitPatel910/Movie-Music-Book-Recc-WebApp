import * as React from "react";
import axios from 'axios';
import {useState,useEffect} from 'react'
import Radar from '../Chart/Radar'
import "./Profilepage.css";

export default function Profilepage() {

    const [user,setUser] = useState([])

    useEffect(()=>{
        async function getUser(){
            await axios.post("http://localhost:3010/userData", {
              _id: JSON.parse(localStorage.getItem("profile")).profile.id,
            }).then(e=>{setUser(e.data.data)}).catch(e=>{console.log(e)});
        }

        getUser()
    },[])

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-xl-6 col-md-12">
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center text-white">
                    <div className="m-b-25">
                      <img
                        src="https://img.icons8.com/bubbles/100/000000/user.png"
                        className="img-radius"
                        alt=""
                      />
                    </div>
                    <h6 className="f-w-600">Name</h6>
                    <p>{user.userName}</p>
                    <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                      Details
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Email</p>
                        <h6 className="text-muted f-w-400">{user.email}</h6>
                        <br/>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Phone</p>
                        <h6 className="text-muted f-w-400">{user.phone}</h6>
                        <br/>
                      </div>
                    </div>
                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                      Genere
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Most Watched Genere</p>
                        <h6 className="text-muted f-w-400">abc</h6>
                        <Radar/>
                      </div>
                      {/* <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Favorite Genere</p>
                        <h6 className="text-muted f-w-400">xyz</h6>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
