import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import getCurrentUser from "@/actions/getCurrentUser";

interface IParams {
  id?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) return NextResponse.error();

  const { id } = params;

  if (!id || typeof id !== "string") {
    throw new Error("Invalid Listing ID!");
  }

  const listing = await prisma.listing.deleteMany({
    where: {
      id: id,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
