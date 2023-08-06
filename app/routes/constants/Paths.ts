/**
 * Express router paths go here.
 */

import { Immutable } from "../../others/types";

const Paths = {
  Base: "/api",
  Site: {
    Base: "sites",
    Search: "search",
    Comment: "comment"
  },
  Users :{
    Base: "users",
    Signup: "signup",
    Login: "login"
  }
};

export type TPaths = Immutable<typeof Paths>;
export default Paths as TPaths;
