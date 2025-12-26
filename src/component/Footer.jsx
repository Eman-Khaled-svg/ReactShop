import '../nav.css'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} FakeStore Inc.
        </p>
      </div>
    </footer>
  );
}
