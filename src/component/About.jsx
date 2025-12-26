import '../index.css';
export default function About() {
  return (
    <>
     <div className="container">
         {/* Header */}
        <div className="header">
            <h1>About Us</h1>
            <div className="underline"></div>
        </div>

        {/* Main Card */}
        <div className="main-card">
            {/* Welcome Section */}
            <div className="welcome-section">
                <p>
                    Welcome to <span className="brand">FakeStore</span>, your number one source for all things fashion and electronics. 
                    We're dedicated to providing you the very best of products, with an emphasis on quality, 
                    customer service, and uniqueness.
                </p>
            </div>

            {/* Story Section */}
            <div className="story-section">
                <h3>
                    <i className="fas fa-rocket"></i>
                    Our Story
                </h3>
                <p>
                    Founded in 2023, FakeStore has come a long way from its beginnings. When we first started 
                    out, our passion for offering the best products drove us to do intense research and gave us 
                    the impetus to turn hard work and inspiration into a booming online store. We now serve 
                    customers all over the world and are thrilled to be a part of the quirky, eco-friendly, and 
                    fair trade wing of the fashion and electronics industry.
                </p>
            </div>

            {/* Values Grid */}
            <div className="values-grid">
                <div className="value-card">
                    <i className="fas fa-gem"></i>
                    <h4>Quality</h4>
                    <p>Premium products you can trust</p>
                </div>
                <div className="value-card">
                    <i className="fas fa-handshake"></i>
                    <h4>Service</h4>
                    <p>Customer satisfaction first</p>
                </div>
                <div className="value-card">
                    <i className="fas fa-star"></i>
                    <h4>Unique</h4>
                    <p>Stand out from the crowd</p>
                </div>
            </div>

            {/* Closing Section */}
            <div className="closing-section">
                <p>
                    We hope you enjoy our products as much as we enjoy offering them to you. If you have any 
                    questions or comments, please don't hesitate to contact us.
                </p>
                <div className="signature-box">
                    <p>Sincerely,</p>
                    <p>The FakeStore Team</p>
                </div>
            </div>
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
            <div className="stat-card">
                <i className="fas fa-calendar-alt"></i>
                <div className="number">2023</div>
                <div className="label">Founded</div>
            </div>
            <div className="stat-card">
                <i className="fas fa-box"></i>
                <div className="number">1000+</div>
                <div className="label">Products</div>
            </div>
            <div className="stat-card">
                <i className="fas fa-globe"></i>
                <div className="number">Global</div>
                <div className="label">Shipping</div>
            </div>
        </div>
    </div>
    </>
  );
}