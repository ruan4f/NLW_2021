import prismaClient from "../prisma";

class GetLast3MessagesService {
  async execute(text: string, user_id: string) {
    const messages = await prismaClient.message.findFirst({
      take: 3,
      orderBy: {
        created_at: "desc"
      },
      include: {
        user: true
      }
    });

    return messages;
  }
}

export { GetLast3MessagesService }
