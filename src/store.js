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
        store.setState({ Bearer: "" });
        return { is_login: false, userType: "" };
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
            store.setState({ Bearer: response.data.token });
            store.setState({ is_login: true });

          })
          .catch(function(error) {
            console.log("ASEM1", error);
          });

        //   Get My Dataa
          const getMyData = {
            method: "get",
            url: Host+ "/api/pemain/me",
            headers: {
              Authorization: "Bearer " + store.getState().Bearer,
              "Content-Type":"application/json",
            }
          };
          await axios(getMyData)
            .then(function(response) {
              store.setState({ 
                mySelf: response.data.data,
                userType: response.data.data.user_type
               });
            })
            .catch(function(error) {
              console.log("ASEM", error);
            });
        },
        //Sport Category Change 
        changeCategory: async (state, category) => {
          // console.log("MASOKKKKKKKKKKKkk")
          const req = {
            method: "get",
            url: Host + "/api/booking/category",
            headers: {
              Authorization: "Bearer " + store.getState().Bearer
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
          if(keyword.length > 2){
            try{
              const req = {
                  method: "get",
                  url: Host+ "/api/booking/search",
                  headers: {
                    Authorization: "Bearer " + store.getState().Bearer
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
      // console.log("GetMyOwn Data")
      const getMyData = {
        method: "get",
        url: Host+ "/api/pemain/me",
        headers: {
          Authorization: "Bearer " + store.getState().Bearer,
          "Content-Type":"application/json",
        }
      };
      await axios(getMyData)
        .then(function(response) {
          store.setState({ mySelf: response.data.data });
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
          store.setState({ Bearer: response.data.token });
          store.setState({ is_login: true });

        })
        .catch(function(error) {
          console.log("ASEM1", error);
        });

      //   Get My Dataa
        const getMyData = {
          method: "get",
          url: Host+ "/api/pebisnis",
          headers: {
            Authorization: "Bearer " + store.getState().Bearer,
            "Content-Type":"application/json",
          }
        };
        await axios(getMyData)
          .then(function(response) {
            store.setState({ 
              mySelf: response.data.data,
              userType: response.data.data.user_type});
          })
          .catch(function(error) {
            console.log("ASEM", error);
          });
      },

})