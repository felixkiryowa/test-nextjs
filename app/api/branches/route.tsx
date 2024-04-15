import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export async function GET(request: any) {
    const branches = await prisma.branches.findMany();

    const serializedData = branches.map(branch => ({
        ...branch,
        id: branch.id.toString()
      }))

    return NextResponse.json(serializedData);
}


