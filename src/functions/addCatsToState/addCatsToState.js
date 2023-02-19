import fillArrayWithCats from "functions/fillArrayWithCats/fillArrayWithCats";
import store from "redux/store";
import { addCat } from "redux/reducers";



const addCatsToState = async () => {
    const catFiles = await fillArrayWithCats(2);
    catFiles.map(x => store.dispatch(addCat(x)));
}

export default addCatsToState