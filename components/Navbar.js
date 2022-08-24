
import Link from 'next/link'

const Navbar = () => (
<>
<nav className="navbar navbar-expand-lg bg-success">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Nextjs</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <Link href="/employee/post"><a className="nav-link text-primary">หน้าแรก</a></Link>
        <Link href="/employee"><a className="nav-link text-primary">ข้อมูลพนักงาน</a></Link>

      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-primary" type="submit">เข้าสู่ระบบ</button>
      </form>
    </div>
  </div>
</nav>

</>
)

export default Navbar