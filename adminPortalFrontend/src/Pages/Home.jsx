import Alert from "../Components/AlertBox";
import LogIn from "./Login";
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
       <div className="flex flex-col justify-center items-center mt-44 ">
    <Alert type="error" message="You cannot leave this field empty"/>
    </div>
    </div>
  );
};

export default Home;
