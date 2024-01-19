"use server";
// api/post_dream/route.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { json } from "stream/consumers";

type ReqData = {
  mail: string;
  name: string;
  blob: string;
};

const client = new MongoClient(process.env.MONGO_DB_URL as string);

export const POST = async (
  req: any,
  res: NextApiResponse,
  next: any
): Promise<any> => {
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
    return new Response("Data succesfully inserted", {
      status: 200,
    });
  } catch (err) {
    console.error("Error:", err);
    return new Response("Could not insert data", {
      status: 500,
    });
  } finally {
    await client.close();
  }
};

interface Dream {
  name: string;
  mail: string;
  blob: string;
}
export const GET = async (
  req: any,
  res: NextApiResponse,
  next: any
): Promise<any> => {
  try {
    await client.connect();
    const database = client.db("dream_catcher");
    const collection = database.collection("dreams");
    const cursor = collection.find();
    const documents = await cursor.toArray();

    return new Response(JSON.stringify(documents), {
      status: 200,
    });
  } catch (err) {
    console.error("Error:", err);
    return new Response("Hello", {
      status: 200,
    });
  } finally {
    await client.close();
  }
};
