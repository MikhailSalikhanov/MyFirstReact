import s from './Header.module.css'

function Header() {
    return (
      <div className="Header">
            <img className={s.picture} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png" alt="" />
            Header
      </div>
    );
  }

export default Header;