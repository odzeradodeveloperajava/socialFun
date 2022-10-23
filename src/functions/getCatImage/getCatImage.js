import axios from 'axios';

const getCatImage = async () => {
    const getImage = await axios.get('http://[2a01:4f9:2b:289c::475]:80');
    return getImage.data
}

export default getCatImage