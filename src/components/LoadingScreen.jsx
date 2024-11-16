import "../styles/load.css"
function LoadingScreen() {
  return (
    <div className="LoadContainer">
        <img src="src\assets\loading.png" alt="loading" />
        <div className="title"> Loading...</div>
    </div>
  )
}

export default LoadingScreen;