import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
type Params = {
    params: { take: string }
}
export function GET(request: Request, { params }: Params) {
    console.log(params.take)
    return NextResponse.json({ message: "Arrive take" })
}

export async function PUT(request: Request, { params }: Params) {
    //... Obtener todo como el GET
    const { take } = params
    const body = await request.json();
    const updateTodo = await prisma.todo.update({
        where: { take },
        data: { ...body } // Peligro! Manda todo a la base de datos
    })
    // Resto del codigo ...
}