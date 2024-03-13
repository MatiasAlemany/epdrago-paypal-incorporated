import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    imageUploader: f({ image: { maxFileSize: "4MB" }})

        .onUploadComplete(async ({ metadata, file }) => {
            // This code RUNS ON YOUR SERVER after upload
            console.log("Upload complete!");

            console.log("file url", file.url);
        }),
        pdfUploader: f({pdf: {maxFileSize: '16MB'}})
        .onUploadComplete(async ({file}) => {
            console.log('upload complete')
            console.log('file url', file)
        })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;