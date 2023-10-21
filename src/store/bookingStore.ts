import { create } from "zustand";
import { TicketType } from "@lib/mongo/ticket-types";

export type UserInfo = {
  username: string;
  email: string;
  phoneNumber: string;
};

type BookingStore = {
  userInfo: UserInfo;
  selectedTickets: TicketType[];
  setUserInfo: (value: UserInfo) => void;
  setSelectedTickets: (value: TicketType[]) => void;
};

const useBookingStore = create<BookingStore>()((set) => ({
  userInfo: { username: "", email: "", phoneNumber: "" },
  selectedTickets: [],
  setUserInfo: (value: UserInfo) =>
    set({
      userInfo: {
        username: value.username,
        email: value.email,
        phoneNumber: value.phoneNumber,
      },
    }),
  setSelectedTickets: (value: TicketType[]) =>
    set({
      selectedTickets: [...value],
    }),
}));

export const useUserInfo = () => useBookingStore((state) => state.userInfo);
export const useSelectedTickets = () =>
  useBookingStore((state) => state.selectedTickets);

export const useSetUserInfo = () =>
  useBookingStore((state) => state.setUserInfo);
export const useSetSelectedTickets = () =>
  useBookingStore((state) => state.setSelectedTickets);
