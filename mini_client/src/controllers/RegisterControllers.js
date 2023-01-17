// import axios from 'axios';
// import { MIconButton } from '../components/@material-extend';

// export const registerController = (FormEmail, FormPassword, FormUserName, FormType) => {
//   const { enqueueSnackbar, closeSnackbar } = useSnackbar();
//   axios
//     .post('http://localhost:4444/auth/register', {
//       email: FormEmail,
//       password: FormPassword,
//       userName: FormUserName,
//       type: FormType
//     })
//     .then((res) => {
//       enqueueSnackbar('Register success', {
//         variant: 'success',
//         action: (key) => (
//           <MIconButton size="small" onClick={() => closeSnackbar(key)}>
//             <Icon icon={closeFill} />
//           </MIconButton>
//         )
//       });
//       register(FormEmail, FormPassword, FormUserName, FormType);
//     })
//     .catch((error) => {
//       if (error.response) {
//         error.response.data.forEach((el) => {
//           enqueueSnackbar(el.msg, {
//             variant: 'warning',
//             action: (key) => (
//               <MIconButton size="small" onClick={() => closeSnackbar(key)}>
//                 <Icon icon={closeFill} />
//               </MIconButton>
//             )
//           });
//         });
//         // Request made and server responded
//         console.log(error.response.data);
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.log(error.request);
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         console.log('Error', error.message);
//       }
//     });
// };
