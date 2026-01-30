import prisma from "../utils/prismaClient.js"
import { type ISuperhero, type IUpdateSuperhero } from "../types/superhero.type.js";


export class SuperheroService {

    createSuperhero(data: any) {
        return prisma.superhero.create({data : {
            nickname: data.nickname,
            real_name: data.real_name,
            origin_description: data.origin_description,
            superpowers: data.superpowers,
            catch_phrase: data.catch_phrase,
            images: data.images ?? []
        }})
    }

    async getAllSuperheroes(page = 1, limit = 5 ) {

        const skip = (page - 1) * limit;
        
        const [items, total] = await Promise.all([
            prisma.superhero.findMany({
                skip,
                take: limit,
                select: {
                    id: true,
                    nickname: true,
                    images: true
                }
            }),

            prisma.superhero.count()
        ])

        return { items, total, page ,totalPages: Math.ceil(total / limit)}
    }

    async getSuperheroById(id: string) {
        const Superhero = await prisma.superhero.findUnique({
            where: { id },
        })

        return Superhero;
    }

    updateSuperhero(id: string, data: IUpdateSuperhero) {
        return prisma.superhero.update({
            where: {id}, 
            data: {
                ...(data.nickname !== undefined && { nickname: data.nickname }),
                ...(data.realName !== undefined && { real_name: data.realName }),
                ...(data.originDescription !== undefined && {origin_description: data.originDescription}),
                ...(data.superpowers !== undefined && { superpowers: data.superpowers }),
                ...(data.catchPhrase !== undefined && { catch_phrase: data.catchPhrase }),
                ...(data.images !== undefined && { images: data.images })
            }
        })
    }

    removeSuperhero(id: string) {
        return prisma.superhero.delete({ 
            where: {id}
        })
    }
}

export const superheroService = new SuperheroService();