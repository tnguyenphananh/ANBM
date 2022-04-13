import "./suggest.css"

export default function Suggest({user}) {
  return (
    <li className="rightsidebarFriend">
        <img className="rightsidebarFriendImg" src={user.profilePicture} alt=""/>
        <span className="rightsidebarFriendName"> {user.username} </span>
    </li>
  )
}
