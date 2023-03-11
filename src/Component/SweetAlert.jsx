// Importing the necessary modules 
import Swal from "sweetalert2";

// Creating a function for sweetAlert 
const sweetAlert = (icon, title, message) => {
    // Create sweet alert 
    Swal.fire({
        title: `${title}`, 
        icon: icon,
        html: ``, 
        text: message, 
        confirmButtonText: "Okay"
    }); 
}

// Exporting the function 
export { sweetAlert }