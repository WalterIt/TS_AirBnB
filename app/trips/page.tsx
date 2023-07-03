import getCurrentUser from "@/actions/getCurrentUser";
import EmptyState from "@/components/EmptyState";
import getReservations from "@/actions/getReservations";

import React from "react";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();
  const reservations = await getReservations({ userId: currentUser?.id });

  if (!currentUser) {
    return <EmptyState title="Unauthorized!" subtitle="Please, login!" />;
  }

  if (!reservations.length) {
    return (
      <EmptyState
        title="No Trips Found!"
        subtitle="It looks like you haven't reserved any trip!"
      />
    );
  }
  return <TripsClient reservations={reservations} currentUser={currentUser} />;
};

export default TripsPage;
