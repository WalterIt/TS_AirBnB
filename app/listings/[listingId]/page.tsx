import getCurrentUser from "@/actions/getCurrentUser";
import getListingById from "@/actions/getListingById";
import ListingClient from "./ListingClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  if (!listing) return null;

  return <ListingClient listing={listing} currentUser={currentUser} />;
};

export default ListingPage;