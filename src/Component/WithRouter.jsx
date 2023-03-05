// Importing the necessary modules 
import {
    useLocation,
    useNavigate,
    useParams
  } from "react-router-dom";
  
let withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
}

// Exporting the WithRouter 
export default withRouter; 

