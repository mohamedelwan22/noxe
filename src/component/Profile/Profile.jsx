import React, { useEffect } from "react";

export default function Profile({ userData }) {
  useEffect(() => {
    document.title = "PROFILE";
  }, []);

  if (!userData) {
    return (
      <div className="text-center py-5">
        <i className="fas fa-spinner fa-spin fa-3x"></i>
        <p>Loading...</p>
      </div>
    );
  }

  const fullName = userData["first-name"] && userData["last-name"]
    ? `${userData["first-name"]} ${userData["last-name"]}`
    : `${userData["first_name"] || ""} ${userData["last_name"] || ""}`;

  return (
    <section className="profile container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card text-center shadow-lg">
            <div className="card-body p-5 bg-info text-white rounded-4">
              {/* Avatar */}
              <img
                src={userData["avatar"]}
                alt={fullName}
                className="rounded-circle mb-3"
                width="120"
                height="120"
              />

              {/* Hello + Name */}
              <h2 className="fw-bold mb-3">Hello, {fullName}</h2>

              {/* User Info */}
              <ul className="list-group list-group-flush mb-4">
                {userData["age"] && (
                  <li className="list-group-item bg-info text-white border-light">
                    <strong>Age:</strong> {userData["age"]}
                  </li>
                )}
                {userData["email"] && (
                  <li className="list-group-item bg-info text-white border-light">
                    <strong>Email:</strong> {userData["email"]}
                  </li>
                )}
              </ul>

              {/* Action Buttons */}
              <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-light text-info">Edit Profile</button>
                <button className="btn btn-outline-light">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-5 pt-4 border-top text-center text-warning">
        Developed and designed by <span className="fw-bold text-info">Mohamed Elwan</span> © 2025
      </footer>
    </section>
  );
}
