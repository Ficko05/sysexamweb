import endpoint from "./settings.js"

const URL = endpoint;

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

class ApiFacade {
  setToken = (token) => {
    localStorage.setItem('jwtToken', token)
  }
  getToken = () => {
    return localStorage.getItem('jwtToken')
  }
  loggedIn = () => {
    const loggedIn = this.getToken() != null;
    return loggedIn;
  }
  logout = () => {
    localStorage.removeItem("jwtToken");
  }

  login = (user, pass) => {
    const options = this.makeOptions("POST", true, { username: user, password: pass });
    return fetch(URL + "/api/login", options, true)
      .then(handleHttpErrors)
      .then(res => { this.setToken(res.token) })
  }

  fetchData = () => {
    const options = this.makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/info/user", options).then(handleHttpErrors);
  }

  fetchHotels = async () => {
    const options = this.makeOptions("GET");
    return await fetch(URL + "/api/hotel/simple", options).then(handleHttpErrors);
  }

  postBooking = async (bookingDetails) => {
    const options = this.makeOptions("POST", localStorage.token, bookingDetails)

    return await fetch(URL + "/api/hotel/book", options).then(handleHttpErrors);
  }

  postToSocial = async () => {
    const options = this.makeOptions("POST");
    //requesting authorization on social
    return await fetch(URL + "/api/social/request_authorization", options).then(handleHttpErrors);
  }

  getStatusSocial = async (id) => {
    const options = this.makeOptions("GET");
    let json = await fetch(URL + "/api/social/posted_on_social?id=" + id, options).then(handleHttpErrors)
    return json.isPosted;
  }

  fetchHotel = async (id) => {
    const options = this.makeOptions("GET");
    return await fetch(URL + "/api/hotel/" + id, options).then(handleHttpErrors);
  }
  fetchHotelFromZip = async (zip) => { 
    const options = this.makeOptions("GET");
    return await fetch(URL + "/api/hotel/zip" + zip, options).then(handleHttpErrors);
  }
  makeOptions(method, addToken, body) {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
      }
    }
    if (addToken && this.loggedIn()) {
      opts.headers["x-access-token"] = this.getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }
}
const facade = new ApiFacade();
export default facade;