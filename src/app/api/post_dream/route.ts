// api/post_dream/route.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

type ReqData = {
  mail: string;
  name: string;
  blob: string;
};

const client = new MongoClient(process.env.MONGO_DB_URL as string);

export const POST = async (
  req: any,
  res: NextApiResponse<any>
): Promise<void> => {
  try {
    const form = await req.formData();

    const name = form.get("name");
    const mail = form.get("mail");
    const blobFile = form.get("blob");
    const blobBuffer = await blobFile?.arrayBuffer();

    const blobBase64 = Buffer.from(blobBuffer).toString("base64");

    const dataToInsert: ReqData = {
      name: name as string,
      mail: mail as string,
      blob: blobBase64,
    };

    await client.connect();
    const database = client.db("dream_catcher");
    const collection = database.collection("dreams");

    const result = await collection.insertOne(dataToInsert);
    console.log(` document inserted`);

    res.status(200).json({ message: "Success" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
};
