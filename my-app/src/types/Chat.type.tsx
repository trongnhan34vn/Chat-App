export interface IChat {
  id: number;
  content: string;
  userId: number;
  roomId: number;
  createdTime: number;
}

export interface IChatMessage {
  senderEmail: string;
  receiverEmail: string;
  content: string;
  roomId: number;
  chatMessageStatus: string;
}