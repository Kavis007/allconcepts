import React from 'react'
import Cookies from 'js-cookie'

function CookiesExample() {

    localStorage.setItem("name","kavi")
    sessionStorage.setItem("name","kavi")
    localStorage.setItem("value","true")
    localStorage.removeItem("name")
    localStorage.clear()
    function acceptCookie(){
        Cookies.set("value","true",{expires:30})
        alert("accepted")
    }

  return (
    <div>
      {sessionStorage.getItem("name")}
      <button onClick={acceptCookie}>Accept</button>
      <div>the cookies are accepted</div>
      {Cookies.get("value")}
    </div>
  )
}

export default CookiesExample
