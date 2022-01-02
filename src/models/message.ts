export interface IMessage {
    text: string;
    owner: 'bot' | 'user'
}

export type Messages = IMessage[];