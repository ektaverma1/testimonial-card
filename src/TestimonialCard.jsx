function TestimonialCard() {
  return (
    <main>
      <div className="card">
        <div className="card-header">
          <img
            src="/profile-thumbnail.png"
            alt="profile thumbnail"
            className="card-avatar"
          />
          <div className="card-info">
            <h2 className="card-name">Sarah Dole</h2>
            <p className="card-username">@sarahdole</p>
          </div>
        </div>
        <p>
          I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!
        </p>
      </div>
    </main>
  );
}

export default TestimonialCard;
