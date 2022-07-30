import axios from 'axios';

const getDogImage = async () => {
    const getImage = await axios.get('http://localhost:9000/dog');
    return getImage.data
}

export default getDogImage