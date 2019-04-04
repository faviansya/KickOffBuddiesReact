import createStore from "unistore";
import axios from "axios";
import { Host } from "./Host"


const initialState = {
    is_login: false,
    Bearer: "",
    mySelf: "",
    categoryItem: [],
    bookingId:"",
    playlistID:"",
    userType: "",
    RoomId:"",
}


export const store = createStore(initialState)

export const actions = store => ({
    postLogout: state => {
      localStorage.removeItem("is_login");
      localStorage.removeItem("Bearer");
      localStorage.removeItem("mySelf");
      localStorage.removeItem("userType");
    },
    changeBookingId: (state, id) => {
      store.setState({ bookingId: id });
      // console.log("ID",id)
    },
    changePlaylistId: (state, id) => {
      store.setState({ playlistID: id });
      // console.log("ID",id)
    },
    ChangeRoom: (state, IDSSSS) =>{
      store.setState({ RoomId: IDSSSS });
    },
    //GLOBAL HEADER METHOD-----------------------------
    //THIS METHOD IS FOR HEADER ONLY-------------------
    Login: async (state, username, password) => {
        //Login To Get Bearer Token
        const req = {
          method: "post",
          url: Host+ "/api/login",
          headers: {
            "Content-Type":"application/json",
          },
          data: {
            username: username,
            password: password
          }
        };
        await axios(req)
          .then(function(response) {
            localStorage.setItem("Bearer", response.data.token);
            localStorage.setItem("is_login", true);

          })
          .catch(function(error) {
            console.log("ASEM1", error);
          });

        //   Get My Dataa
          const Bearer = localStorage.getItem("Bearer")
          const getMyData = {
            method: "get",
            url: Host+ "/api/pemain/me",
            headers: {
              Authorization: "Bearer " + Bearer,
              "Content-Type":"application/json",
            }
          };
          await axios(getMyData)
            .then(function(response) {
               localStorage.setItem("mySelf", JSON.stringify(response.data.data));
               localStorage.setItem("userType", response.data.data.user_type);   
            })
            .catch(function(error) {
              console.log("ASEM", error);
            });
        },
        //Sport Category Change 
        changeCategory: async (state, category) => {
          const Bearer = localStorage.getItem("Bearer")
          const req = {
            method: "get",
            url: Host + "/api/booking/category",
            headers: {
              Authorization: "Bearer " + Bearer
            },
            params: {
              category: category
            }
          };
          await axios(req)
            .then(function(response) {
              store.setState({ categoryItem: response.data.data });
            })
            .catch(function(error) {
              console.log("ASEM", error);
            });
        },
        //Search Bar At Top
        searchItems : async (state,keyword) => {
          const Bearer = localStorage.getItem("Bearer")
          if(keyword.length > 2){
            try{
              const req = {
                  method: "get",
                  url: Host+ "/api/booking/search",
                  headers: {
                    Authorization: "Bearer " + Bearer
                  },
                  params: {
                      name: keyword
                    }
                };
              const response = await
              axios(req)
              store.setState({ categoryItem: response.data.data });
            }
            catch(error){
              console.log(error);
            }
          }
        },
    //END OF HEADER METHOD-------------------
    GetMyOwnData: async (state) => {
      const Bearer = localStorage.getItem("Bearer")
      const getMyData = {
        method: "get",
        url: Host+ "/api/pemain/me",
        headers: {
          Authorization: "Bearer " + Bearer,
          "Content-Type":"application/json",
        }
      };
      await axios(getMyData)
        .then(function(response) {
          localStorage.setItem("mySelf", JSON.stringify(response.data.data));
        })
        .catch(function(error) {
          console.log("ASEM", error);
        });
    },

    //Login Pebisnis To Get Bearer Token
    LoginPebisnis: async (state, username, password) => {
      const req = {
        method: "post",
        url: Host+ "/api/login/pebisnis",
        headers: {
          "Content-Type":"application/json",
        },
        data: {
          username: username,
          password: password
        }
      };
      await axios(req)
        .then(function(response) {
          localStorage.setItem("Bearer", response.data.token);
          localStorage.setItem("is_login", true);

        })
        .catch(function(error) {
          console.log("ASEM1", error);
        });

        const Bearer = localStorage.getItem("Bearer")
        const getMyData = {
          method: "get",
          url: Host+ "/api/pebisnis/myprofile",
          headers: {
            Authorization: "Bearer " + Bearer,
            "Content-Type":"application/json",
          }
        };
        await axios(getMyData)
          .then(function(response) {
              localStorage.setItem("mySelf", JSON.stringify(response.data.data));
              localStorage.setItem("userType", response.data.data.user_type);
         })
          .catch(function(error) {
            console.log("ASEM", error);
          });
      },

})