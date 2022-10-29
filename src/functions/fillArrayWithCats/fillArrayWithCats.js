import getCatImage from "functions/getCatImage/getCatImage"
import getDogImage from "functions/getDogImage/getDogImage";


const fillArrayWithCats = async (x) => {
    const imgArray = [];
    for (let i =0; i<x; i++){
        const catImage = await getCatImage();
        const dogImage = await getDogImage();
        imgArray.push({type: 'cat', img: catImage})
        imgArray.push({type: 'dog', img: dogImage})
    }
    return imgArray
}

export default fillArrayWithCats