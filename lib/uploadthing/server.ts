import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { ADMIN_SESSION_COOKIE, readAdminSessionToken } from "@/lib/admin-auth";

const f = createUploadthing();

export const ourFileRouter = {
  // Загрузчик для фото барберов
  barberPhoto: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
      const session = readAdminSessionToken(
        req.cookies.get(ADMIN_SESSION_COOKIE)?.value,
      );

      if (!session || session.role !== 'full') {
        throw new UploadThingError({
          code: "FORBIDDEN",
          message: "У вас нет прав вносить изменения",
        });
      }

      return { userId: "admin" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("✅ Фото загружено:", file.url);
      return { url: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
