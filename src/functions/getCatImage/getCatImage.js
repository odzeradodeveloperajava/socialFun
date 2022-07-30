import axios from 'axios';

const getCatImage = async () => {
    const getImage = await axios.get('http://localhost:9000/');
    return getImage.data
}

export default getCatImage