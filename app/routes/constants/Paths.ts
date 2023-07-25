/**
 * Express router paths go here.
 */

import { Immutable } from "../../others/types";

const Paths = {
  Base: "/api",
  Site: {
    Base: "/sites",
  },
  Users :{
    Base: "/users"
  }
};

// **** Export **** //

export type TPaths = Immutable<typeof Paths>;
export default Paths as TPaths;