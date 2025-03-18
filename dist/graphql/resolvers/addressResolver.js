"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressResolvers = void 0;
exports.addressResolvers = {
    Query: {
        addresses: async (_parent, _args, context) => {
            return context.prisma.address.findMany();
        },
        address: async (_parent, args, context) => {
            return context.prisma.address.findUnique({
                where: { id: args.id },
            });
        },
    },
    Mutation: {
        createAddress: async (_parent, args, context) => {
            return context.prisma.address.create({
                data: {
                    address: args.address,
                    country: args.country,
                    zip: args.zip,
                },
            });
        },
        updateAddress: async (_parent, args, context) => {
            return context.prisma.address.update({
                where: { id: args.id },
                data: {
                    address: args.address,
                    country: args.country,
                    zip: args.zip,
                },
            });
        },
        deleteAddress: async (_parent, args, context) => {
            return context.prisma.address.delete({
                where: { id: args.id },
            });
        },
    },
};
