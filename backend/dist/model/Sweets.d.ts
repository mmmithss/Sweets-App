import mongoose from "mongoose";
declare const Sweets: mongoose.Model<{
    name: string;
    category: string;
    price: number;
    quantity: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    category: string;
    price: number;
    quantity: number;
}, {}, mongoose.DefaultSchemaOptions> & {
    name: string;
    category: string;
    price: number;
    quantity: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    category: string;
    price: number;
    quantity: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    category: string;
    price: number;
    quantity: number;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    name: string;
    category: string;
    price: number;
    quantity: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Sweets;
//# sourceMappingURL=Sweets.d.ts.map