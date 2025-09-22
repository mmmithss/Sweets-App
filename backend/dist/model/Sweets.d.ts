import { Document, Types } from "mongoose";
export interface SweetDocument extends Document {
    _id: Types.ObjectId;
    name: string;
    price: number;
    category: string;
    quantity: number;
    image: string;
}
declare const Sweets: import("mongoose").Model<SweetDocument, {}, {}, {}, Document<unknown, {}, SweetDocument, {}, {}> & SweetDocument & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default Sweets;
//# sourceMappingURL=Sweets.d.ts.map