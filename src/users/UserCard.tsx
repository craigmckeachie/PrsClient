import { formatPhoneNumber } from "../utility/formatUtilities";
import { IUser } from "./IUser";

interface IUserCardProps {
  user: IUser;
}

function UserCard({ user }: IUserCardProps) {
  return (
    <div className="d-flex gap-4 w-25">
      <div
        style={{ width: "6rem", height: "6rem" }}
        className="d-flex bg-secondary fs-3 text-white align-items-center justify-content-center rounded-circle me-2"
      >
        {user.firstname.substring(0, 1)}
        {user.lastname.substring(0, 1)}
      </div>
      <address>
        <strong>
          {user.firstname} {user.lastname}
        </strong>
        <br />
        <span className="text-secondary">
          {user.isAdmin && "Admin"} {(!user.isAdmin &&user.isReviewer) && "Reviewer"}
          {(!user.isReviewer && !user.isAdmin) && "no role assigned"}
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
