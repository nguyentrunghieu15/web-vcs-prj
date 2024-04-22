import { number } from "yup";

export interface IFile {
    ID: string;
    CreatedAt: string;
    UpdatedAt: string;
    CreatedBy: number;
    UpdatedBy: number;
    FileName: string;
    FileSize: string;
    FilePath: string;
    Status: string;
}

export interface IResponseGetAllFileOfUser {
    files: IFile[];
}
