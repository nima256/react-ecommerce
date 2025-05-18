import user from "../../assets/images/Header/user.png";


function UserImgCircle(props) {
  return (
    <>
      <div className={`userImg ${props.lg===true && "lg"}`}>
        <span className="rounded-circle">
          <img src={user} alt="" />
        </span>
      </div>
    </>
  );
}

export default UserImgCircle;
