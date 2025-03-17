import Button from "../components/Button";

const MainPage = () => {
  return (
    <div className="MainPage_Container">
      <div className="MainPage_Top_Content">
        <div className="MainPage_Logo">
          Movement
        </div>
        <div className="MainPage_Logo">
          Squash
        </div>
      </div>

      <div className="MainPage_Btm_content">
        <Button>START</Button>
      </div>
    </div>
  );
};

export default MainPage;