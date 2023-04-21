export interface Coding {
    orderType: string;
    orderStatus: string;
    icdCodes: IcdCodes[];
    icdCodeString: string;
    renalStatus: string;
    isRequestButton: boolean;
    isCancelButton: boolean;
    isSubmitClicked: boolean;
}

export interface IcdCodes {
    id: number;
    name: string;
}