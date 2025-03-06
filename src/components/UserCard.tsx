import { User } from "../types/User";

interface UserCardProps {
  user: User;
  toggleFavorite: (user: User) => void;
  favorites: User[];
}

const UserCard: React.FC<UserCardProps> = ({ user, toggleFavorite, favorites }) => {
  const isFavorite = favorites.some((fav) => fav.id === user.id);
  
  return (
    <div className="border p-4 rounded shadow flex justify-between items-center">
      <div>
        <h2 className="text-lg font-bold">{user.name}</h2>
        <p>{user.email}</p>
        <p className="text-sm text-gray-500">{user.company.name}</p>
      </div>
      <button
        onClick={() => toggleFavorite(user)}
        className={isFavorite ? "text-red-500" : "text-gray-400"}
      >
        ♥
      </button>
    </div>
  );
};

export default UserCard;
