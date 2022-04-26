import "./suggest.css"

export default function Suggest({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightsidebarFriend">
      <img className="rightsidebarFriendImg" src={PF + user.profilePicture} alt="" />
      <span className="rightsidebarFriendName"> {user.username} </span>
    </li>
  )
}
