import { number } from "yup";

export interface IFile {
    id: string;
    createdAt: string;
    updatedAt: string;
    createdBy: number;
    updatedBy: number;
    fileName: string;
    fileSize: string;
    filePath: string;
    status: string;
}

export interface IResponseGetAllFileOfUser {
    files: IFile[];
}
