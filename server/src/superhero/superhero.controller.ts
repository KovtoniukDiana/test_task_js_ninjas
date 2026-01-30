import { type Request, type Response } from "express";
import { superheroService  } from "./superhero.service.js";
import { supabase } from "../utils/supabaseClient.js";
import { v4 as uuid } from "uuid";


class SuperheroController {

    async create( request: Request, response: Response ) {

        try {

            const file = request.file;
            if (!file) {
                return response.status(400).json({ message: "Image is required" });
            }

            const fileName = `superheroes/${uuid()}-${file.originalname}`;

            const { error } = await supabase.storage
                .from("superhero-images")
                .upload(fileName, file.buffer, {
                contentType: file.mimetype,
                });

            if (error) throw error;

            const { data } = supabase.storage
                .from("superhero-images")
                .getPublicUrl(fileName);

            const imageUrl = data.publicUrl;

            const hero = await superheroService.createSuperhero({
                nickname: request.body.nickname,
                real_name: request.body.realName || request.body.real_name,
                origin_description: request.body.originDescription || request.body.origin_description,
                superpowers: request.body.superpowers,
                catch_phrase: request.body.catchPhrase || request.body.catch_phrase,
                images: [imageUrl],
            });

        response.status(201).json(hero);
            
        } catch (error) {
            console.error(error);
            response.status(500).json({ message: "Failed to create superhero" });
        }
    }


    async getAll( request: Request, response: Response ) {
        const page = Number(request.query.page) || 1;
        const limit = Number(request.query.limit) || 5;

        const hero = await superheroService.getAllSuperheroes(page, limit);
        response.json(hero);
    }


    async getById ( request: Request, response: Response ) {
        const hero = await superheroService.getSuperheroById(request.params.id as string);

        if (!hero) {
        return response.status(404).json({ message: 'Superhero not found' });
        }

        response.json(hero);
    }


    async update( request: Request, response: Response ) {
        const hero = await superheroService.updateSuperhero(request.params.id as string, request.body);

        response.json(hero);
    }


    async delete( request: Request, response: Response ) {
        await superheroService.removeSuperhero(request.params.id as string);
        return response.status(204).send();
    }
} 

export const superheroController = new SuperheroController();



