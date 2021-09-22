import axios from 'axios';

axios.defaults.baseURL = 'https://aqueous-springs-09267.herokuapp.com';

const addFeedback = async credentials => {
  try {
    const { data } = await axios.post('api/contacts/feedback', credentials);

    if (data.status === 'success') {
      alert('Your comment successfuly recieved. We will contact you soon!');
    }
  } catch (error) {
    alert(error);
  }
};

export default addFeedback;
