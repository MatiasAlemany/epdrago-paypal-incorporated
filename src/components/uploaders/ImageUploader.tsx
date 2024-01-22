import { OurFileRouter } from "@/app/api/uploadthing/core";
import { cn } from "@/lib/utils";
import { UploadButton } from "@/utils/uploadthing";
import { Spinner } from "@nextui-org/react";
import React, { useState } from "react";

const ImageUploader = ({
  onUploadComplete,
}: {
  onUploadComplete: (url: string) => void;
}) => {
  const [uploading, setUploading] = useState(false);
  const [imgUrl, setImgUrl] = useState<string | undefined>(undefined);

  return (
    <div>
      {uploading ? (
        <Spinner color="success" />
      ) : !(imgUrl != undefined) ? (
        //@ts-ignore
        <UploadButton<OurFileRouter>
          endpoint="imageUploader"
          content={{
            button: "SUBIR IMAGEN",

            allowedContent: "4MB MAXIMO",
          }}
          appearance={{
            button: "bg-green-600 px-4 font-bold text-sm py-2",
          }}
          onUploadBegin={() => {
            setUploading(true);
          }}
          onClientUploadComplete={(res) => {
            if (res) {
              onUploadComplete(res[0]!.url);
              setUploading(false);
              setImgUrl(res[0]!.url);
            }
          }}
          onUploadError={(error) => {
            console.log(error);
          }}
        />
      ) : (
        <h1> Imagen Subida!</h1>
      )}
      <input hidden name="img_url" value={imgUrl} />
    </div>
  );
};

export default ImageUploader;
