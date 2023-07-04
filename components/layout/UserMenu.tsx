"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { useCallback, useEffect, useState } from "react";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import useRentModal from "@/hooks/useRentModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/types";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.querySelector(".menu") as HTMLElement;
      if (menu && !menu.contains(event.target as HTMLElement)) {
        setIsOpen(false);
        document.removeEventListener("click", handleClickOutside);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const onRent = useCallback(() => {
    if (!currentUser) return loginModal.onOpen();

    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row gap-3">
        <div
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          onClick={onRent}
        >
          Airbnb your Home
        </div>
        <div
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
          onClick={toggleOpen}
        >
          <AiOutlineMenu />

          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="menu absolute rounded-lg shadow-md w-[40vw] md:w-[65%] bg-white overflow-hidden right-0 top-12 text-sm ">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem label={`${currentUser?.name}`} onClick={() => {}} />
                <hr />
                <MenuItem
                  label="My Trips"
                  onClick={() => router.push("/trips")}
                />
                <MenuItem
                  label="My Favorites"
                  onClick={() => router.push("/favorites")}
                />
                <MenuItem
                  label="My Reservations"
                  onClick={() => router.push("/reservations")}
                />
                <MenuItem label="My Properties" onClick={() => {}} />
                <MenuItem label="Airbnb my Home" onClick={rentModal.onOpen} />
                <hr />
                <MenuItem label="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={loginModal.onOpen} />
                <MenuItem label="Sign Up" onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
