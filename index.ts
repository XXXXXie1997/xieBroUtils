import { format } from "./src/dateUtils";
import { diff } from "./src/arrayUtils";
import { getLocal, setLocal, getSession, setSession } from "./src/storageUtils";

const date = {
  format,
};

const array = {
  diff,
};
const local = {
  get: getLocal,
  set: setLocal,
};
const session = {
  get: getSession,
  set: setSession,
};
export { date, array, local, session };
