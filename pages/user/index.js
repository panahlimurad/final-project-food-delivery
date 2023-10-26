import LayoutUser from "../../feature/ClientShared/components/LayoutUser/LayoutUser";
import LayoutClient from "../../layoutClient/LayoutClient";


const User = () => {
  return (
    <LayoutClient>
      <div>
        <LayoutUser />
      </div>
    </LayoutClient>
  );
};

export default User;
