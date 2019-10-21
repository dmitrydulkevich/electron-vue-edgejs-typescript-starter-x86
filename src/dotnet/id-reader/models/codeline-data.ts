export default interface CodelineData {
    Data: string;
    MrzOnRearSide: boolean;
    CodelineValidationResult: CheckDigitResult
    CheckDigitDataListCount: number;
    CheckDigitDataList: CodelineCheckDigitData[];
    OptionalData2: string;
    OptionalData1: string;
    ShortSex: string;
    Sex: string;
    DocNumber: string;
    Nationality: string;
    IssuingState: string;
    ExpiryDate: ReaderData;
    DateOfBirth: ReaderData;
    Forenames: string;
    SecondName: string;
    Forename: string;
    Surname: string;
    DocType: string;
    DocId: string;
    Line3: string;
    Line2: string;
    Line1: string;
    LineCount: number;
    ExpiredDocumentFlag: boolean;
    ImageSource: number;
}

export enum CheckDigitResult {
    CDR_Invalid = 0,
    CDR_Valid = 1,
    CDR_Warning = 2,
    CDR_NotValidated = 3
}

export interface CodelineCheckDigitData {
    puCheckDigitType: CheckDigitType;
    puCodelineNumber: number;
    puCodelinePos: number;
    puValueExpected: string;
    puValueRead: string;
    puResult: CheckDigitResult;
}

export enum CheckDigitType {
    CDT_DocID = 0,
    CDT_DOB = 1,
    CDT_Expiry = 2,
    CDT_OptionalData = 3,
    CDT_Overall = 4
}

export interface ReaderData {
    Day: number;
    Month: number;
    Year: number;
}