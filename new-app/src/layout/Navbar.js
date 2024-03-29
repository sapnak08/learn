export default function Navbar() {
  return (
    <>
      <div>
        <ul
          style={{
            backgroundColor: "brown",
            display: "flex",
            listStyleType: "none",
            padding: "10px",
            margin: "0",
          }}
        >
          <li>
            <a
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "10px",
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/About"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "10px",
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/Contact"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "10px",
              }}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/Team"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "10px",
              }}
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="/Help"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "10px",
              }}
            >
              Help
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
