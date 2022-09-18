import { createStore } from 'vuex'
import travels from "./modules/travels"
import users from "./modules/users"

export default createStore({
  modules: {
    users,
    travels
  }
})
