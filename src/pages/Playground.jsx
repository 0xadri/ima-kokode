import { useState, useRef } from "react";

/*
 * Playground Page To Test Things Out
 */

const Playground = () => {
  const [profile, setProfile] = useState({
    name: "James",
    city: "London",
  });
  const handleClick = (keyName, value) => {
    setProfile((prev) => ({
      ...prev, // Clone object for immutability (Shallow Clone)
      [keyName]: value, // Add/Update Property
    }));
  };
  console.log(profile);

  const avatarRef = useRef();
  const handleClickAvatar = () => {
    // todo
    console.log(avatarRef.current);
    avatarRef.current.click();
  };

  return (
    <div>
      <h1>Playground</h1>
      <p>Just a playground page where I test things out.</p>
      <div>
        <button onClick={() => handleClick("age", "33")}>
          UPDATE AGE TO 33
        </button>
        <button onClick={() => handleClick("age", "44")}>
          UPDATE AGE TO 44
        </button>
      </div>
      <div className="avatar-section">
        <input
          className="avatar-file-input"
          ref={avatarRef}
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />
        <button className="avatar-file-btn" onClick={handleClickAvatar}>
          Add Profile Pic
        </button>
      </div>
    </div>
  );
};

export default Playground;
