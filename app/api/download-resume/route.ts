import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "YordanosBogale_Resume.pdf")
    const fileBuffer = fs.readFileSync(filePath)

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=YordanosBogale_Resume.pdf",
      },
    })
  } catch (error) {
    console.error("Error serving resume:", error)
    return new NextResponse("Error serving resume", { status: 500 })
  }
}

