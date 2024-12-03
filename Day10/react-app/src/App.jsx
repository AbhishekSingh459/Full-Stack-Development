import './App.css'
const App = ({name,email,roll}) => {
  return (
    <div id="disp">
      <h1>Student Details</h1>
      <h2>Name:{name}</h2>
      <h2>Email Id: {email}</h2>
      <h2>Roll.No: {roll}</h2>
    </div>
  )
}

export default App