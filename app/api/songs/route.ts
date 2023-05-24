import { insertSongRecord } from "@/libs/supabaseAdmin";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
    try {
    const body = await request.json();

    const record = await insertSongRecord(body);

    return NextResponse.json(record);
  } catch (error) {
    console.log(error, 'SONGS_ERROR');
    return new NextResponse('Internal Error', { status: 500 });
  }
};
