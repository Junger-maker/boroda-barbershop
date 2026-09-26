import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  // Загрузчик для фото барберов
  barberPhoto: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      // Здесь можно добавить проверку авторизации
      return { userId: "admin" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("✅ Фото загружено:", file.url);
      return { url: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
