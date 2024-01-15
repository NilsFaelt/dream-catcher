// route.ts
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
  res: NextApiResponse<ReqData>
): Promise<void | Response> => {
  const data = await req.json();

  console.log(` documents inserted`, data);
  try {
    await client.connect();
    const database = await client.db("dream_catcher");
    const collection = database.collection("dreams");
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const result = await collection.insertOne(data);
    return Response.json(result);
  } catch (err) {
    console.log(err);
  }
};
