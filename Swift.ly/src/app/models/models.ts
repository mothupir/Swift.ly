export enum Status {
    PENDING = 0,
    COMPLETED = 1
}

export enum TransactionType {
    DEPOSIT = 0,
    WITHDRAWAL = 1
}

export class Transaction {
    uuid: string;
    type: TransactionType;
    amount: number;
    timestamp: number;
    hash: string;
    status: Status;

    constructor(uuid: string = "", type: TransactionType = TransactionType.DEPOSIT, amount: number = 0, timestamp: number = 0, hash: string = "", status: Status = Status.PENDING) {
        this.uuid = uuid;
        this.type = type;
        this.amount = amount;
        this.timestamp = timestamp;
        this.hash = hash;
        this.status = status;
    }
}

