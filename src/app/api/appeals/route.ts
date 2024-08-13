import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';

import { authConfig } from '@/config/auth';
import prisma from '@/prisma/prisma-client';

export async function GET() {
  try {
    const session = await getServerSession(authConfig);

    if (!session) {
      return NextResponse.json(
        { message: 'Not authenticated' },
        { status: 401 }
      );
    }

    const appeals = await prisma.appeal.findMany();
    return NextResponse.json(appeals);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
