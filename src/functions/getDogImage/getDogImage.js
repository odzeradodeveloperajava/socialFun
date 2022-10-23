import axios from 'axios';

const getDogImage = async () => {
    const getImage = await axios.get('http://[2a01:4f9:2b:289c::475]:80/dog');
    return getImage.data
}

export default getDogImage