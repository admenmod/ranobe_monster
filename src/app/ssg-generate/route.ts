import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest) {
	console.log(req.url);

	return NextResponse.json({ ok: 'ok' });
}
