import mongoose from "mongoose";
declare const Sweets: mongoose.Model<{
    name: string;
    price: number;
    category: string;
    quantity: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    price: number;
    category: string;
    quantity: number;
}, {}, mongoose.DefaultSchemaOptions> & {
    name: string;
    price: number;
    category: string;
    quantity: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    price: number;
    category: string;
    quantity: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    price: number;
    category: string;
    quantity: number;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    name: string;
    price: number;
    category: string;
    quantity: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Sweets;
//# sourceMappingURL=Sweets.d.ts.map