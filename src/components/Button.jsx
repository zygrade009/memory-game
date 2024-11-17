import "../styles/button.css"
function Button({children,handleRestart}) {
  return (
    <div className="button-container">
       <div className="button-title" onClick={handleRestart}>{children}</div>
    </div>
  )
}

export default Button