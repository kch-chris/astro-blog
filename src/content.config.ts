import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image}) =>  z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        image: image(),
        // Relationship to authors
        author: reference('author'),
        // Relationship
        tags: z.array(z.string()),

        //Boolean
        isDraft: z.boolean().default(false),
    })
});

const authorCollection = defineCollection({
    type: 'data',
    schema: ({ image}) =>  z.object({
        name: z.string(),
        avatar: image(),
        twitter: z.string(),
        linkedIn: z.string(),
        github: z.string(),
        bio: z.string(),
        subtitle: z.string(),
    })
});
export const collections = {
    blog: blogCollection,
    author: authorCollection
};