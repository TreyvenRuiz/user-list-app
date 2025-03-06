import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import SearchBar from "./components/SearchBar";
import FavoritesPage from "./components/FavoritePage";
import { User } from "./types/User";
import "./styles/global.css";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching users");
        setLoading(false);
      });

    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (user: User) => {
    const updatedFavorites = favorites.some((fav) => fav.id === user.id)
      ? favorites.filter((fav) => fav.id !== user.id)
      : [...favorites, user];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List SPA</h1>
      <button
        className="mb-4 p-2 border rounded bg-blue-500 text-white"
        onClick={() => setShowFavorites(!showFavorites)}
      >
        {showFavorites ? "Show All Users" : "Show Favorites"}
      </button>
      <SearchBar search={search} setSearch={setSearch} />
      {loading && <p>Loading users...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {showFavorites ? (
        <FavoritesPage favorites={favorites} toggleFavorite={toggleFavorite} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} toggleFavorite={toggleFavorite} favorites={favorites} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
