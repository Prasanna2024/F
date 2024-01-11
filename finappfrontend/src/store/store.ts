import { create } from 'zustand'
import MockNotificaton from './notificationData.json'
export interface StoreState {
  notification: notifi[]; // Replace 'any' with the actual type of your notification
  bittingAmount: number;
  setNotification: (value: any) => void;
  setBittingAmount: (value: number) => void;
}
export interface notifi {
  id:string ,
  name: string ,
  amount: Number ,
  email: string ,
  Date_in: Date | null,
  Date_out: Date | null,
  interest: Number,
  requested:Boolean
}
export const useStore = create<StoreState>((set) => ({
  notification: [],
  bittingAmount: 10000,
  setNotification: (value: any) => set((state: any) => ({ notification: value })),
  setBittingAmount: (value: number) => set(({ bittingAmount: value }))
}))