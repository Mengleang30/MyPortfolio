import './Footer.css'

const Footer = () => {
  return (
    <footer className='Footer' id='Footer'>

      <form action="" className='submit_form'>
        <textarea name="" id="" placeholder='Write feetback to me' />
        <input type="text" placeholder='Write your name here...'/>
        <input type="text" placeholder='Write your email here...' />
        <button>Submit</button>
      </form>
      <div className='right-footer'>
        <div className='Contract_me'>
          <span>Contract Me</span>
          <hr />
          <div className='group-icon'>
            <a href="https://www.facebook.com/profile.php?id=100048321487085&mibextid=ZbWKwL">
              <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="facebook_png" />
            </a>
            <a href="https://github.com/Mengleang30">
              <img src="https://img.icons8.com/?size=100&id=52539&format=png&color=000000" alt="github_png" />
            </a>
            <a href="https://t.me/NovMengLeang">
              <img src="https://img.icons8.com/?size=100&id=63306&format=png&color=000000" alt="telegram_png" />
            </a>
          </div>
        </div>
        <address>Phnom Penh capital, Cambodia</address>

      </div>

    </footer>
  )
}

export default Footer
