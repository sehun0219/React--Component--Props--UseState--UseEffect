import "./App.css";
import Profile from "./components/Profile";
import Avatar from "./components/Avatar";
function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("버튼이 클릭 되었어요!");
  };
  return (
    <>
    <button onClick={handleClick}>버튼</button>
      <Avatar isNew={true} image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80" />
      <Profile image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
      name="백만원"
      title="장난꾸러기"
      isNew={true}
      />
      <Profile image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
      name="고양이"
      title="집사"/>
      <Profile image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
      name="백만원"
      title="장난꾸러기"/>
      
    </>
  );
}

export default AppProfile;
 