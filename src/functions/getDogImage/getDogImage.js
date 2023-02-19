import axios from 'axios';

const getDogImage = async () => {
    const getImage = await axios.get('https://socialback.bieda.it/dog');
    return getImage.data
}

export default getDogImage