import { formatPhoneNumber } from "../utility/formatUtilities";
import { IUser } from "./IUser";

interface IUserCardProps {
  user: IUser;
}

function UserCard({ user }: IUserCardProps) {
  return (
    <div className="d-flex gap-4 w-25">
      {/* <img
        src={`/images/users/image-${user.id}.png`}
        alt={user.username}
        width={96}
        height={96}
        className="rounded-circle me-2"
      /> */}
      <div style={{width:"96px", height: "96px"}} className="rounded-circle me-2">
        LW
      </div>
      <address>
        <strong>
          {user.firstname} {user.lastname}
        </strong>
        <br />
        <span className="text-secondary">
          {user.isAdmin && "Admin"} {user.isReviewer && "Reviewer"}
        </span>
        <br />
        <span className="text-secondary">{formatPhoneNumber(user.phone)}</span>
        <br />
        <a href={`mailto:${user.email}`} title={user.email}>
          Email user
        </a>
      </address>
    </div>
  );
}

export default UserCard;
