import S3, { ObjectList } from "aws-sdk/clients/s3";
import { useEffect, useState } from "react";

export default function Camera() {
  // const bucketName = "epic-y2-sem3-image-bucket";
  // const s3 = new S3();

  // const [files, setFiles] = useState<ObjectList>([]);

  // useEffect(() => {
  //   const fetchFiles = async () => {
  //     const response = await s3.listObjectsV2({ Bucket: bucketName }).promise();
  //     setFiles(response.Contents!);
  //   };

  //   fetchFiles();
  // }, []);

  return <div></div>;
}
