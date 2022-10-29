import axios from 'axios';

const getCatImage = async () => {
    const getImage = await axios.get('https://socialback.bieda.it/');
    return getImage.data
}

export default getCatImage