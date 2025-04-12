import PrismaClientManager from "./pgConnect";

const prisma = PrismaClientManager.getInstance().getPrismaClient();

export default prisma