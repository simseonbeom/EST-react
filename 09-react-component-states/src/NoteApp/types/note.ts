import type { UserType } from "@/pages/users/types/user";

export type NoteType = {
  id: number,
  title: string,
  content: string,
  userId: number,
  createdAt?: string,
  updatedAt?: string,
  expand: {
    user: UserType | null,
  }
};