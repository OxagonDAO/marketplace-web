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
    const type: string | null = data.get("type") as unknown as string
    if(!type) return NextResponse.json({
      error: "Not type provided"
    }, { status: 400 })

    const name: string | null = data.get("name") as unknown as string
    const image: File | null = data.get("image") as unknown as File;
    const symbol: string | null = data.get("symbol") as unknown as string
    const description: string | null = data.get("description") as unknown as string
    
    if(!name || !image || (!symbol && type === "collection")) return NextResponse.json({
      error: "Empty fields"
    }, { status: 400 })

    const dataToUpload: Record<string, any> = { name }

    // Upload image to IPFS, and after set to upload in JSON
    const uploadImage = await pinata.upload.file(image)
    dataToUpload.image = `ipfs://${uploadImage.IpfsHash}`

    if(symbol) dataToUpload.symbol = symbol

    const uploadedJSON = await pinata.upload.json(dataToUpload)

    return NextResponse.json(`ipfs://${uploadedJSON.IpfsHash}`, { status: 200 });
  } catch (e) {
    console.log(e, "Catch error");
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
