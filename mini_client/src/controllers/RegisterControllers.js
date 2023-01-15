// import axios from 'axios';
// import useAuth from '../hooks/useAuth';

// const errFor = (err) => {
//   err.forEach((element) => {
//     console.log(element.msg);
//   });
// };

// export const registerController = (FormEmail, FormPassword, FormUserName, FormType) => {
//   axios
//     .post('http://localhost:4444/auth/register', {
//       email: FormEmail,
//       password: FormPassword,
//       userName: FormUserName,
//       type: FormType
//     })
//     .then((res) => {
//       console.log('hi1');
//     })
//     .catch((error) => {
//       if (error.response) {
//         // Request made and server responded
//         console.log(error.response.data);
//         console.log(error.response.status);
//         console.log(error.response.headers);
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.log(error.request);
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         console.log('Error', error.message);
//       }
//     });
// };
