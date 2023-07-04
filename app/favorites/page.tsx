import EmptyState from "@/components/EmptyState";
import getCurrentUser from "@/actions/getCurrentUser";
import getFavoriteListings from "@/actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

const FavoritesPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (!listings.length) {
    return (
      <EmptyState
        title="No Favorites Found!"
        subtitle="It looks like you don't have any favorites yet!"
      />
    );
  }

  return <FavoritesClient listings={listings} currentUser={currentUser} />;
};

export default FavoritesPage;
