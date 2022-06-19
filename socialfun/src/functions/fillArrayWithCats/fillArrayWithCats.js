import getCatImage from "../getCatImage/getCatImage"




const fillArrayWithCats = async () => {
    const catsArray = [];
    const catImage = await getCatImage();
    for (let i =0; i<2; i++){
        catsArray.push(catImage)
    }
    return catImage
}

export default fillArrayWithCats