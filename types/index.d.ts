import { format } from "./src/dateUtils";
import { diff } from "./src/arrayUtils";
import { getLocal, setLocal, getSession, setSession } from "./src/storageUtils";
declare const date: {
    format: typeof format;
};
declare const array: {
    diff: typeof diff;
};
declare const local: {
    get: typeof getLocal;
    set: typeof setLocal;
};
declare const session: {
    get: typeof getSession;
    set: typeof setSession;
};
export { date, array, local, session };
