import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';

function App() {
  const handleName = (name)=>{
    return(    alert(name)
    )
  }
  return (
    <div className="App">
      <Profile data={{
        fullName: "Anas Boussehmine",
        bio:"Web developer",
        profession: "Student",
        funct: handleName,
        }}>
          <img src='./profileImg.jfif' alt='anas-img'
          style={{width:"30%", borderRadius:"50%",boxShadow: "5px 10px #888888"}}
          />
        </Profile>
    </div>
  );
}

export default App;
