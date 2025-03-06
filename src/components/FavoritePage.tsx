import { User } from "../types/User";
import UserCard from "./UserCard";

interface FavoritesPageProps {
  favorites: User[];
  toggleFavorite: (user: User) => void;
}

const FavoritesPage: React.FC<FavoritesPageProps> = ({ favorites, toggleFavorite }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Favorites</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((user) => (
            <UserCard key={user.id} user={user} toggleFavorite={toggleFavorite} favorites={favorites} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
