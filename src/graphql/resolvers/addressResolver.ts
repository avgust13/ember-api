export const addressResolvers = {
  Query: {
    addresses: async (_parent: any, _args: any, context: any) => {
      return context.prisma.address.findMany();
    },
    address: async (_parent: any, args: { id: number }, context: any) => {
      return context.prisma.address.findUnique({
        where: { id: args.id },
      });
    },
  },
  Mutation: {
    createAddress: async (
      _parent: any,
      args: { address: string; country?: string; zip?: string },
      context: any
    ) => {
      return context.prisma.address.create({
        data: {
          address: args.address,
          country: args.country,
          zip: args.zip,
        },
      });
    },
    updateAddress: async (
      _parent: any,
      args: { id: number; address?: string; country?: string; zip?: string },
      context: any
    ) => {
      return context.prisma.address.update({
        where: { id: args.id },
        data: {
          address: args.address,
          country: args.country,
          zip: args.zip,
        },
      });
    },
    deleteAddress: async (_parent: any, args: { id: number }, context: any) => {
      return context.prisma.address.delete({
        where: { id: args.id },
      });
    },
  },
};
