export default function User({ user }) {
    const {name, email} = user
  
    return (
      <div>
        <h4>{user.name}</h4>
        <p>Email: {user.email}</p>
      </div>
    );
  }