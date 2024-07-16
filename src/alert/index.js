// sweetalert.js
import Swal from 'sweetalert2';

export const showAlert = (icon, title) => {
  Swal.fire({
    icon,
    title,
    showConfirmButton: true,
    timer: 5000 // Tiempo en milisegundos para cerrar automáticamente el SweetAlert
  });
};
