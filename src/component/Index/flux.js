import axios from "axios";
let basePath = "mock";
const actions = {
  getList(){
    axios.get('/mock/index/page')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
}
export default actions;
