import { createStore } from 'vuex'
import travels from "./modules/travels"
import users from "./modules/users"
import suggestions from "./modules/suggestions"

export default createStore({
  modules: {
    users,
    travels,
    suggestions
  }
})
