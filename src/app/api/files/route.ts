import { pinata } from "@/shared/utils";
import { NextResponse, NextRequest } from "next/server";


/* export const config = {
  api: {
    bodyParser: false,
  },
}; */

const _Collection = { 
  name: "Name of collection",
  description: "Extended description of this collection",
  image: "ipfs",
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const name: string | null = data.get("name") as unknown as string
    const description: string | null = data.get("description") as unknown as string
    const supply: number | null = data.get("supply") as unknown as number
    const file: File | null = data.get("file") as unknown as File;

    if(!name || !description || !supply || !file) {
      return NextResponse.json({
        error: "Empty fields"
      }, {
        status: 400
      })
    }

    const uploadData = await pinata.upload.file(file)
    const url = await pinata.gateways.convert(uploadData.IpfsHash)
    const uploadedJSON = await pinata.upload.json({ name, description, supply, image: url })
    console.log(url, uploadData, uploadedJSON)
    return NextResponse.json(url, { status: 200 });
  } catch (e) {
    console.log(e, "Catch error");
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
