import getCurrentUser from "@/actions/getCurrentUser";
import PropertiesClient from "./PropertiesClient";
import getReservations from "@/actions/getReservations";
import EmptyState from "@/components/EmptyState";
import getListings from "@/actions/getListings";

interface IParams {
  listingId?: string;
}

const PropertiesPage = async ({ params }: { params: IParams }) => {
  const currentUser = await getCurrentUser();
  const listings = await getListings({ userId: currentUser?.id });

  if (!currentUser) {
    return <EmptyState title="Unauthorized!" subtitle="Please, login!" />;
  }

  if (!listings.length) {
    return (
      <EmptyState
        title="No Properties Found!"
        subtitle="It looks like you have no Properties!"
      />
    );
  }

  return <PropertiesClient listings={listings} currentUser={currentUser} />;
};

export default PropertiesPage;
