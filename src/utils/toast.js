import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end', // top-right corner
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  customClass: {
    popup: 'colored-toast'
  },
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

export const showSuccessToast = (message) => {
  Toast.fire({
    icon: 'success',
    title: message,
  });
};

export const showErrorToast = (message) => {
  Toast.fire({
    icon: 'error',
    title: message,
  });
};

export const showInfoToast = (message) => {
  Toast.fire({
    icon: 'info',
    title: message,
  });
};