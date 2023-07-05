import getCurrentUser from "@/actions/getCurrentUser";
import EmptyState from "@/components/EmptyState";
import getReservations from "@/actions/getReservations";
import ReservationsClient from "./ReservationsClient";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();
  const reservations = await getReservations({ authorId: currentUser?.id });

  if (!currentUser) {
    return <EmptyState title="Unauthorized!" subtitle="Please, login!" />;
  }

  if (!reservations.length) {
    return (
      <EmptyState
        title="No Reservations Found!"
        subtitle="It looks like you have no reservations on your properties!"
      />
    );
  }

  return (
    <ReservationsClient reservations={reservations} currentUser={currentUser} />
  );
};

export default ReservationsPage;
