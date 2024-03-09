import {File} from "@/types/Zip.ts";

export default interface Zip {
    list(): Promise<File[]>;
    add(file: File): Promise<boolean>;
    remove(name: string): Promise<boolean>;
    clear(): Promise<void>;
    export(): Promise<Blob>;
}