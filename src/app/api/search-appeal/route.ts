import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import prisma from '@/prisma/prisma-client';

export async function GET(req: NextRequest) {
  try {
    const query = Number(req.nextUrl.searchParams.get('id'));

    const appeal = await prisma.appeal.findMany({
      where: {
        id: query,
      },
    });

    return NextResponse.json(appeal[0]);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
