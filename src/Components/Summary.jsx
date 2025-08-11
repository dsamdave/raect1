import { Link, useNavigate } from "react-router-dom";


export const Summary = () => {

    const navigate = useNavigate()

    const a = 10
    const handleNext = ()=>{

        if(a > 5){
            navigate("/form")
        } else {
            navigate("/")
        }  
    }

  return (
    <div>
      <h1>Summary Page</h1>
      <button onClick={handleNext}>Proceed</button>
    </div>
  );
};
