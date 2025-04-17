import { useRef } from "react";
import Timer from "../components/timer";

const Home = () => {
  const avatarRef = useRef();

  const handleClick = () => {
    // todo
    console.log(avatarRef.current);
    avatarRef.current.click();
  };
  const oneSec = 1;

  return (
    <>
      <h1>Home</h1>
      <div>
        <input
          className="avatar-file-input"
          ref={avatarRef}
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />
        <button className="avatar-file-btn" onClick={handleClick}>
          Add Profile Pic
        </button>
      </div>
      <div>
        <h2>Timer Challenge!</h2>
        <Timer seconds={1} name="1sec" />
        <Timer seconds={2} name="2sec" />
      </div>
    </>
  );
};

export default Home;
