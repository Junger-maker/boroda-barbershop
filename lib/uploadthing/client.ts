import { generateReactHelpers } from "@uploadthing/react";
import type { OurFileRouter } from "./server";

export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();
