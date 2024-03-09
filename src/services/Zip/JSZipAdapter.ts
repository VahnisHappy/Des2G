import JSZip from "jszip";
import Zip from "@/services/Zip/index.ts";
import {File} from "@/types/Zip.ts";
export default class JSZipAdapter implements Zip {
    private zip: JSZip;
    constructor() {
        this.zip = new JSZip();
    }
    async list(): Promise<File[]> {
        return [];
    }
    async add(file: File): Promise<boolean> {
        if (this.zip.file(file.name))
            return false;
        this.zip.file(file.name, file.content);
        return true;
    }
    async remove(name: string): Promise<boolean> {
        return this.zip.remove(name) !== null;
    }
    async clear(): Promise<void> {
        this.zip = new JSZip();
    }
    async export(): Promise<Blob> {
        return this.zip.generateAsync({type: "blob"});
    }
}